import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory} from "react-router";
//import Layout
import Layout from "./pages/Layout";
import Intro from "./pages/Intro";
import Credits from "./pages/Credits";
import Feeder from "./pages/Feeder";

const app = document.getElementById('app');
ReactDOM.render(
<Router history = {browserHistory}>
    <Route path="/" component = {Layout}>
        <Route path="Credits" name="credits" component = {Credits}></Route>
        <Route path="Intro" name="intro" component = {Intro}></Route>
        <Route path="Feeder(/:feederid)" name="feeder" component = {Feeder}></Route>
    </Route>
</Router>
, app);