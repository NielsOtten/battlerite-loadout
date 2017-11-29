import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import LoadoutView from '../../scenes/LoadoutView';
import LoadoutCreator from '../../scenes/LoadoutCreator';

const routes = {
  LOADOUT_VIEW: '/',
  LOADOUT_CREATOR: '/loadout-creator',
};

const App = () => (
  <Switch>
    <Route exact path={routes.LOADOUT_VIEW} component={LoadoutView} />
    <Route exact path={routes.LOADOUT_CREATOR} component={LoadoutCreator} />
  </Switch>
);

export {
  App as default,
  routes,
};

