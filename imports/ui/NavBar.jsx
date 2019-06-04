import React, { Component } from 'react';
import './style.css'
class NavBar extends Component {
	render() {
        return (
            <div className="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#Register">Register</a>
                <a href="#SignIn">Sign In</a>
                <a href="#PostAd">Post Ad</a>
            </div>
        );
    }
}
export default NavBar;