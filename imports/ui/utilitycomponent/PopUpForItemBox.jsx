import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { closePopedItemInItemBox} from '../../actions';
import {likeItem} from '../../actions';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
}


handleClick(){
  Meteor.call('updateOneItem', this.props.itemForPopUp._id, this.props.itemForPopUp);
  this.props.likeItem(this.props.itemForPopUp.user_id, this.props.itemForPopUp._id);
}


  render() {
    
      return (
       <div className='popup'>
          <div className='popup_inner'>
        
          <div><TextField name="title" id="align" label="Item" defaultValue={this.props.itemForPopUp.title} fullWidth inputProps={{style: { textAlign: "center" }}}/></div>
          <div><TextField name="price" id="align" label="Price" defaultValue={this.props.itemForPopUp.price} fullWidth inputProps={{style: { textAlign: "center" }}}/></div>
          <div><TextField name="category" id="align" label="Category" defaultValue={this.props.itemForPopUp.category} fullWidth inputProps={{style: { textAlign: "center" }}}/></div>
          <div><TextField name="description" id="align" label="Description" defaultValue={this.props.itemForPopUp.description} fullWidth inputProps={{style: { textAlign: "center" }}}/></div>
          <div><TextField id="align" label="Posted Date" defaultValue={this.props.itemForPopUp.date} fullWidth inputProps={{style: { textAlign: "center" }}}/></div>

          <IconButton aria-label="home" onClick={this.props.closePopeditem}>
            <SvgIcon width="24" height="24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
          </IconButton>

        <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" onClick={this.handleClick}/>}
        label=""
      />
              
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state) => {
    return {
      itemForPopUp: state.itemBoxReducer.popUpItemInItemBox,

      // shouldUpdateItem: state.updateItem, // updated to update item 
        // toPopThisIndex : state.itemProcess.popUpitemIndex,
        // item: state.itemProcess.itemArray[state.itemProcess.popUpitemIndex],
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      closePopeditem: () => {
        dispatch(closePopedItemInItemBox());
      },
      likeItem: (userId, postId) => {
        dispatch(likeItem(userId, postId));
      }
};
}
export default connect(mapStateToProps, mapDispatchToProps)(Popup)