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


class TDLib {
  private tdFunctions: any;
  private client: any;
  
  constructor (tdWasm: any) {
    this.tdFunctions = {
      td_create: tdWasm.cwrap('td_create', 'number', []),
      td_destroy: tdWasm.cwrap('td_destroy', null, ['number']),
      td_send: tdWasm.cwrap('td_send', null, ['number', 'string']),
      td_execute: tdWasm.cwrap('td_execute', null, ['number', 'string']),
      td_receive: tdWasm.cwrap('td_receive', 'string', ['number']),
      td_set_verbosity: tdWasm.cwrap('td_set_verbosity', null, ['number'])
    };
    
    this.create();
  }
  
  execute (message: any) {
    this.tdFunctions.td_execute(this.client, JSON.stringify(message));
  }
  
  send (message: any) {
    this.tdFunctions.td_send(this.client, JSON.stringify(message));
  }
  
  receive () {
    return JSON.parse(this.tdFunctions.td_receive(this.client));
  }
  
  private create () {
    this.client = this.tdFunctions.td_create();
  }
  
}

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
      try {
        fs.mkdirSync('/tdlib');
      } catch {
        console.log('/tdlib already exists');
      }
      
      // @ts-ignore
      self.Module().then((module: any) => {
        const tdlib = new TDLib(module);
        
        tdlib.execute({
          '@type': 'getTextEntities',
          text: 'ping',
        });
        
        console.log('receive', tdlib.receive());
        
        tdlib.send({
          '@type': 'setTdlibParameters',
          parameters: {
            use_test_dc: true,
            database_directory: '/tdlib',
            files_directory: '/tdlib',
            use_file_database: true,
            use_message_database: true,
            api_id: options.apiId,
            api_hash: options.apiHash,
            system_language_code: 'en',
            device_model: navigator.appVersion,
            system_version: navigator.appVersion,
            application_version: navigator.appName,
            enable_storage_optimizer: true,
          }
        });
  
        console.log('receive', tdlib.receive());
  
        // @ts-ignore
        
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
