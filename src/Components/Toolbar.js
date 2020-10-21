import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from "./Logo";
import {isLogged, login, setOpen} from "../reducers";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Header(props) {
    const classes = useStyles();
    const {isLogged, login, setOpen} = props;
return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Logo/>
                    {
                        !isLogged ?
                            <Button variant="contained" onClick={setOpen.bind(null, true)}>
                                <Link to='/orders'>
                                    Войти
                                </Link>
                            </Button>
                            : <Button variant="contained" onClick={login.bind(null, false)}>
                                <Link to='/'>
                                    Выйти
                                </Link>
                            </Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}


function mapDispatchToProps(dispatch) {
    return {
        login: function (logged) {
            return dispatch(login(logged))
        },
        setOpen: function (open) {
            return dispatch(setOpen(open))
        }
    }
}

function mapStateToProps(state) {
    return {
        isLogged: state.app.isLogged
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
