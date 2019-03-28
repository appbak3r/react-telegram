import { environment } from '../config/environment';

import { TELEGRAM_CLIENT_RECEIVE, TelegramClient } from './TelegramClient';

importScripts(`${process.env.PUBLIC_URL}/td_wasm/td_wasm.js`);

/**
 * TDLib WASM loader
 */

const debouncedSave = (() => {
  let timeout: number;
  
  return (FS: any) => {
    if (timeout) {
      self.clearTimeout(timeout);
    }
    
    console.log('Syncing...');
    
    timeout = self.setTimeout(() => {
      FS.syncfs(false, function (err: any) {
        if (err) {
          console.log(err);
        } else {
          console.log('Synced!');
        }
      });
    }, 500);
  };
})();


(self as any).Module().then((tdWASM: any) => {
  let startInterval: number;
  
  startInterval = self.setInterval(() => {
    if (!(self as any).syncdone) {
      return;
    }
    
    self.clearInterval(startInterval);
    
    const telegramClient = new TelegramClient(tdWASM, {
      apiId: environment.apiId,
      apiHash: environment.apiHash,
    });
    
    telegramClient.addListener(TELEGRAM_CLIENT_RECEIVE, (message: any) => {
      debouncedSave(tdWASM.FS);
      
      postMessage(message);
    });
    
    self.onmessage = (event) => {
      const action = event.data;
      
      switch (action.type) {
        case 'send': {
          telegramClient.send(action.payload);
          
          break;
        }
        
        default: {
          console.log('telegram worker: unknown action');
        }
      }
    };
    
  }, 500);
});



