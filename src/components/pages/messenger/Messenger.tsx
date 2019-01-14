import React, { PureComponent } from 'react';

import { LogoutButton } from '../../auth/logout-button/LogoutButton';

export class Messenger extends PureComponent {
  render () {
    return (
      <div>
        app ready
        
        <LogoutButton/>
      </div>
    );
  }
}
