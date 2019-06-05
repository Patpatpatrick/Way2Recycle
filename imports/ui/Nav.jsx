import React, {Component} from 'react';

import List_ele from "./List_ele";


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

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
                        <ul className="navbar-nav ml-auto">
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
                                <a className="nav-link" href="#">
                                    Contact
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Nav;