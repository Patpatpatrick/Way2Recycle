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
        this.state = {
          isDone: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.resetAndclose = this.resetAndclose.bind(this);
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
        this.setState({
          isDone:true
        })
    }
    resetAndclose(){
      this.setState({
        isDone:false
      })
      this.props.close();
      this.props.reset();
    }
    render() {
      return (
          <div className='popup'>
          <div className='popup_inner'>
          {this.state.isDone
            ? <div>
                <br/>
                <br/>
                <br/>

                <h3>done!</h3>

                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                  <circle class="path_circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                  <polyline class="path_check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                </svg>

                <br/>
                <br/>
                <br/>
                <button type = 'close' onClick = {this.resetAndclose}>Close</button>
              </div>
            : <div style={{paddingTop:50}}>
                <h2>Your item info :</h2>
                <br/>
                  <div><b>Title:</b> {this.props.detail.title}</div>
                <br/>
                  <div><b>Price :</b> {this.props.detail.price}</div>
                <br/>
                  <div><b>Category: </b> {this.props.detail.category}</div>
                <br/>
                  <div> <b>Post Date: </b> {this.props.detail.date.toString()}</div>
                  <br/>
                  <span><b>Description: </b>
                      {(this.props.detail.description==="")?
                          <span>No description provided</span>:
                          <span>{this.props.detail.description}</span>
                      }
                  </span>
                <br/>

                <br/>
                  <span><b>Location: </b>
                      {(this.props.detail.locationStr==="")?
                          <span>No location provided</span>:
                          <span>{this.props.detail.locationStr}</span>
                  }
                  </span>
                <br/>
                <div>{this.props.detail.imagePreviewUrl !== '' ? <img src={this.props.detail.imagePreviewUrl} style={{
                                        "width": "350px",
                                        "height": "200px"
                                    }}/> : <span></span>}
                </div>
                <br/>
                <span>
                  <button type = 'close' onClick={this.props.close}>Need Revise</button>
                    &nbsp;&nbsp;
                <button type = 'submit' onClick={this.handleClick}>Submit</button>
                </span>
              </div>
          }
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