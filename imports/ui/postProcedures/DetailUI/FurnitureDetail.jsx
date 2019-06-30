import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeUnsubmittedItem } from '../../../actions';
import UploadPic from '../UploadPic';

class FurnitureDetail extends Component {
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
                    <label htmlFor="iname">Item's Name is</label>
                    <input type="text" id="iname" name="itemname" placeholder="Item's name.."></input>
                    <label htmlFor="lname">Price</label>
                    <input type="text" id="price" name="price" placeholder="Price.."></input>
                    <label htmlFor="subject">description</label>
                    <textarea id="subject" name="description" placeholder="Write something.."></textarea>
                </form>
                <UploadPic/>
            </div>
        );
    }
}

export default connect(null, {changeUnsubmittedItem })(FurnitureDetail);
