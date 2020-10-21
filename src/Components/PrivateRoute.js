import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import React from "react";

function PrivateRoute(props) {
    const {isLogged, children, ...rest} = props;
    return (
        <Route
            {...rest}
            render={({location}) =>
                isLogged ? (
                    children
                ) : (
                    <Redirect to={{pathname: "/", state: {from: location}}}/>
                )
            }
        />
    );
}


function mapStateToProps(state) {
    return {
        isLogged: state.app.isLogged
    }
}

export default connect(mapStateToProps, null)(PrivateRoute)