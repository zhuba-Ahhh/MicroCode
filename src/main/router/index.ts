import type { FC } from 'react';

import HomeView from '../components/Index';

export interface routeType {
  path: string;
  element: FC;
}

const routes: routeType[] = [
  {
    path: '/',
    element: HomeView
  },
  {
    path: '*',
    element: HomeView
  }
];

export default routes;
