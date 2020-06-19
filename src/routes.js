import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const Routes = () => {
  return(
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/dashboard" component={Dashboard} />
    </BrowserRouter>
  )
}

export default Routes;