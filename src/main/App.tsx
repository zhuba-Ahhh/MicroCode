import './components/index.less'

import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { uuid } from '../tools'
import routes from './router'

const App: React.FC = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.element()} key={uuid()} />
      ))}
    </Routes>
  )
}

export default App
