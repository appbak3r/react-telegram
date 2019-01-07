import React, { PureComponent } from 'react';
import { Form } from 'react-final-form';

import { Input } from './components/forms/input/Input';
import { TelegramClient } from './services/TelegramClient';

export class App extends PureComponent {
  componentDidMount () {
   TelegramClient.then((client: any) => {
     client.send({
       type: 'setTdlibParameters',
       options: {
         parameters: {
           use_test_dc: true,
           api_id: client.clientOptions.apiId,
           api_hash: client.clientOptions.apiHash,
           use_secret_chats: false,
           device_model: 'web',
           database_directory: 'tdlib',
           files_directory: 'tdlib',
           use_message_database: false,
           system_language_code: navigator.language,
           system_version: navigator.appVersion,
         }
       }
     });
   });
  }
  
  onSubmit = (values: {}) => {
    console.log(values);
  };
  
  render (): React.ReactNode {
    return (
      <div className='rt-app'>
        <Form onSubmit={ this.onSubmit }>
          { ({ handleSubmit }) => {
            return (
              <form onSubmit={ handleSubmit }>
                <Input name='hello'/>
                
                <button>submit</button>
              </form>
            );
          } }
        </Form>
      </div>
    );
  }
}
