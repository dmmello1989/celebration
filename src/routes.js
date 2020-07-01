import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';

const Routes = () => {

  return(
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/dashboard" component={Dashboard} />
      <Route path={`/details/`} component={Details} />
    </BrowserRouter>
  )
}

export default Routes;