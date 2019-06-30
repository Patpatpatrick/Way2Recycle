import React from 'react';
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
import { updatePasswordInputBox }  from '../../actions/index.js';
import {connect} from "react-redux";


class LogIn extends React.Component{

  changedEmailInputBox  = (event) =>  {
    this.props.updateEmailText(event.target.value)
  };

  changedPasswordInputBox  = (event) =>  {
    this.props.updatePasswordText(event.target.value)
  };

  pressLogIn = () => {
    Meteor.loginWithPassword(this.props.emailInput, this.props.passwordInput, (err)=> {
      if (Meteor.user()) {
        console.log("Log in successful with id: " + Meteor.userId())
        this.props.updateEmailText('')
        this.props.updatePasswordText('')
      } else {
        alert("Password or Id does not exist")
      }
      if (err){
        console.log(err)
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
    passwordInput: state.passwordInput
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      updateEmailText: (text) => dispatch(updateEmailInputBox(text)),
      updatePasswordText: (text) => dispatch(updatePasswordInputBox(text))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);