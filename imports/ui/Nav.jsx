import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from './style/NavStyle';
import SearchBar from './SearchBar.jsx';
import {connect} from "react-redux";
import {changeChoiceOnNav, updateEmailInputBox, updatePasswordInputBox} from "../actions";
import {compose} from "redux";
import withStyles from "@material-ui/core/styles/withStyles";


const styles = theme => {
  return ({
            appBar: {
              borderBottom: `1px solid ${theme.palette.divider}`,
            },
            toolbar: {
              flexWrap: 'wrap',
            },
            toolbarTitle: {
              flexGrow: 1,
              margin: theme.spacing(1, 1.5),
              cursor:"default"
            },
            link: {
              margin: theme.spacing(1, 1.5),
              cursor: "pointer"
            },
            searchBar: {
              margin: theme.spacing(1, 1.5),
            }
      }
  );
};


class Nav extends React.Component{

  constructor(props) {
    super(props);
    this.state = {loginFlag: false}
  }

  logOut = () => {
    Meteor.logout((err) => {
      if (err) {
        alert('Failed to logout for the user: ' + Meteor.userId())
      }
      console.log("Successfully logged out for user: " + Meteor.userId())
      //this.props.changeChoiceOnNav("home")
      this.setState({flag: !this.state.loginFlag})
      //  Log-out should redirect user to home page and that dashboard and add post should be not rendered.
      this.props.changeChoiceOnNav("home");
    })
  }


  // click login button to go to login page(component)
  loadLogInPage = () => {
    this.props.changeChoiceOnNav("login")
  }

  loadSignUpPage = () => {
    this.props.changeChoiceOnNav("signup")
  }

  // TODO: for now, POST AD is showing up whether log in or not (just for easy debug for others)
  render() {
    const { classes } = this.props;
    return (
        <React.Fragment>
          {/* <CssBaseline/> */}
          <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={''}>
              <Typography variant="h6" color="inherit" noWrap 
              className={classes.toolbarTitle}
              >
                Way2Recycle
              </Typography>
              <SearchBar className = {classes.searchBar}/>
              <nav>
                <Link variant="button" color="textPrimary" className={classes.link} onClick ={()=>this.props.changeChoiceOnNav('home')}>
                  Home &nbsp;
                </Link>
                <Link variant="button" color="textPrimary" className={classes.link} onClick = {()=>this.props.changeChoiceOnNav('viewPost')}>
                  View Posted Ad &nbsp;
                </Link>
                {
                  Meteor.userId() ?
                      <Link variant="button" color="textPrimary" className={classes.link} onClick = {()=>this.props.changeChoiceOnNav('post')} >
                        Post ad &nbsp;
                      </Link> :null
                }

                {Meteor.userId()?<Link variant="button" color="textPrimary" className={classes.link} onClick = {()=>this.props.changeChoiceOnNav('user')}>
                  My items &nbsp;
                </Link>: null}
                {
                  Meteor.userId() ? null :
                      <Link variant="button" color="textPrimary" className={classes.link} onClick={this.loadSignUpPage}>
                        Sign Up &nbsp;
                      </Link>
                }
              </nav>
              {/*{Meteor.user()? <div>&nbsp;&nbsp;&nbsp;&nbsp;HELLO! {Meteor.user().profile.FirstName}</div>:null}*/}
              {Meteor.user()? <div>&nbsp;&nbsp;&nbsp;&nbsp;HELLO! {Meteor.user().profile.name}</div>:null}
              {
                Meteor.userId() ?
                    <Button color="primary" variant="outlined" className={classes.link} onClick={this.logOut}>
                      LogOut
                    </Button> :
                    <Button color="primary" variant="outlined" className={classes.link} onClick={this.loadLogInPage}>
                      Login
                    </Button>
              }
            </Toolbar>
          </AppBar>
        </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    emailInput: state.emailInput,
    passwordInput: state.passwordInput,
    renderChoiceAssigner: state.renderChoiceAssigner
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateEmailText: (text) => dispatch(updateEmailInputBox(text)),
    updatePasswordText: (text) => dispatch(updatePasswordInputBox(text)),
    changeChoiceOnNav: (choice) => dispatch(changeChoiceOnNav(choice))
  }
}

export default compose (
  withStyles(styles),
  connect(mapStateToProps,mapDispatchToProps)
) (Nav)