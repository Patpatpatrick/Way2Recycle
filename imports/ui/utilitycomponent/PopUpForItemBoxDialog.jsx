import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { closePopedItemInItemBox} from '../../actions';
import MapContainer from './unModifiableMap';

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
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
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

class CustomizedDialogs extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }
    
    handleClose () {
        console.log('close it ');
        console.log(this.props.itemForPopUp);   
        this.props.closePopeditem();
    };

    render() {
        return (
        <div>
            <Dialog
            onClose={this.handleClose}
            aria-labelledby="customized-dialog-title"
            open={this.props.shouldOpen}
            >
            <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            {this.props.itemForPopUp.title}
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    Price($):                {this.props.itemForPopUp.price}
                </Typography>
                <Typography gutterBottom>
                    Category:                {this.props.itemForPopUp.category}
                </Typography>
                <Typography gutterBottom>
                    Description:                {this.props.itemForPopUp.description}
                </Typography>
                <Typography gutterBottom>
                    DatePosted:                {this.props.itemForPopUp.date.toString()}
                </Typography>
                <Typography gutterBottom>
                    Location:                {this.props.itemForPopUp.locationStr}
                </Typography>
                <MapContainer mapContainerSize = {{
                                                                    height: "300px",
                                                                    width: "500px",
                                                                    }} 
                                fatherLetShow = {true}
                                markerLocation = {this.props.itemForPopUp.location}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                Save changes
                </Button>
            </DialogActions>
            </Dialog>
        </div>
        );
    }
    }

const mapStateToProps = (state) => {
    return {
      itemForPopUp: state.itemBoxReducer.popUpItemInItemBox,
      shouldOpen: state.itemBoxReducer.shouldPopUpInitemBox,

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
export default connect(mapStateToProps, mapDispatchToProps)(CustomizedDialogs)
