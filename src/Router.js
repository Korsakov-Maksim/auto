import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./Components/Toolbar";
import Orders from "./Components/Orders";
import Landing from "./Components/Landing";
import PrivateRoute from "./Components/PrivateRoute";

function AppRouter(props) {
    return (
        <Router>
            <Header/>
            <Switch>
                <PrivateRoute path='/orders'>
                    <Orders/>
                </PrivateRoute>
                <Route path="/" component={Landing}/>
            </Switch>
        </Router>
    );
}


export default AppRouter;