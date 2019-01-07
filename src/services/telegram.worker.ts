import { TelegramClient } from './TelegramClient';

TelegramClient.then((client: any) => {
  console.log(client);
  
  client.execute({
    type: 'getTextEntities',
    options: {
      text: '@telegram /test_command https://telegram.org telegram.me',
    }
  });
  
  client.send({
    type: 'getAuthorizationState',
  });
  
  try {
    client.receive().then((arg: any) => {
      console.log(arg);
    })
  } catch {
    console.log('error');
  }
  
});
