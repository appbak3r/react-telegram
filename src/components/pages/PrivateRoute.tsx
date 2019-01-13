import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { RootState } from '../../store/reducers/rootReducer';
import { connect } from '../../store/connect';

import { AppLoading } from './app-loading/AppLoading';

import { AUTHORIZATION_STATES } from '../../store/reducers/appReducer';

export const PrivateRoute: React.ComponentType<RouteProps> = connect(mapStateToProps)((props: RouteProps & RootState) => {
  const { component, app, ...restProps } = props;
  
  const Component: React.ComponentType<any> = component as any;
  
  return <Route { ...restProps }
                render={ (props => {
                  if (app.authState === AUTHORIZATION_STATES.LOADING) {
                    return (<AppLoading/>);
                  }
    
                  if (app.authState !== AUTHORIZATION_STATES.AUTHORIZED) {
                    return <Redirect to={ '/login' }/>;
                  }
    
                  return <Component { ...props }/>;
                }) }/>;
}) as any;


function mapStateToProps (state: RootState) {
  return {
    app: state.app,
  };
}
