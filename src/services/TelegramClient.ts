import EventEmitter from "eventemitter3";
import { environment } from "../config/environment";
import {
  AUTHORIZATION_STATES,
  TELEGRAM_MESSAGE_TYPES
} from "../store/telegram/types";

const TD_RECEIVE_DELAY = 100;

export const TELEGRAM_CLIENT_SEND = "send";
export const TELEGRAM_CLIENT_RECEIVE = "receive";

interface TelegramClientOptions {
  apiId: string;
  apiHash: string;
}

export class TelegramClient {
  private tdFunctions: any;
  private client: any;
  private eventEmitter: EventEmitter = new EventEmitter();

  constructor(private tdWasm: any, private options: TelegramClientOptions) {
    this.tdFunctions = {
      td_create: tdWasm.cwrap("td_create", "number", []),
      td_destroy: tdWasm.cwrap("td_destroy", null, ["number"]),
      td_send: tdWasm.cwrap("td_send", null, ["number", "string"]),
      td_execute: tdWasm.cwrap("td_execute", null, ["number", "string"]),
      td_receive: tdWasm.cwrap("td_receive", "string", ["number"]),
      td_set_verbosity: tdWasm.cwrap("td_set_verbosity", null, ["number"])
    };

    this.loopReceive();
    this.create();
  }

  execute(message: any): void {
    this.tdFunctions.td_execute(this.client, JSON.stringify(message));
  }

  send(message: any): void {
    this.eventEmitter.emit(TELEGRAM_CLIENT_SEND, message);

    this.tdFunctions.td_send(this.client, JSON.stringify(message));
  }

  receive(): any {
    if (!this.client) {
      return null;
    }

    const result = this.tdFunctions.td_receive(this.client);

    if (result) {
      const parsedResult = JSON.parse(result);

      this.eventEmitter.emit(TELEGRAM_CLIENT_RECEIVE, parsedResult);

      if (
        parsedResult["@type"] ===
          TELEGRAM_MESSAGE_TYPES.UPDATE_AUTHORIZATION_STATE &&
        parsedResult.authorization_state["@type"] ===
          AUTHORIZATION_STATES.CLOSED
      ) {
        this.destroy();
        this.create();
      }

      return parsedResult;
    } else {
      return null;
    }
  }

  addListener(eventName: string, callback: any, context?: any): void {
    this.eventEmitter.addListener(eventName, callback, context);
  }

  removeListener(eventName: string, callback: any, context?: any): void {
    this.eventEmitter.removeListener(eventName, callback, context);
  }

  private loopReceive(): void {
    const result = this.receive();

    if (!result) {
      setTimeout(() => {
        this.loopReceive();
      }, TD_RECEIVE_DELAY);
    } else {
      this.loopReceive();
    }
  }

  private create(): void {
    this.client = this.tdFunctions.td_create();

    this.tdFunctions.td_set_verbosity(2);

    this.send({
      "@type": "setTdlibParameters",
      parameters: {
        use_test_dc: environment.useTestDC,
        database_directory: "/telegram_data",
        files_directory: "/telegram_data",
        use_file_database: false,
        use_message_database: true,
        api_id: this.options.apiId,
        api_hash: this.options.apiHash,
        system_language_code: "en",
        device_model: navigator.appVersion,
        system_version: navigator.appVersion,
        application_version: navigator.appName,
        enable_storage_optimizer: true
      },
      "@extra": {
        "@type": "setTdlibParameters"
      }
    });

    this.send({ "@type": "checkDatabaseEncryptionKey" });
  }

  private destroy(): void {
    this.tdFunctions.td_destroy();
    this.client = null;
  }
}
