import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import partyMock from './utils/mocks/party-mock';

const Routes = () => {
  const partyId = partyMock.id;

  return(
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/dashboard" component={Dashboard} />
      <Route path={`/details/:${partyId}`} component={Details} />
    </BrowserRouter>
  )
}

export default Routes;