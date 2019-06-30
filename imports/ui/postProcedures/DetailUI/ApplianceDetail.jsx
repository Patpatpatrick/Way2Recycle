import React, { Component } from 'react';
import MapContainer from './googleMap';
import Geosuggest from 'react-geosuggest';
import { Meteor } from 'meteor/meteor';

class ApplianceDetail extends Component {
    constructor(props) {
        super(props);
        // const new_obj = {
        //     "user_id" : "test2",
        //     "title" : "car1",
        //     "description" : " a nice car",
        //     "location" : "1231,123",
        //     "price" : 50,
        //     "category" : "Auto",
        //     "date" : "2019-6-29 16:38:10",
        //     "imagePreviewUrl" : "123456",
        //     "attribute" : ""
        // };
        this.state = {
            user_id : "test2",
            title: 'An item',
            price: 0,
            category : 'Appliance',
            description : 'Description',
            location : "1231,123",
            date : new Date().toLocaleString(),
            file : '',
            imagePreviewUrl : '',
            attribute : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSuggestSelect = this.onSuggestSelect.bind(this);
    }
    handleChange (event) {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name] : value,
            date : new Date().toLocaleString()
        });
    }
    handleImageChange (event) {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
        this.setState({
            file: file,
            imagePreviewUrl: reader.result,
            date : new Date().toLocaleString()
        });
        }
        reader.readAsDataURL(file)
    }
    handleSubmit (event) {
        event.preventDefault();
        Meteor.call("createItem",this.state);
        console.log(this.state);
    }
    onSuggestSelect(suggest) {
        console.log(suggest);
    }
	render() {
        return (
            <div className="container" >
                <table id = "content" style={{"width": "1180px", "height": "650px"}}>
                    <tbody>
                    <tr>
                        <td style={{"verticalAlign": "0%"}}>
                            <br></br>
                            <form style={{"width": "350px","verticalAlign": "0%"}} onSubmit={this.handleSubmit} className="form" ref = "inputform">
                                <label htmlFor="iname">Item's Name is</label>
                                <input type="text" onChange={this.handleChange} id="title" name="title" placeholder="Item's name.." required = "required"></input>
                                <label htmlFor="lname">Price</label>
                                <input type="text" onChange={this.handleChange} id="price" name="price" placeholder="Price.." required = "required" ></input>
                                <label htmlFor="subject">description</label>
                                <textarea onChange={this.handleChange} id="subject" name="description" placeholder="Write something.."></textarea>
                                <input type="file" onChange={this.handleImageChange} />
                                <div>
                                    {this.state.imagePreviewUrl !== '' ? <img src={this.state.imagePreviewUrl} style={{"width": "350px", "height": "200px"}}/> : <span></span>}
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        </td>
                        <td style={{"verticalAlign": "0%"}}>
                            <br></br>
                            <div>Where is the seller?</div>
                            <div>
                                <MapContainer/>
                                <Geosuggest
                                    initialValue="Hamburg"
                                    onSuggestSelect={this.onSuggestSelect}
                                    location={new google.maps.LatLng(53.558572, 9.9278215)}
                                    radius="20"
                                />
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ApplianceDetail;