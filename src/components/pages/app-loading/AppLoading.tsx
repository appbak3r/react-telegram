import React, { PureComponent } from 'react';

import { LogoIcon } from '../../common/icons/LogoIcon';

import './app-loading.scss';

export class AppLoading extends PureComponent {
  render () {
    return (
      <div className='rt-app-loading'>
        <div className='rt-app-loading__body'>
          <LogoIcon className='rt-app-loading__icon'/>

          <div className='rt-app-loading__title'>
            Telegram
          </div>
  
          <div className='rt-app-loading__subtitle'>
            a new era of messaging
          </div>
        </div>
      </div>
    );
  }
}
