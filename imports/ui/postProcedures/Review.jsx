import React from 'react';
import { connect } from 'react-redux';
import { resetPost,closePostReview } from '../../actions';
import Dialog from "@material-ui/core/Dialog";
import {withStyles} from "@material-ui/core";
import MuiDialogTitle from "../utilitycomponent/PopUpForUserEdit";
import MuiDialogContent from "@material-ui/core/DialogContent/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions/DialogActions";
import {grey, red} from "@material-ui/core/colors";
import {compose} from "redux";


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

const styles = theme => {
    return ({
            dialogPaper: {
                minHeight: '80vh',
                maxHeight: '80vh',
                minWidth: '80vh',
                maxWidth: '80vh'
            },
        }
    );
};

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
        const { classes } = this.props;

        return (
          <div>
          <Dialog
              classes={{ paper: classes.dialogPaper }}
              onClose={this.props.close}
              open={true}
      /*        fullWidth={true}
              maxWidth={"80%"}*/
          >
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
                  <div style={{textAlign:"center"}}>
                <button type = 'close' onClick = {this.resetAndclose}>Close</button>
                  </div>
              </div>
            : <div style={{paddingTop:50}}>
                <h2 style={{textAlign:"center"}}>Your item info :</h2>

                <div style={{paddingLeft:20}}>
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

              </div>
                  <div style={{textAlign:"center", paddingBottom:25}}>
                <span >
                  <button type = 'close' onClick={this.props.close}>Need Revise</button>
                    &nbsp;&nbsp;
                <button type = 'submit' onClick={this.handleClick}>Submit</button>
                </span>
                  </div>
              </div>
          }
          </Dialog>
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
export default compose( withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps))(Popup);