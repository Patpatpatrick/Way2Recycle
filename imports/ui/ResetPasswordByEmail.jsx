import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect} from "react-redux";

import { updateFirstNameInputBox, updateLastNameInputBox, updateCreatePasswordInputPage,
    updateCreateEmailInputPage, changeChoiceOnNav}  from '../actions/index.js';

import './LogIn/logInStyle.css'

class ResetPasswordByEmail extends React.Component{

    constructor(props) {
        super(props)
        this.state = {password: '', confirmPassword:''}

    }

    resetPassword = () => {
        console.log(this.state.password)

        if (this.state.password !== this.state.confirmPassword || this.state.password==='') {
            alert("Please check that both password fields are same")
        } else {
            Accounts.resetPassword(this.props.token, String(this.state.password), (err)=> {
                if (err) {
                    console.log("error changing password")
                }
                alert('password changed successfully!')
                this.props.changeChoiceOnNav('home')

            })
        }
    }

    changePassword  = (event) =>  {
        this.setState({password:event.target.value})
    };
    changeConfirmPassword  = (event) =>  {
        this.setState({confirmPassword:event.target.value})
    };

    redirectToLogIn = () => {
        this.props.changeChoiceOnNav('login')
    }

    render(){
        return(
            <Container component="main" maxWidth="xs">
                <div style={{paddingTop:20}}>
                <div className={'logInBorder'}>
                <CssBaseline />
                <div>
                    <Typography component="h1" variant="h5">
                        Reset your password
                    </Typography>
                    <form noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Enter Password"
                                    autoComplete="email"
                                    onChange={this.changeConfirmPassword }
                                    type = "password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Re enter password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.changePassword}
                                />
                            </Grid>
                            <Grid item xs={12}></Grid>
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick = {this.resetPassword}
                        >
                            Reset
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link variant="body2"  style={{cursor:"pointer"}} onClick= {this.redirectToLogIn}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                </div>
                </div>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fNameInput: state.fNameInput,
        lNameInput: state.lNameInput,
        createEmailInput: state.createEmailInput,
        createPasswordInput: state.createPasswordInput,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateFirstNameInputBox: (text) => dispatch(updateFirstNameInputBox(text)),
        updateLastNameInputBox: (text) => dispatch(updateLastNameInputBox(text)),
        updateCreatePasswordInputPage: (text) => dispatch(updateCreatePasswordInputPage(text)),
        updateCreateEmailInputPage: (text) => dispatch(updateCreateEmailInputPage(text)),
        changeChoiceOnNav: (choice) => dispatch(changeChoiceOnNav(choice))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordByEmail);