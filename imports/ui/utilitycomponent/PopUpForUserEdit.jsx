import React from 'react';
import {connect} from 'react-redux';
import {changeUnsubmittedItem, closePopedItem} from '../../actions';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {updateItem} from '../../actions';
import {changeUnPostedItem} from '../../actions';
import MuiDialogContent from "@material-ui/core/DialogContent/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions/DialogActions";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)(props => {
    const {children, classes, onClose} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);

        this.state = {
            date: this.props.itemForPopUp.date,
            isClicked: false,
            inputError: false,
            dateError: false,
        }
    }

    handleClick() {

        /*
        Description: can be empty
        Title: should not allow empty
        Price: should not be empty, must be number (but keep it as string in front end)
        */

        if (isNaN(this.props.itemForPopUp.price) ||
            this.props.itemForPopUp.price === "" ||
            this.props.itemForPopUp.title === "") {
            this.setState({isClicked: true, inputError: true})
            return;
        }

        let newObject = this.props.itemForPopUp
        this.props.itemForPopUp.date = this.state.date

        Meteor.call('updateOneItem', this.props.itemForPopUp._id, newObject); // need to confirm
        this.props.closePopeditem()
    }


    handleChange(event) {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.props.changeUnsubmittedItem(name, value);
    }

    handleImageChange(event) {
        //console.log(this.props.itemForPopUp.imagePreviewUrl);
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.props.changeItem('file', file);
            this.props.changeItem('imagePreviewUrl', reader.result);
            // console.log(reader.result);
            this.props.updateItem('imagePreviewUrl', reader.result);
        }
        console.log(this.props.itemForPopUp.imagePreviewUrl);
        <div>{this.props.itemForPopUp.imagePreviewUrl !== '' ?
            <img src={this.props.itemForPopUp.imagePreviewUrl} style={{
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

    changeDate = (date) => {

        if (new Date() < date) {
            this.setState({dateError: true})
            return;
        }
        this.setState({date: date, dateError: false})
    }

    render() {
        return (
            <div>
                <Dialog
                    onClose={this.props.closePopeditem}
                    aria-labelledby="customized-dialog-title"
                    open={this.props.toPop}>
                    <DialogTitle id="customized-dialog-title" onClose={this.props.closePopeditem}>
                        {this.props.itemForPopUp.title}
                    </DialogTitle>
                    <DialogContent dividers>
                        {this.state.inputError && this.state.isClicked ?
                            <div>
                                <Typography component="h1" variant="h5" color={"error"}>
                                    Please make sure title is not empty or price is a number
                                </Typography>
                            </div>
                            : null}
                        <div>
                            <TextField name="title" id="align" label="Item"
                                       defaultValue={this.props.itemForPopUp.title} fullWidth
                                       inputProps={{style: {textAlign: "center"}}} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <TextField name="price" id="align" label="Price"
                                       defaultValue={this.props.itemForPopUp.price} fullWidth
                                       inputProps={{style: {textAlign: "center"}}} onChange={this.handleChange}/>
                        </div>
                        <span>
                                 {this.state.dateError ?
                                     <div>
                                         <Typography component="h1" variant="h5" color={"error"}>
                                             Date cannot be later than current time!
                                         </Typography>
                                     </div>
                                     : null}
                            <div>Posted Date</div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.changeDate}
                                showTimeSelect
                                dateFormat="Pp"
                            />
                        </span>
                        <span>
                    <div>Category</div>
                          <Select
                              value={this.props.itemForPopUp.category}
                              label="Category"
                              name="category"
                              onChange={this.handleChange}
                              input={<OutlinedInput labelWidth={0} name="" id=""/>}>
                              <MenuItem label="Category" name="category" value={"Car"}>Car</MenuItem>
                              <MenuItem label="Category" name="category" value={"Appliance"}>Appliance</MenuItem>
                              <MenuItem label="Category" name="category" value={"Furniture"}>Furniture</MenuItem>
                              <MenuItem label="Category" name="category" value={"Book"}>Book</MenuItem>
                              <MenuItem label="Category" name="category" value={"Computer"}>Computer</MenuItem>
                              <MenuItem label="Category" name="category" value={"Other"}>Other</MenuItem>
                          </Select>
                </span>
                        <div><TextField name="description"
                                        id="align" label="Description"
                                        defaultValue={this.props.itemForPopUp.description}
                                        fullWidth multiline={true}
                                        rows={2}
                                        rowsMax={4} inputProps={{style: {textAlign: ""}}} onChange={this.handleChange}/>
                        </div>
                        <p>Posted Image</p>
                        <div>{this.props.itemForPopUp.imagePreviewUrl !== '' ?
                            <img src={this.props.itemForPopUp.imagePreviewUrl} style={{
                                "width": "350px",
                                "height": "200px"
                            }}/> : <span>Please upload an image</span>}
                        </div>
                        <input type="file" onChange={this.handleImageChange}/>

                        <button type='update' onClick={this.handleClick}>update</button>

                    </DialogContent>
                    <DialogActions>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

/*
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
*/

const mapStateToProps = (state) => {
    return {
        itemForPopUp: state.userEditReducer.itemForPopUp,
        toPop: state.userEditReducer.popUp

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
        changeItem: (key, value) => {
            dispatch(changeUnPostedItem(key, value));
        },
        changeUnsubmittedItem: (key, value) => {
            dispatch(changeUnsubmittedItem(key, value));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Popup)