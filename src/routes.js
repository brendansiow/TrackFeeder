import React from 'react';
import {Route,IndexRoute} from 'react-router';
import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home';
import Feeders from './components/Pages/Feeders/Feeders';
import FeederProfile from './components/Pages/FeederProfile/FeederProfile'
import Credits from './components/Pages/Credits';

export default(
    <Route path = "/" component = {Layout}>
        <IndexRoute component = {Home}/>
        <Route path = "feeders" component = {Feeders} />
        <Route path = "feeder/:dotaid" component = {FeederProfile} />
        <Route path = "credits" component = {Credits} />
    </Route>
);