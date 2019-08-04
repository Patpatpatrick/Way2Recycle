import React from 'react';
import { connect } from 'react-redux';
import { resetPost,closePostReview } from '../../actions';


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
      console.log(Meteor.user());
      let withOwnerInfo_Item;
      if(Meteor.user().emails){
        withOwnerInfo_Item = Object.assign({},this.props.detail,{
          owner:
              {username:Meteor.user().profile.name,
                owner_email:Meteor.user().emails[0].address}
        });
        Meteor.call("createItem",withOwnerInfo_Item);
      }
      else {
        var Email;
        Meteor.call('getGoogleUserEmail', (err, email) => {
            Email = email;
            console.log(Email);
            withOwnerInfo_Item = Object.assign({},this.props.detail,{
              owner:
                  {username:Meteor.user().profile.name,
                    owner_email:Email}
            });
            Meteor.call("createItem",withOwnerInfo_Item);
        });
      }
        alert('Add done!');
        this.props.reset();
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
      },
      reset:()=>{
        dispatch(resetPost());
      }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Popup);