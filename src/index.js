import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory} from "react-router";
//import Layout
import Layout from "./components/Layout/Layout";
import Intro from "./components/Intro/Intro";
import Credits from "./components/Pages/Credits";
import Feeders from "./components/Pages/Feeders/Feeders";
//import MOBX store
import feedersstore from "./components/Pages/Feeders/FeedersStore";
const app = document.getElementById('app');
ReactDOM.render(
<Router history = {browserHistory}>
    <Route path="/" component = {Layout}>
    	<IndexRoute component={Intro}></IndexRoute>
    	<Route path="Feeders" name="feeders" component = {Feeders} store={feedersstore}></Route>
        <Route path="Credits" name="credits" component = {Credits}></Route>
    </Route>
</Router>
, app);