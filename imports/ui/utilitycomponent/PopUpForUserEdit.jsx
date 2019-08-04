import React from 'react';
import { connect } from 'react-redux';
import { closePopedItem } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { updateItem} from '../../actions';
import { changeUnPostedItem} from '../../actions';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
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


handleChange(event) {
  event.preventDefault();
  const target = event.target;
  const value = target.value;
  const name = target.name;
  console.log(name);
  console.log(name);
  this.props.changeUnsubmittedItem(name,value);
  console.log(this.props.changeUnsubmittedItem);

}

handleImageChange(event) {
  console.log(this.props.itemForPopUp.imagePreviewUrl);
  event.preventDefault();
  let reader = new FileReader();
  let file = event.target.files[0];
  reader.onloadend = () => {
      this.props.changeItem('file',file);
      this.props.changeItem('imagePreviewUrl',reader.result);
      // console.log(reader.result);
      this.props.updateItem('imagePreviewUrl',reader.result);
  }
  console.log(this.props.itemForPopUp.imagePreviewUrl);
            <div>{this.props.itemForPopUp.imagePreviewUrl !== '' ? <img src={this.props.itemForPopUp.imagePreviewUrl} style={{
                                        "width": "350px",
                                        "height": "200px"
                                    }}/> : <span></span>}
          </div>
  reader.readAsDataURL(file)
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
          <p>Posted Image</p>
          <div>{this.props.itemForPopUp.imagePreviewUrl !== '' ? <img src={this.props.itemForPopUp.imagePreviewUrl} style={{
                                        "width": "350px",
                                        "height": "200px"
                                    }}/> : <span></span>}
          </div>
          <input type="file" onChange={this.handleImageChange}/>

          <button type='update' onClick={this.handleClick}>update</button>
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
      itemForPopUp: state.userEditReducer.itemForPopUp,

      // shouldUpdateItem: state.updateItem, // updated to update item 
        // toPopThisIndex : state.itemProcess.popUpitemIndex,
        // item: state.itemProcess.itemArray[state.itemProcess.popUpitemIndex],
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      closePopeditem: () => {
        dispatch(closePopedItem());
      },
      updateItem: (key, value) => {
        dispatch(updateItem(key, value));
      },
      changeItem: (key,value) => {
        dispatch(changeUnPostedItem(key,value));
    }
};
}
export default connect(mapStateToProps, mapDispatchToProps)(Popup)


// handleClick(){
//   Meteor.call('deleteOneItem', this.props.index, function (err, result) {
//       if(err){
//           console.log("failResetByMeteor");
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