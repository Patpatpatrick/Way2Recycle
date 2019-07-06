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

class SignUp extends React.Component{
  pressSignUp = () => {
    let registerForm =
         { email: this.props.createEmailInput,
           profile: {
              FirstName: this.props.fNameInput,
              LastName: this.props.lNameInput,
              name: this.props.fNameInput + " " + this.props.lNameInput
            },
           password:this.props.createPasswordInput}

    Accounts.createUser(registerForm, (err) => {
      this.props.updateFirstNameInputBox('')
      this.props.updateLastNameInputBox('')
      this.props.updateCreatePasswordInputPage('')
      this.props.updateCreateEmailInputPage('')
      this.props.changeChoiceOnNav('home')

      if (err) {
        alert("Failed to create new user")
        alert(JSON.stringify(registerForm))
      }
    })
  }

  changeFNameInputBox  = (event) =>  {
    this.props.updateFirstNameInputBox(event.target.value)
  };
  changeLNameInputBox  = (event) =>  {
    this.props.updateLastNameInputBox(event.target.value)
  };
  changeCreatePasswordInputBox  = (event) =>  {
    this.props.updateCreatePasswordInputPage(event.target.value)
  };
  changeCreateEmailInputBox  = (event) =>  {
    this.props.updateCreateEmailInputPage(event.target.value)
  };

  redirectToLogIn = () => {
    this.props.changeChoiceOnNav('login')
  }

  render(){
    /*const classes = useStyles;*/
    return(
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={this.changeFNameInputBox}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                autoComplete="lname"
                onChange={this.changeLNameInputBox}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                onChange={this.changeCreateEmailInputBox }

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.changeCreatePasswordInputBox}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick = {this.pressSignUp}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link variant="body2" onClick= {this.redirectToLogIn}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);