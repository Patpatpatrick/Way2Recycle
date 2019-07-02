import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from './style/NavStyle';
import SearchBar from './SearchBar.jsx';



let loggedIn
export default class Nav extends React.Component{
  //const classes = useStyles();



  loggedIn = false;
/*  if (Meteor.userId()) {
    console.log('Logged In:user ID: '+Meteor.userId())
    loggedIn = true
  }*/



  logOut = () => {
    //alert('logging out')
   // alert(Meteor.userId())
    Meteor.logout((err) => {
      if (err) {
        alert('Failed to log out!')
      }
    })
  }
  render() {
    if (Meteor.userId()) {
      console.log('Logged In:user ID: '+ Meteor.userId())
      loggedIn = true
  }
    return (
        <React.Fragment>
          <CssBaseline />
          <AppBar position="static" color="default" elevation={0} className={''}>
            <Toolbar className={''}>
              <Typography variant="h6" color="inherit" noWrap className={''}>
                Way2Recycle
              </Typography>
              <SearchBar/>
              <nav>
                <Link variant="button" color="textPrimary" href="/" className={''}>
                  Home
                </Link>
                <Link variant="button" color="textPrimary" href="/postedAd" className={''}>
                  View Posted Ad
                </Link>
                {
                  loggedIn?
                      <Link variant="button" color="textPrimary" href="/postNewAd" className={''}>
                        Post ad
                      </Link>: null
                }
                <Link variant="button" color="textPrimary" href="/signup" className={''}>
                  Sign Up
                </Link>
              </nav>
              {
                loggedIn?
                    <Button href="/" color="primary" variant="outlined" className={''} onClick={this.logOut}>
                      LogOut
                    </Button>:
                    <Button href="/login" color="primary" variant="outlined" className={''}>
                      Login
                    </Button>
              }
            </Toolbar>
          </AppBar>
        </React.Fragment>
    );
  }
}