import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

class Nav extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         popLogIn :false
    //     }
    //     this.handleClickOnLogin = this.handleClickOnLogin.bind(this);
    // }
    // handleClickOnLogin(){
    //     this.setState({
    //         popLogIn :true
    //     })
    // }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div className="container">

                    {/*logo*/}
                    <a className="navbar-brand" href="#">
                        <img src="http://placehold.it/150x50?text=Logo" alt=""/>
                    </a>
                    {/*logo*/}


                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <NavLink to="/" activeClassName="hurray">
                            Home
                        </NavLink>
                        <NavLink to="/login" activeClassName="hurray">
                            Login
                        </NavLink>
                        <NavLink to="/postAd" activeClassName="hurray">
                            postAd
                        </NavLink>
                        <NavLink to="/about" activeClassName="hurray">
                            About Us
                        </NavLink>

                    {/* <Route exact path="/" component={Home} />
                <Route path="/about" component={AboutUs} />
                <Route path="/login" component={Login} />
                <Route path="/postAd" component={PostAdPortal} /> */}
                        {/* <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    List
                                </a>
                            </li>

                            <li className="nav-item">
                                <button onClick = {this.handleClickOnLogin}>
                                    LogIn
                                </button>
                            </li>

                        </ul> */}
                    </div>
                </div>
            </nav>

        )
    }
}

export default Nav;