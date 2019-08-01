import React, {Component} from 'react';
import MapContainer from './googleMap';
import Geosuggest from 'react-geosuggest';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { showPostReview}  from '../../../actions';
import { changeUnPostedItem} from '../../../actions';

import '../../style/style.css';
import Review from '../Review';

class ApplianceDetail extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSuggestSelect = this.onSuggestSelect.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.props.changeItem(name,value);
    }

    handleImageChange(event) {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.props.changeItem('file',file);
            this.props.changeItem('imagePreviewUrl',reader.result);
        }
        reader.readAsDataURL(file)
    }

    handleSubmit(event) {
        event.preventDefault();
        // <K:V> ==> {user_id : Meteor.userId()}
        let key = 'user_id'
        let meteorUserId = Meteor.userId();

        if (meteorUserId==='' || meteorUserId===undefined) {
            console.log("Error: The user is attempting to submit item without being logged in!")
            alert("Error: The user is attempting to submit item without being logged in!")
            return;
        }
        
        this.props.changeItem(key,meteorUserId);
        this.props.showReview();
    }

    onSuggestSelect(suggest) {
        this.props.changeItem('location',suggest.location);
        this.props.changeItem('locationStr',suggest.description);
        // this.setState({
        //     location: suggest.location,
        //     locationStr: suggest.description
        // });
        // console.log(suggest);
    }

    render() {
        return (
            <div className="container">
                <table id="content" style={{"width": "1180px", "height": "650px"}}>
                    <tbody>
                    <tr>
                        <td style={{"verticalAlign": "0%"}}>
                            <br></br>
                            <form style={{"width": "350px", "verticalAlign": "0%"}} onSubmit={this.handleSubmit}
                                  className="form" ref="inputform">
                                <label htmlFor="iname">Item's Name is</label>
                                <input type="text" onChange={this.handleChange} id="title" name="title"
                                       placeholder="Item's name.." required="required"></input>
                                <label htmlFor="lname">Price</label>
                                <input type="text" onChange={this.handleChange} id="price" name="price"
                                       placeholder="Price.." required="required"></input>
                                <label htmlFor="subject">description</label>
                                <textarea onChange={this.handleChange} id="subject" name="description"
                                          placeholder="Write something.."></textarea>
                                <label htmlFor="uploadImg">Upload Picture</label>
                                <input type="file" onChange={this.handleImageChange}/>
                                <div>
                                    {this.props.item.imagePreviewUrl !== '' ? <img src={this.props.item.imagePreviewUrl} style={{
                                        "width": "350px",
                                        "height": "200px"
                                    }}/> : <span></span>}
                                </div>
                                <br></br>
                                <button type="submit">Confirm</button>
                            </form>
                        </td>
                        <td style={{"verticalAlign": "0%"}}>
                            <br></br>
                            <div>
                                <MapContainer />
                                <div>Where is the seller?</div>
                                <Geosuggest
                                    placeholder="Search Your Place!"
                                    onSuggestSelect={this.onSuggestSelect}
                                    location={new google.maps.LatLng(53.558572, 9.9278215)}
                                    radius="20"
                                    className='geoLocation'
                                    value = {this.props.item.locationStr}
                                />
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                {this.props.shouldShowReview && <Review />}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shouldShowReview: state.displayReview,
        item:state.postItemReducer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        showReview: () => {
            dispatch(showPostReview());
        },
        changeItem: (key,value) => {
            dispatch(changeUnPostedItem(key,value));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ApplianceDetail);