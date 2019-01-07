class TDLibClient {
  private readonly client: any;
  private tdFunctions: any;
  
  constructor (private tdlib: any, public clientOptions: any) {
    this.client = this.tdlib.cwrap('td_create', 'number', []);
    
    this.tdFunctions = {
      send: this.tdlib.cwrap('td_send', null, ['number', 'string']),
      execute: this.tdlib.cwrap('td_execute', null, ['number', 'string']),
      receive: this.tdlib.cwrap('td_receive', 'string', ['number']),
    };
  }
  
  send ({ type, options }: { type: string, options?: any }) {
    this.tdFunctions.send(this.client, JSON.stringify({
      '@type': type,
      ...options,
    }));
  }
  
  execute ({ type, options }: { type: string, options?: any }) {
    this.tdFunctions.execute(this.client, JSON.stringify({
      '@type': type,
      ...options,
    }));
  }
  
}

const createClient = (options: any): Promise<TDLibClient> => {
  return new Promise((resolve) => {
    Module().then((module: any) => {
      const client: TDLibClient = new TDLibClient(module, options);
      
      resolve(client);
    });
  });
};

export const TelegramClient = createClient({
  apiId: 664453,
  apiHash: 'dddbb8e6acd44fdd6840e15c58a2ff45',
  useDefaultVerbosityLevel: true,
});
