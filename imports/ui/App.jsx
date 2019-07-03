import React from 'react';
import Nav from './Nav';
import Home from './Home';
import PostAdPortal from './PostAdPortal.jsx';
import Login from '../ui/LogIn/LogIn';
import SignUp from './SignUp'
import PostUI from './postProcedures/PostUI';



// import './style/style.css'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.conditionalRender = this.conditionalRender.bind(this);
    }
// const renderChoices = ['home','post','viewPost','login','signup']

    conditionalRender(){
        if (this.props.choice === "home") {
            return (<Home/>);
        } else if (this.props.choice === "post") {
            return (<PostUI/>);
        } else if (this.props.choice === "signup") {
            return (<SignUp/>);
        } else if (this.props.choice === "login") {
            return (<Login/>);
        } else if (this.props.choice === "viewPost") {
            return (<PostAdPortal/>);
        }
    }

    render() {
      return (
        <div>
            <Nav/>
            {this.conditionalRender()}
        </div>
      )}
  }
  
  const mapStateToProps = (state) => {
    return {
      choice: state.renderChoiceAssigner.renderChoice,
    }
  };
  
  
  export default connect(mapStateToProps, null)(App);
