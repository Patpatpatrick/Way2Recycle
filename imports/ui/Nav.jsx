import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from './style/NavStyle';
import SearchBar from './SearchBar.jsx';

export default function Nav() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Way2Recycle
          </Typography>
          <SearchBar/>
          <nav>
            <Link variant="button" color="textPrimary" href="/" className={classes.link}>
              Home
            </Link>
            <Link variant="button" color="textPrimary" href="/postedAd" className={classes.link}>
              View Posted Ad
            </Link>
            <Link variant="button" color="textPrimary" href="/postNewAd" className={classes.link}>
              Post ad
            </Link>
            <Link variant="button" color="textPrimary" href="/signup" className={classes.link}>
              Sign Up
            </Link>
          </nav>
          <Button href="/login" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}