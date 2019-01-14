import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';

import { connect } from '../../../store/connect';
import { AuthActions, logout } from '../../../store/actions/authActions';

import { Button } from '../../common/button/Button';

@connect<{}, AuthActions>(null, mapDispatchToProps)
class LogoutButtonWrapper extends PureComponent<AuthActions> {
  render () {
    return (
      <Button className='ri-logout-button'
              onClick={ this.props.logout }>
        Logout
      </Button>
    );
  }
}

function mapDispatchToProps (dispatch: any) {
  return bindActionCreators({ logout }, dispatch);
}

export const LogoutButton: React.ComponentType = LogoutButtonWrapper as any;
