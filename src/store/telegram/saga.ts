import { all, takeEvery, call, put } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { getType } from "typesafe-actions";
import uuid from "uuid";

import { AUTHORIZATION_STATES } from "./types";
import {
  ReceiveMessageAction,
  SendMessageAction,
  SendMessageFailureAction,
  SendMessageSuccessAction
} from "./actions";

const TelegramWorker = require("../../services/telegram.worker");

let worker: any;

const promises = new Map<
  string,
  {
    resolve: any;
    reject: any;
  }
>();

function createWorker() {
  worker = new TelegramWorker();

  return eventChannel((emit: any) => {
    worker.onmessage = (event: any) => {
      emit(
        ReceiveMessageAction({
          data: event.data
        })
      );
    };

    return worker.terminate;
  });
}

function* subscribeToTelegramWorker() {
  const channel = yield createWorker();

  yield takeEvery(channel, dispatchMessage);
}

function* dispatchMessage(action: any) {
  const message = action.payload.data;

  if (message && message["@extra"]) {
    const { messageId } = message["@extra"];
    const promise = promises.get(messageId);

    if (promise) {
      if (message["@type"] === "error") {
        promise.reject(action);
      } else {
        promise.resolve(action);
      }
    }
  }

  return yield put(action);
}

function* sendMessage(action: any) {
  if (!worker) {
    throw new Error("Worker is not yet ready");
  }

  try {
    yield asyncSendMessage(action.payload);

    put(SendMessageSuccessAction());
  } catch {
    put(SendMessageFailureAction());
  }
}

export const asyncSendMessage = (message: any): Promise<any> => {
  console.warn("Send message:", message);

  return new Promise((resolve, reject) => {
    const id = uuid.v4();

    promises.set(id, {
      resolve,
      reject
    });

    worker.postMessage({
      type: "send",
      payload: {
        ...message,
        "@extra": {
          messageId: id
        }
      }
    });
  });
};

function loadInitialData(action: any) {
  switch (action.payload.data["@type"]) {
    case "updateAuthorizationState": {
      if (
        action.payload.data.authorization_state["@type"] ===
        AUTHORIZATION_STATES.AUTHORIZED
      ) {
        worker.postMessage({
          type: "send",
          payload: {
            "@type": "setOption",
            name: "online",
            value: {
              "@type": "optionValueBoolean",
              value: true
            }
          }
        });
      }

      break;
    }
    default: {
      // add other side effects
    }
  }
}

export function* telegramSaga() {
  return yield all([
    call(subscribeToTelegramWorker),
    takeEvery(getType(ReceiveMessageAction), loadInitialData),
    takeEvery(getType(SendMessageAction), sendMessage)
  ]);
}
