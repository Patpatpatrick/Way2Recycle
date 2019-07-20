import React from 'react';
import Nav from './Nav';
import Home from './Home';
import ItemsBox from './PostedAd/ItemsBox/ItemsBox';
import Login from '../ui/LogIn/LogIn';
import SignUp from './SignUp'
import PostUI from './postProcedures/PostUI';
import ResetPasswordByEmail from './ResetPasswordByEmail'
import {connect} from "react-redux";
import {changeChoiceOnNav} from "../actions";
import SendPasswordToEmail from "./SendPasswordToEmail";
import UserList from "./UserList/UserList";


// import './style/style.css'
let renderResetPasswordPage = false
let passwordTokenFromEmail ='default'

Accounts.onResetPasswordLink((token,done)=>{
    console.log('token received from email URL')
    console.log(token)
    renderResetPasswordPage = true
    passwordTokenFromEmail = token
})


class App extends React.Component{
    constructor(props) {
        super(props);
        this.conditionalRender = this.conditionalRender.bind(this);
    }
// const renderChoices = ['home','post','viewPost','login','signup']

    conditionalRender(){

        if (this.props.choice ==='resetPasswordByEmail') {
            console.log(passwordTokenFromEmail)
            return (<ResetPasswordByEmail token={passwordTokenFromEmail}/>)
        }


        if (this.props.choice ==='sendPasswordToEmail') {
            return (<SendPasswordToEmail/>)
        }


        if (this.props.choice === "home") {
            // console.log('should be here');
            return (<Home/>);
        } else if (this.props.choice === "post") {
            return (<PostUI/>);
        } else if (this.props.choice === "signup") {
            return (<SignUp/>);
        } else if (this.props.choice === "login") {
            return (<Login/>);
        } else if (this.props.choice === "viewPost") {
            return (<ItemsBox/>);
        } else if (this.props.choice === "user") {
            return (<UserList/>)

        }
    }

    render() {
      if (renderResetPasswordPage) {
          this.props.changeChoiceOnNav('resetPasswordByEmail')
          renderResetPasswordPage = false
      }

      return (
        <div>
            <Nav/>
            {this.conditionalRender()}
        </div>
      )}
  }
  
  const mapStateToProps = (state) => {
    return {
      choice: state.renderChoiceAssigner
    }
  };

const mapDispatchToProps = (dispatch) => {
    return {
        changeChoiceOnNav: (choice) => dispatch(changeChoiceOnNav(choice))
    }
}


  export default connect(mapStateToProps, mapDispatchToProps)(App);
