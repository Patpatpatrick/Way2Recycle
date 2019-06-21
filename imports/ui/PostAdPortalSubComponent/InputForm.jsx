import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateItem } from '../../actions';
import { changeUnsubmittedItem } from '../../actions';
class InputForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit (event) {
        event.preventDefault();
        this.props.generateItem();
    }
    handleChange (event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.props.changeUnsubmittedItem(name,value);
    }
	render() {
        return (
            <div className="container" >
                <form style={{"width": "350px","verticalAlign": "0%"}} onSubmit={this.handleSubmit} onChange={this.handleChange} className="form" ref = "inputform">
                    <label htmlFor="iname">Item's Name is</label>
                    <input type="text" id="iname" name="itemname" placeholder="Item's name.."></input>
                    <label htmlFor="lname">Price</label>
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

export default connect(null, { generateItem, changeUnsubmittedItem })(InputForm);
