import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store"
import { Router, Route, IndexRoute, browserHistory} from "react-router";
//import Layout
import Layout from "./components/Layout/Layout";
import Intro from "./components/Intro/Intro";
import Credits from "./components/Pages/Credits";
import Feeders from "./components/Pages/Feeders/Feeders";
const app = document.getElementById('app');
ReactDOM.render(
<Provider store={store}>
<Router history = {browserHistory}>
    <Route path="/" component = {Layout}>
    	<IndexRoute component={Intro}></IndexRoute>
    	<Route path="Feeders" name="feeders" component = {Feeders}></Route>
        <Route path="Credits" name="credits" component = {Credits}></Route>
    </Route>
</Router>
</Provider>
, app);