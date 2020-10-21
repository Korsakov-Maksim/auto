import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {setOpen} from "../reducers";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";


function TextFieldWrapper(props) {
    return <TextField {...props.input} {...props}/>
}

function LoginDialog(props) {
    const {handleSubmit, open, setOpen} = props;

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form onSubmit={handleSubmit}>
                    <DialogTitle id="form-dialog-title">Вход в систему</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Для использования системы, пожалуйста, войдите
                        </DialogContentText>

                        <Field component={TextFieldWrapper}
                               name='name'
                               autoFocus
                               margin="dense"
                               id="name"
                               label="Имя пользователя"
                               type="text"
                               fullWidth
                        />
                        <Field component={TextFieldWrapper}
                               autoFocus
                               name='password'
                               margin="dense"
                               id="name1"
                               label="Пароль"
                               type="password"
                               fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Отмена
                        </Button>
                        <Button type="submit" onClick={handleClose} color="primary">
                            Войти
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}


function mapDispatchToProps(dispatch) {
    return {
        setOpen: function (open) {
            return dispatch(setOpen(open))
        }
    }
}

function mapStateToProps(state) {
    return {
        open: state.app.isLoginDialogOpen
    }
}

const LoginDialogForm = reduxForm({
    form: 'LoginForm'
})(LoginDialog)

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialogForm)