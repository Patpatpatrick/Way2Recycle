import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { closePopedItemInItemBox} from '../../actions';

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
  // console.log(this.props.detail);
  console.log(this.props);
  //this.props.updatePostedItem(this.props.index);
  // var newOBJ = Object.assign(this.props.itemForPopUp,)
  console.log(this.props.itemForPopUp);
  // var newItemWithLikeUpdated = Object.assign({},this.props.itemForPopUp,{
  //   like:[...this.itemForPopUp.like,Meteor.userId()]
  // });
  Meteor.call('updateOneItem', this.props.itemForPopUp._id, this.props.itemForPopU); // need to confirm
  console.log(this.props.itemForPopUp._id);
  alert('Update one item!');
  // this.props.close();
}



// handleImageChange(event) {
//   event.preventDefault();
//   let reader = new FileReader();
//   let file = event.target.files[0];
//   reader.onloadend = () => {
//       this.setState({
//           file: file,
//           imagePreviewUrl: reader.result,
//           date: new Date().toLocaleString()
//       });
//   }
//   reader.readAsDataURL(file)
// }

  render() {
    
      return (
       <div className='popup'>
          <div className='popup_inner'>

     
          <div><TextField name="title" id="align" label="Item" defaultValue={this.props.itemForPopUp.title} fullWidth inputProps={{style: { textAlign: "center" }}} onChange={this.handleChange}/></div>
          <div><TextField name="price" id="align" label="Price" defaultValue={this.props.itemForPopUp.price} fullWidth inputProps={{style: { textAlign: "center" }}} onChange={this.handleChange}/></div>
          <div><TextField name="category" id="align" label="Category" defaultValue={this.props.itemForPopUp.category} fullWidth inputProps={{style: { textAlign: "center" }}} onChange={this.handleChange}/></div>
          <div><TextField name="description" id="align" label="Description" defaultValue={this.props.itemForPopUp.description} fullWidth inputProps={{style: { textAlign: "center" }}} onChange={this.handleChange}/></div>
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
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: fullWidth,
    height: 150,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

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
      }
};
}
export default connect(mapStateToProps, mapDispatchToProps)(Popup)


// handleClick(){
//   Meteor.call('deleteOneItem', this.props.index, function (err, result) {
//       if(err){
//           console.log("error");
//       }
//       // console.log(result);
//   });
//   this.props.cOne(this.props.index);
// }
// render() {
//   return (
//       <Button type="button" onClick = {this.handleClick} id={this.props.index + 'Clear'}>Clear</Button>
//   );
// }
// }
// const mapDispatchToProps = (dispatch) => {
// return {
// cOne: (index) => {
//   dispatch(clearItem(index));
// }
// }
// };