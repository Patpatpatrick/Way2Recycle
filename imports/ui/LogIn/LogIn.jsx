import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import { updateEmailInputBox }  from '../../actions/index.js';
import { updatePasswordInputBox, logInFlag}  from '../../actions/index.js';
import {connect} from "react-redux";
import {changeChoiceOnNav} from "../../actions/index";
import { GoogleLoginButton } from "react-social-login-buttons";


class LogIn extends React.Component{

  changedEmailInputBox  = (event) => {
    this.props.updateEmailText(event.target.value)
  };

  changedPasswordInputBox  = (event) => {
    this.props.updatePasswordText(event.target.value)
  };

  pressForgotPassword = () => {
      this.props.changeChoiceOnNav('sendPasswordToEmail')
  }
    pressLogIn = () => {
        let id = (String(this.props.emailInput).trim())
        let pass = (String(this.props.passwordInput).trim())

        Meteor.loginWithPassword(id, pass, (err) => {
            console.log("meteor login invoked")
            if (err) {
                alert("Please check your id/pass")
                console.log(err)
            }
            if (Meteor.userId()) {
                this.props.updateEmailText('')
                this.props.updatePasswordText('')
                this.props.changeChoiceOnNav('home')
            }
        })
    }

    pressLogInWithGoogle  = () => {
        Meteor.loginWithGoogle({}, (err) => {
            if (err) {
                console.log('google log in fail')
            } else {
                console.log('google login success for : '+ JSON.stringify(Meteor.user()));
                this.props.changeChoiceOnNav('home')
            }
        })
    }




  render() {
    return (
      <div>

        <form>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Your email address"
              autoFocus
              onChange = {this.changedEmailInputBox}
         />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            label = "Your Password"
            onChange = {this.changedPasswordInputBox}
        />
        <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
        />
            <div>
        <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick = {this.pressLogIn}
        >
          Sign In
        </Button>
            </div>
            <br />
            <div>
                <GoogleLoginButton onClick={this.pressLogInWithGoogle} />
            </div>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2" onClick = {this.pressForgotPassword}>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link variant="body2" onClick = {()=>this.props.changeChoiceOnNav('signup')}>
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
      </div>
    )}
}

const mapStateToProps = (state) => {
  return {
    emailInput: state.emailInput,
    passwordInput: state.passwordInput,
      toggleLogin: state.toggleLogin
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      updateEmailText: (text) => dispatch(updateEmailInputBox(text)),
      updatePasswordText: (text) => dispatch(updatePasswordInputBox(text)),
      logInFlag: () => dispatch(logInFlag()),
      changeChoiceOnNav: (choice) => dispatch(changeChoiceOnNav(choice))
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);