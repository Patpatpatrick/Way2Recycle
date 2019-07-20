import React from 'react';
import { connect } from 'react-redux';
import { closePostReview } from '../../actions';

// user_id : Meteor.userId(),
//             title: 'An item',
//             price: 0,
//             category : 'Appliance',
//             description : 'Description',
//             location :  {lat: 49.2827291, lng: -123.12073750000002},
//             locationStr : "Vancouver,BC,Canada",
//             date : new Date().toLocaleString(),
//             file : '',
//             imagePreviewUrl : '',
//             attribute : ""
class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        Meteor.call("createItem",this.props.detail);
        alert('Add done!');
        this.props.close();
    }
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
                <div>Title: {this.props.detail.title}</div>
                <div>Price : {this.props.detail.price}</div>
                <div>Category: {this.props.detail.category}</div>
                <div>Description: {this.props.detail.description}</div>
                <div>Post Date: {this.props.detail.date.toString()}</div>
                <div>Location: {this.props.detail.locationStr}</div>
                <img src={this.props.detail.imagePreviewUrl} style={{"width": "50px", "height": "20px"}}/>
                <button type = 'close' onClick={this.props.close}>Need Revise</button>
                <button type = 'submit' onClick={this.handleClick}>Submit</button>
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
      detail:state.postItemReducer
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
      close: () => {
        dispatch(closePostReview());
      }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Popup);