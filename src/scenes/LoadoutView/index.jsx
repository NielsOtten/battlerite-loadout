import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../components/Root';

const LoadoutView = () => (
  <div>
      Loadout View
    <Link href={routes.LOADOUT_CREATOR} to={routes.LOADOUT_CREATOR}>Loadout Creator</Link>
  </div>
);

export default LoadoutView;
