import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import '../styles/global-styles';

// Route components
import LoadoutView from '../../scenes/LoadoutView';
import LoadoutCreator from '../../scenes/LoadoutCreator';
import NotFound from '../../scenes/NotFound';
import NotAuthenticated from '../../scenes/NotAuthenticated';

const routes = {
  LOADOUT_VIEW: '/',
  LOADOUT_CREATOR: '/creator',
  LOADOUT_CREATOR_CHAMPION_SELECT: '/creator/champion-select',
  LOADOUT_CREATOR_RITE_SELECT: '/creator/rite-select',
  NOT_AUTHENTICATED: '/not-authenticated',
};

const App = () => (
  <Switch>
    <Route exact path={routes.LOADOUT_VIEW} component={LoadoutView} />
    <Route path={routes.LOADOUT_CREATOR} component={LoadoutCreator} />
    <Route exact path={routes.NOT_AUTHENTICATED} component={NotAuthenticated} />
    <Route component={NotFound} />
  </Switch>
);

export {
  App as default,
  routes,
};

