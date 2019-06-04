import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateMessage } from './actions';
import { changeUnsubmittedMessage } from './actions';
import './style/style.css'
class InputForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit (event) {
        event.preventDefault();
        this.props.generateMessage();
    }
    handleChange (event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.props.changeUnsubmittedMessage(name,value);
    }
	render() {
        return (
            <div className="container" >
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} className="form" ref = "inputform">
                    <label htmlFor="iname">From</label>
                    <input type="text" id="iname" name="itemname" placeholder="Item's name.."></input>
                    <label htmlFor="lname">To</label>
                    <input type="text" id="price" name="price" placeholder="Price.."></input>
                
                    <label htmlFor="Category">Category</label>
                    <select id="category" name="category">
                        <option value="appliance">appliance</option>
                        <option value="furniture">furniture</option>
                        <option value="Automobile">Automobile</option>
                        <option value="Book">Book</option>
                    </select>

                    <label htmlFor="subject">description</label>
                    <textarea id="subject" name="description" placeholder="Write something.."></textarea>
                    <center>
                        <button type="submit" value="Submit" id = "submitBtn">Submit</button>
                        <button type="reset" value="Reset">Reset</button>
                    </center>
                </form>
            </div>
        );
    }
}

export default connect(null, { generateMessage, changeUnsubmittedMessage })(InputForm);
