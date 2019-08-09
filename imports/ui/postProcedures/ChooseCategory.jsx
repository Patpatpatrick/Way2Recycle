import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeUnPostedItem } from '../../actions';
class ChooseCategory extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(value);
        console.log(name);
        this.props.changeUnPostedItem(name,value);
    }
	render() {
        return (
            <div className="container" style={{display: 'flex', justifyContent: 'center', marginTop:50}}>
                <form style={{"width": "350px","verticalAlign": "0%"}} onChange={this.handleChange} className="form" ref = "inputform">
                    <label htmlFor="Category"><b>Category</b></label>
                    <select id="category" name="category" value = {this.props.cateValue.category}>
                        <option selected="selected" value="">Please Choose</option>
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
const mapStateToProps = (state) => {
    return {
        cateValue: state.postItemReducer,
    };
}
export default connect(mapStateToProps, {changeUnPostedItem })(ChooseCategory);
