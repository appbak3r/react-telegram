import fs from 'fs';

import { environment } from '../config/environment';

import { TELEGRAM_CLIENT_RECEIVE, TelegramClient } from './TelegramClient';

importScripts('/td_wasm/td_wasm.js');

/**
 * fs is patched to support browser
 */
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
  
  /**
   * TDLib WASM loader
   */
  (self as any).Module().then((tdWASM: any) => {
    const telegramClient = new TelegramClient(tdWASM, {
      apiId: environment.apiId,
      apiHash: environment.apiHash,
    });
    
    telegramClient.addListener(TELEGRAM_CLIENT_RECEIVE, (message: any) => {
      postMessage(message);
    });
    
    self.onmessage = (action) => {
      telegramClient.sendAction(action);
    };
  });
});
