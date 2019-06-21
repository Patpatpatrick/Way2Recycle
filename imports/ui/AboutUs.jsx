import React, {Component} from 'react';

class aboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render (){
        return (
            <div className="aboutUs">
                <h1> Way2Recycle is designed by Team Way2Recylce for people with needs to exchange second-hand goods.
                </h1>
                <p>Users will be able to: 
                <ul>
                <li>search</li>
                <li>buy</li>
                <li>sell</li>
                 </ul>
                Items. Users will also be able to manage their items for sale.</p>

                <p>To star or fork the project, please visit the GitHub repository at: </p>
                <a href= "https://github.com/Patpatpatrick/Way2Recycle" target="_blank">About</a> 

            </div>    
        );
    }
}
export default aboutUs;