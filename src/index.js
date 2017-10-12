import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home';
import Feeders from './components/Pages/Feeders/Feeders';
import FeederProfile from './components/Pages/FeederProfile/FeederProfile'
import Matches from './components/Pages/Matches'
import Credits from './components/Pages/Credits';
const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <div>
        <Layout />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/feeders" component={Feeders} />
          <Route path="/feeder/:dotaid" component={FeederProfile} />
          <Route path="/matches" component={Matches} />
          <Route path="/credits" component={Credits} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , app);
