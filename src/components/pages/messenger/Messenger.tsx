import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import { LogoutButton } from '../../auth/logout-button/LogoutButton';

export class Messenger extends PureComponent {
  render () {
    return (
      <div>
        <FormattedMessage id={ 'common.pages.messenger.title' }
                          defaultMessage={ 'Telegram' }>
          {
            title => (
              <Helmet>
                <title>{ title }</title>
              </Helmet>
            )
          }
        </FormattedMessage>
        
        <LogoutButton/>
      </div>
    );
  }
}
