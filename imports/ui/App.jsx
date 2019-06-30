import React from 'react';
import Nav from './Nav';
import Home from './Home';
import PostAdPortal from './PostAdPortal.jsx';
import Login from '../ui/LogIn/LogIn';
import SignUp from './SignUp'
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import Checkout from './postProcedures/PostProcedure.js';
import List from './List';
import {Items} from "../api/items";
import {withTracker} from 'meteor/react-meteor-data';


// import './style/style.css'
const App = () => (
    <BrowserRouter> {/* browserRouter is a router component Generally speaking, you should use a <BrowserRouter> if you have a server that responds to requests and a <HashRouter> if you are using a static file server.*/}
        <div>
            <Nav/>
            {/* //There are three types of components in React Router:*/}
            {/* // router components, route matching components, and navigation components.*/}
            {/*// There are two route matching components:*/}
            {/*<Route> and <Switch>*/}
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/login" component={Login}/>
                <Route path="/postedAd" component={PostAdPortal}/>
                <Route path="/postNewAd" component={Checkout}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
