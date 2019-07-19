import React, {Component} from 'react';
import MapContainer from './googleMap';
import Geosuggest from 'react-geosuggest';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { showPostReview}  from '../../../actions';
import { updatePostedItem} from '../../../actions';
import '../../style/style.css';
import Review from '../Review';

class ApplianceDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: Meteor.userId(),
            title: 'An item',
            price: 0,
            category: 'Appliance',
            description: 'Description',
            location: {lat: 49.2827291, lng: -123.12073750000002},
            locationStr: "Vancouver,BC,Canada",
            date: new Date().toLocaleString(),
            file: '',
            imagePreviewUrl: '',
            attribute: "",
        }
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
        this.setState({
            [name]: value,
            date: new Date().toLocaleString()
        });
    }

    handleImageChange(event) {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result,
                date: new Date().toLocaleString()
            });
        }
        reader.readAsDataURL(file)
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        this.props.showReview();
        console.log(this.state);
    }

    onSuggestSelect(suggest) {

        this.setState({
            location: suggest.location,
            locationStr: suggest.description
        });
        console.log(suggest);
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
                                    {this.state.imagePreviewUrl !== '' ? <img src={this.state.imagePreviewUrl} style={{
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
                                <MapContainer locationInfo={this.state.location}/>
                                <div>Where is the seller?</div>
                                <Geosuggest
                                    placeholder="Search Your Place!"
                                    onSuggestSelect={this.onSuggestSelect}
                                    location={new google.maps.LatLng(53.558572, 9.9278215)}
                                    radius="20"
                                    className='geoLocation'
                                />
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p>{this.props.shouldShowReview}</p>
<<<<<<< HEAD
                {this.props.shouldShowReview && <Review detail = {this.state} />}
                <p>{this.props.shouldShowReview}</p>
=======
                {this.props.shouldShowReview && <Review detail={this.state}/>}
>>>>>>> develop
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shouldShowReview: state.displayReview,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        showReview: () => {
            dispatch(showPostReview());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ApplianceDetail);