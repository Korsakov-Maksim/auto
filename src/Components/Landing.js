import React from 'react';
import landing from '../assets/landing.png'
import LoginDialogForm from "./LoginDialog";
import {login} from "../reducers";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

function Landing(props) {
    const {setLogin} = props;
    const history = useHistory()
    return (
        <div>
            <LoginDialogForm onSubmit={values =>
                fetch('http://localhost:3002/login', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json',},
                    body: JSON.stringify(values)
                })
                    .then(response => response.json())
                    .then(data => {
                        setLogin(data.success)
                        history.push('/orders')
                    })
            }/>
            <img src={landing} alt="landing" style={{width: '100%', height: '100%'}}/>
        </div>);
}

function mapDispatchToProps(dispatch) {
    return {
        setLogin: function (logged) {
            return dispatch(login(logged))
        }
    }
}

function mapStateToProps(state) {
    return {
        isLogged: state.app.isLogged
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)