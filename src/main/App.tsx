import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './components/index.less';

import routes from './router';
import { uuid } from '../tools';

const App: React.FC = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.element()} key={uuid()} />
      ))}
    </Routes>
  );
};

export default App;
