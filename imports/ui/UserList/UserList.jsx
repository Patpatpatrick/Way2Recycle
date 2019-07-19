import React from 'react';
// import ClearOne from '../ClearOne';
import DeleteOne from './DeleteOne';
// import SeeOne from './ViewOneItem';
import { connect } from 'react-redux';
// import useStyles from '../../style/itemTableStyle';

import Paper from '@material-ui/core/Paper';
import  {loadUserItems} from "../../actions/index"

import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import {compose} from "redux";
import './userList.css'
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import {red} from "@material-ui/core/colors";
//import PopUp from '../PostAdPortalSubComponent/PopUp';

import { popUpItem}  from '../../actions';
import Button from '@material-ui/core/Button';
import Popup from '../PostAdPortalSubComponent/PopUp';


const styles = theme => {
    return ({
            root: {
            },
            paper: {
                padding: theme.spacing(1),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
            icon: {
                margin: theme.spacing(1),
                fontSize: 32,
            },
            iconDelete: {
                margin: theme.spacing(1),
                fontSize: 32,
                color:red[800]
            },
            textPart: {
                textAlign: 'left',
                paddingLeft: "25%",
                PaddingRight: "25%"
            }
        }
    );
};

class UserList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        Meteor.call("getUserItem",  Meteor.userId(), function(error, result){
            if(error){
                console.log(error.reason);
                return;
            }
            // do something with result
            // console.log(result);
            // this.props.dataToStore(result);
            this.props.loadUserItems(result);

        }.bind(this));

    }

    clickDelete = (itemId) => {
        console.log('Deleting initiated for:' + itemId)
        Meteor.call("deleteOneItem",itemId, (err)=> {
            if (err) {
                console.log(err.reason)
                console.log('Failed to delete the item, id: '+itemId )
            } else {
                Meteor.call("getUserItem",  Meteor.userId(), function(error, result){
                    if(error){
                        console.log(error.reason);
                        console.log('Failed to get user data after deleting an item')
                        return;
                    }
                    console.log("Re-fetching the user data")
                    this.props.loadUserItems(result);

                }.bind(this))
            }
        });
    }

    clickEdit = (item) => {

        this.props.showIndex(item);
        console.log(item);
    }


    render() {
        const { classes } = this.props;
        return (
        <div>
            <br/>
            <div className={"centerAndWidth"}>
                <h3>Welcome Back,  {Meteor.user().profile.name}</h3>
                <div>Your current postings:</div>
                <GridList cellHeight={"auto"}  cols={3} spacing={25}>
                    {this.props.itemArray.map(item => (
                        <GridListTile key={item._id}>
                            <Paper className={classes.paper} >
                                <div>
                                    {(item.imagePreviewUrl !== '') ?
                                        <img src={item.imagePreviewUrl} width={"150"} height={"150"}/> :
                                        <img src={item.imagePreviewUrl} width={"150"} height={"150"}/>
                                    }
                                </div>
                                <div className={[classes.textPart, "preventOverFlow"].join(" ")} >
                                    <div><strong>Item: </strong>{(item.title)}</div>
                                    <div><strong>Price:</strong> ${item.price}</div>
                                    <div><strong>Category:</strong> {item.category}</div>
                                    <div><strong>Description:</strong> {(item.description)}</div>
                                    <div><strong>Uploaded Date:</strong> {item.date}</div>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <Grid item xs={8} >
                                        <EditIcon className={classes.icon} onClick = {()=>this.clickEdit(item) } />
                                        <DeleteForeverIcon className={classes.iconDelete} onClick = {()=>this.clickDelete(item._id)} />
                                    </Grid>
                                </div>
                                <div>{this.props.toPop && <Popup/>}</div>

                            </Paper>
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      showIndex: (item) => {
        dispatch(popUpItem(item));
      },
      loadUserItems: (result) => {
          dispatch(loadUserItems(result));
    }
}
}


const mapStateToProps = (state) => {
    return { itemArray: state.userItemProcess, toPop: state.itemProcess.popUp};
    
}
//export default connect(mapStateToProps,{loadUserItems})(UserList);
//export const styles= withStyles(styles)(UserList);
//export default withStyles(styles)(UserList);

export default compose (
    withStyles(styles),
    connect(mapStateToProps,mapDispatchToProps)
) (UserList)





