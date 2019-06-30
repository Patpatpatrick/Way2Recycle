import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeUnsubmittedItem } from '../../actions';
class ChooseCategory extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
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
                <form style={{"width": "350px","verticalAlign": "0%"}} onChange={this.handleChange} className="form" ref = "inputform">
                    <label htmlFor="Category">Category</label>
                    <select id="category" name="category">
                        <option value="Pleasechoose">Please Choose</option>
                        <option value="Car">Car</option>
                        <option value="Appliance">Appliance</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Book">Book</option>
                        <option value="Computer">Computer</option>
                        <option value="Other">Other</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default connect(null, {changeUnsubmittedItem })(ChooseCategory);
