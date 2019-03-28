import React from 'react';
import { connect } from 'react-redux';
import { Route, RouteProps } from 'react-router-dom';

import { AppLoading } from './app-loading/AppLoading';
import { RootState } from '../../store/reducer';

const mapStateToProps = (state: RootState) => {
  return {
    telegram: state.telegram,
  };
};

export const AppRoute: React.ComponentType<RouteProps> = connect(mapStateToProps)((props: RouteProps & RootState) => {
  const { component, telegram, ...restProps } = props;
  
  const Component: React.ComponentType<any> = component as any;
  
  return <Route { ...restProps }
                render={ (props => {
                  if (!telegram.isReady) {
                    return (<AppLoading/>);
                  }
                  
    
                  return <Component { ...props }/>;
                }) }/>;
}) as any;
