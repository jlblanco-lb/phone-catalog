import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from '../App';
import Show from "../components/phone/Show";
import Create from "../components/phone/Create";
import Update from "../components/phone/Update";
import NotFound from "../pages/error/404NotFound";

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                {/* Defining main routes for the CRUD */}
                <Route path="/" component={Dashboard} exact strict key="dashboard"/>
                <Route path="/phones/show/:id" component={Show} exact strict key="show"/>
                <Route path="/phones/update/:id" component={Update} exact strict key="update"/>
                <Route path="/phones/create" component={Create} exact strict key="create"/>
                <Route component={NotFound} key="notFound" />
                {/* Pagination out of the scope. */}
                <Route path="/phones/:page" component="" exact strict key="page"/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
