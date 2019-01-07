import React, { PureComponent } from 'react';
import { Form } from 'react-final-form';

import { Input } from './components/forms/input/Input';

export class App extends PureComponent {
  onSubmit = () => {};
  
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
