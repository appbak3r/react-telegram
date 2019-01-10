import React, { PureComponent } from 'react';
import { Form } from 'react-final-form';

import { Input } from './components/forms/input/Input';
import { connect } from './store/connect';
import { bindActionCreators } from 'redux';
import { sendMessage, TelegramActions } from './store/actions/telegramActions';

type AppOwnProps = {};

@connect<{}, TelegramActions, AppOwnProps>(null, mapDispatchToProps)
class AppComponent extends PureComponent<TelegramActions & AppOwnProps> {
  state: any = {
    messages: [],
  };
  
  onSubmit = (values: any) => {
    this.props.sendMessage();
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

export const App: React.ComponentClass<AppOwnProps> = AppComponent as any;

function mapDispatchToProps (dispatch: any) {
  return bindActionCreators({ sendMessage }, dispatch);
}
