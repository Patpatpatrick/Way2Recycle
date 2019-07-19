import React from 'react';
import { connect } from 'react-redux';
import { closePopedItem } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { updatePostedItem} from '../../actions';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
}

handleClick(){
  // console.log(this.props.detail);
  console.log(this.props);
  //this.props.updatePostedItem(this.props.index);
  
  Meteor.call('updateOneItem', "jrkmnjTw8ATLXqXKh", this.props.index); // need to confirm
  alert('Update one item!');
  // this.props.close();
}

  render() {
      return (
       <div className='popup'>
          <div className='popup_inner'>
         
          <div><TextField id="align" label="Item" defaultValue="2016 Tesla Model X P90D" inputProps={{style: { textAlign: "center" }}}/></div>
          <div><TextField id="align" label="Price" defaultValue="56800" inputProps={{style: { textAlign: "center" }}}/></div>
          <div><TextField id="align" label="Category" defaultValue="Auto" inputProps={{style: { textAlign: "center" }}}/></div>
          <div><TextField id="align" label="Description" defaultValue="A Brand New Car" inputProps={{style: { textAlign: "center" }}}/></div>
          <div><TextField id="align" label="Posted Date" defaultValue="July 1, 2019" inputProps={{style: { textAlign: "center" }}}/></div>

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
      // shouldUpdateItem: state.updateItem, // updated to update item 
        // toPopThisIndex : state.itemProcess.popUpitemIndex,
        // item: state.itemProcess.itemArray[state.itemProcess.popUpitemIndex],
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      closePopeditem: () => {
        dispatch(closePopedItem());
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