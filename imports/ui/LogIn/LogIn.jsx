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


class LogIn extends React.Component{


    constructor(props) {
        super(props);
        this.state = {logging: false}
    }

  changedEmailInputBox  = (event) =>  {
    this.props.updateEmailText(event.target.value)
  };

  changedPasswordInputBox  = (event) =>  {
    this.props.updatePasswordText(event.target.value)
  };

    componentDidUpdate(prevProps) {
        if (this.props.toggleLogin !== prevProps.toggleLogin) {
           //alert(Meteor.userId())
            i = i++
        }
    }


   pressLogIn = () => {
      // alert(Meteor.loggingIn())
       //window.location.assign("/")
      //this.props.logInFlag()
      //console.log('logIn button pressed!')
       let id = (String(this.props.emailInput).trim())
       let pass = (String(this.props.passwordInput).trim())
    Meteor.loginWithPassword(id, pass, (err)=> {
        console.log("meteor login invoked")
        if (err){
            console.log(err)
        }

        if (!Meteor.userId()) {
            alert('failed')
            return
        }

       //console.log("Log in successful with id: " + Meteor.userId())
        window.location.assign("/")
        this.props.updateEmailText('')
        this.props.updatePasswordText('')
        this.props.logInFlag()


        /*        if (Meteor.userId()) {
                    this.props.logInFlag()
                    console.log("Log in successful with id: " + Meteor.userId())
                    window.location.assign("/")
                    this.props.updateEmailText('')
                    this.props.updatePasswordText('')


                } else {

                    alert("Failed to log in")

              }*/


    })

   

       if (Meteor.loggingIn()===true) {
           alert('still logging in...')
       }



   }


  render() {
    return (
      <div>
          <div>{this.props.emailInput.toString()}</div>
          <div> Test</div>
        <form>

          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange = {this.changedEmailInputBox}
        />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange = {this.changedPasswordInputBox}
        />
        <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick = {this.pressLogIn}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
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
      logInFlag: () => dispatch(logInFlag())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);