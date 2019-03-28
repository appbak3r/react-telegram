import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { AppLoading } from './app-loading/AppLoading';
import { RootState } from '../../store/reducer';
import { AUTHORIZATION_STATES } from '../../store/telegram/types';

const mapStateToProps = (state: RootState) => {
  return {
    auth: state.auth,
  };
};

export const PrivateRoute: React.ComponentType<RouteProps> = connect(mapStateToProps)((props: RouteProps & RootState) => {
  const { component, auth, ...restProps } = props;
  
  const Component: React.ComponentType<any> = component as any;
  
  return <Route { ...restProps }
                render={ (props => {
                  if (auth.authState === AUTHORIZATION_STATES.LOADING) {
                    return (<AppLoading/>);
                  }
    
                  if (auth.authState !== AUTHORIZATION_STATES.AUTHORIZED) {
                    return <Redirect to={ '/login' }/>;
                  }
    
                  return <Component { ...props }/>;
                }) }/>;
}) as any;
