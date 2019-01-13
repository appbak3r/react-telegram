import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { RootState } from '../../store/reducers/rootReducer';
import { connect } from '../../store/connect';

import { AppLoading } from './app-loading/AppLoading';


export const AppRoute: React.ComponentType<RouteProps> = connect(mapStateToProps)((props: RouteProps & RootState) => {
  const { component, app, ...restProps } = props;
  
  const Component: React.ComponentType<any> = component as any;
  
  return <Route { ...restProps }
                render={ (props => {
                  if (!app.ready) {
                    return (<AppLoading/>);
                  }
                  
    
                  return <Component { ...props }/>;
                }) }/>;
}) as any;


function mapStateToProps (state: RootState) {
  return {
    app: state.app,
  };
}
