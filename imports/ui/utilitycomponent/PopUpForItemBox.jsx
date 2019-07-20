import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { closePopedItemInItemBox} from '../../actions';

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
  Meteor.call('updateOneItem', this.props.itemForPopUp._id, this.props.itemForPopUp); // need to confirm
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

          <div>title: {this.props.itemForPopUp.title}</div>
          <div>price: {this.props.itemForPopUp.price}</div>
          <div>category: {this.props.itemForPopUp.category}</div>
          <div>description: {this.props.itemForPopUp.description}</div>
          <div>date: {this.props.itemForPopUp.date}</div>
          <button type='close' onClick={this.props.closePopeditem}>close</button>
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