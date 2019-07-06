import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from './style/NavStyle';
import SearchBar from './SearchBar.jsx';
import {connect} from "react-redux";
import {changeChoiceOnNav, updateEmailInputBox, updatePasswordInputBox} from "../actions";



class Nav extends React.Component{

  constructor(props) {
    super(props);
    this.state = {loginFlag: false}
  }

  /*
   TODO: if user log out INSIDE dashboard, should redirect to hompage
   TO BE Done after DashBoard is added
  */
  logOut = () => {
    Meteor.logout((err) => {
      if (err) {
        alert('Failed to logout for the user: ' + Meteor.userId())
      }
      console.log("Successfully logged out for user: " + Meteor.userId())
      //this.props.changeChoiceOnNav("home")
      this.setState({flag: !this.state.loginFlag})
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
    return (
        <React.Fragment>
          <CssBaseline/>
          <AppBar position="static" color="default" elevation={0} className={''}>
            <Toolbar className={''}>
              <Typography variant="h6" color="inherit" noWrap className={''}>
                Way2Recycle
              </Typography>
              <SearchBar/>
              <nav>
                <Link variant="button" color="textPrimary" className={''} onClick ={()=>this.props.changeChoiceOnNav('home')}>
                  Home &nbsp;
                </Link>
                <Link variant="button" color="textPrimary" className={''} onClick = {()=>this.props.changeChoiceOnNav('viewPost')}>
                  View Posted Ad &nbsp;
                </Link>
                {
                  Meteor.userId() ?
                      <Link variant="button" color="textPrimary" className={''} onClick = {()=>this.props.changeChoiceOnNav('post')} >
                        Post ad &nbsp;
                      </Link> :
                      <Link variant="button" color="textPrimary" className={''} onClick = {()=>this.props.changeChoiceOnNav('post')}>
                        Post ad &nbsp;
                      </Link>
                }

                {Meteor.user()?<Link variant="button" color="textPrimary" className={''} onClick = {()=>this.props.changeChoiceOnNav('user')}>
                  My items &nbsp;
                </Link>: null}


                {
                  Meteor.userId() ? null :
                      <Link variant="button" color="textPrimary" className={''} onClick={this.loadSignUpPage}>
                        Sign Up &nbsp;
                      </Link>
                }
              </nav>
              {/*{Meteor.user()? <div>&nbsp;&nbsp;&nbsp;&nbsp;HELLO! {Meteor.user().profile.FirstName}</div>:null}*/}
              {Meteor.user()? <div>&nbsp;&nbsp;&nbsp;&nbsp;HELLO! {Meteor.user().profile.name}</div>:null}
              {
                Meteor.userId() ?
                    <Button color="primary" variant="outlined" className={''} onClick={this.logOut}>
                      LogOut
                    </Button> :
                    <Button color="primary" variant="outlined" className={''} onClick={this.loadLogInPage}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav);