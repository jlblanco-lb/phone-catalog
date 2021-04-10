import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from '../App';
import Show from "../components/phone/Show";
import Create from "../components/phone/Create";

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Dashboard} exact strict key="dashboard"/>
                <Route path="/phones/show/:id" component={Show} exact strict key="show"/>,
                <Route path="/phones/create" component={Create} exact strict key="create"/>,
                <Route path="/phones/:page" component="" exact strict key="page"/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
