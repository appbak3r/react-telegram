import { Client } from 'tdl';
import { TDLib} from 'tdl-tdlib-wasm';
import fs from 'fs';
// class TDLibClient {
//   private readonly client: any;
//   private tdFunctions: any;
//
//   constructor (private tdlib: any, public clientOptions: any) {
//     this.client = this.tdlib.cwrap('td_create', 'number', []);
//
//     console.log(this.tdlib);
//
//     this.tdFunctions = {
//       send: this.tdlib.cwrap('td_send', null, ['number', 'string']),
//       execute: this.tdlib.cwrap('td_execute', null, ['number', 'string']),
//       receive: this.tdlib.cwrap('td_receive', 'string', ['number']),
//     };
//   }
//
//   send ({ type, options }: { type: string, options?: any }) {
//     this.tdFunctions.send(this.client, JSON.stringify({
//       '@type': type,
//       ...options,
//     }));
//   }
//   receive () {
//     return this.tdFunctions.receive(this.client, 2)
//   }
//
//   execute ({ type, options }: { type: string, options?: any }) {
//     this.tdFunctions.execute(this.client, JSON.stringify({
//       '@type': type,
//       ...options,
//     }));
//   }
//
// }

// @ts-ignore
importScripts('/td_wasm/td_wasm.js');

const createClient = (options: any): any => {
  return new Promise(resolve => {
    BrowserFS.configure({
      fs: 'IndexedDB',
      options: {
        storeName: 'react-telegram',
      }
    }, () => {
      // @ts-ignore
      self.Module().then((module: any) => {
        const tdlib = new TDLib(module);
        
        // @ts-ignore
       module._td_execute(JSON.stringify({
         '@type': 'getTextEntities',
         text: 'ping',
       }));
    
        // resolve(Client.fromTDLib(tdlib));
      });
    });
  });
  
  
  // return new Promise((resolve) => {
  //   // @ts-ignore
  //   self.Module().then((module: any) => {
  //     const client: TDLibClient = new TDLibClient(module, options);
  //
  //     resolve(client);
  //   });
  // });
};

export const TelegramClient = createClient({
  apiId: 664453,
  apiHash: 'dddbb8e6acd44fdd6840e15c58a2ff45',
  useDefaultVerbosityLevel: true,
});
