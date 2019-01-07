import React, { PureComponent } from 'react';
import { Form } from 'react-final-form';

import { Input } from './components/forms/input/Input';

const TelegramWorker = require('./services/telegram.worker');

const worker = new TelegramWorker();


export class App extends PureComponent {
  state: any = {
    messages: [],
  };
  
  componentDidMount () {
    worker.addEventListener('message', this.addMessage);
  }
  
  addMessage = (message: any) => {
    const messages = [...this.state.messages, message.data];
    
    this.setState({
      messages,
    });
  };
  
  componentWillUnmount () {
    worker.removeEventListener('message', this.addMessage);
  }
  
  onSubmit = (values: any) => {
    worker.postMessage(values);
  };
  
  render (): React.ReactNode {
    return (
      <div className='rt-app'>
        <Form onSubmit={ this.onSubmit }>
          { ({ handleSubmit }) => {
            return (
              <form onSubmit={ handleSubmit }>
                <Input name='type' placeholder='type'/>
                
                <Input name='phone' placeholder='phone'/>
                <Input name='code' placeholder='code'/>
                <Input name='password' placeholder='password'/>
                
                <button>submit</button>
              </form>
            );
          } }
        </Form>
        
        { this.state.messages.map((item: any, index: number) => {
          return JSON.stringify(item);
        }) }
      </div>
    );
  }
}
