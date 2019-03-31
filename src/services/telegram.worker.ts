import { environment } from "../config/environment";
import EventEmitter from "eventemitter3";
import { TELEGRAM_CLIENT_RECEIVE, TelegramClient } from "./TelegramClient";

importScripts(`${process.env.PUBLIC_URL}/td_wasm.js`);

/**
 * TDLib WASM loader
 */

const debouncedSave = (() => {
  let timeout: number;

  return (FS: any) => {
    if (timeout) {
      self.clearTimeout(timeout);
    }

    console.log("Syncing...");

    timeout = self.setTimeout(() => {
      FS.syncfs(false, function(err: any) {
        if (err) {
          console.log(err);
        } else {
          console.log("Synced!");
        }
      });
    }, 500);
  };
})();

const TDModule = (self as any).Module();
const DbEventEmitter = new EventEmitter();

TDModule.preRun.push(() => {
  TDModule.FS.mkdir("/telegram_data");
  TDModule.FS.mount(TDModule.FS.filesystems.IDBFS, {}, "/telegram_data");

  TDModule.FS.syncfs(true, (error: any) => {
    if (error) {
      throw error;
    }

    DbEventEmitter.emit("ready");
  });
});

TDModule.then((tdWASM: any) => {
  DbEventEmitter.on("ready", () => {
    const telegramClient = new TelegramClient(tdWASM, {
      apiId: environment.apiId,
      apiHash: environment.apiHash
    });

    telegramClient.addListener(TELEGRAM_CLIENT_RECEIVE, (message: any) => {
      debouncedSave(tdWASM.FS);

      postMessage(message);
    });

    self.onmessage = (event) => {
      const action = event.data;

      switch (action.type) {
        case "send": {
          telegramClient.send(action.payload);

          break;
        }

        default: {
          console.log("telegram worker: unknown action");
        }
      }
    };
  });
});
