import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Logon from './Components/Logon/index'
import Register from './Components/Register'
import Profile from './Components/Profile'
import Incident from './Components/NewIncident'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incident/new" component={Incident} />
            </Switch>
        </BrowserRouter>
    );
}