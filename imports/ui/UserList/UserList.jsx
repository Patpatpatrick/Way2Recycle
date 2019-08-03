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
import { popUpItem}  from '../../actions';
import Button from '@material-ui/core/Button';
import Popup from '../utilitycomponent/PopUpForUserEdit';

import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';


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

    componentDidUpdate(prevProps) {
        if (this.props.toPop !== prevProps.toPop) {
            Meteor.call("getUserItem",  Meteor.userId(), function(error, result){
                if(error){
                    console.log(error.reason);
                    return;
                }
                this.props.loadUserItems(result);
            }.bind(this))
        }
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

        this.props.showItem(item);
        console.log(item);
    }


    formatDate = (date) => {
       return new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/');
    }


    render() {
        const { classes } = this.props;
        let likesNum = this.props.popUp._id;
        console.log(likesNum);
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
                                    <div><strong>Uploaded Date:</strong> {this.formatDate(item.date)}</div>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <Grid item xs={8} >
                                        <EditIcon className={classes.icon} onClick = {()=>this.clickEdit(item) } />
                                        <DeleteForeverIcon className={classes.iconDelete} onClick = {()=>this.clickDelete(item._id)} />
                                            <p>{item.like.length} likes</p>
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                        
                                    </Grid>
                                </div>
                                {this.props.toPop && <Popup/>}

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
      showItem: (item) => {
        dispatch(popUpItem(item));
      },
      loadUserItems: (result) => {
          dispatch(loadUserItems(result));
    }
}
}


const mapStateToProps = (state) => {
    return { itemArray: state.userItemReducer, toPop: state.userEditReducer.popUp, popUp:state.userEditReducer.itemForPopUp};
    
}
//export default connect(mapStateToProps,{loadUserItems})(UserList);
//export const styles= withStyles(styles)(UserList);
//export default withStyles(styles)(UserList);

export default compose (
    withStyles(styles),
    connect(mapStateToProps,mapDispatchToProps)
) (UserList)





