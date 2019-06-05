import React, { Component } from 'react';
import { connect } from 'react-redux';
import './logInStyle.css'

class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:"",
            password:"",
            isLogInValid:false
        }
    }

    onChangeText = (event)=> {
        this.setState({username: event.target.value})
        this.isValid()
    }

    onChangePassword =(event) => {
        this.setState({password: event.target.value})
        this.isValid()
    }

    isValid = () => {
         (this.state.username.length > 6 && this.state.password.length >6) ?
            this.setState({isLogInValid:true}) : this.setState({isLogInValid:false})
    }

    render() {
        return (
            <div className={"popup"}>
                <div className={"popup_inner"} >
                    <button className={"closeButton"}>X</button>
                    <div className={"align-mid fontStyle"}>
                        <div >
                            <span className={"left-align"}>Username </span>
                            <span> <input className={"right-align textBox"} type={'textarea'} onChange={this.onChangeText}/>
                            </span>
                        </div>
                        <br/>
                        <div>
                            <span className={"left-align"}>Password </span>
                            <input  className={"right-align textBox"}  type={'password'} onChange={this.onChangePassword}/>
                        </div>
                        <br/>
                        <div className={"buttonWrap"}>
                            <button className={"loginButton"} type="button" onClick={""}>
                                LogIn
                            </button>
                            {this.state.isLogInValid?
                                <span className={"checkMark"}> &#10003;</span> :
                                null
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogIn
