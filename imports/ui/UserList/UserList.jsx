import React from 'react';
// import ClearOne from '../ClearOne';
import DeleteOne from './DeleteOne';
// import SeeOne from './ViewOneItem';
import {connect} from 'react-redux';
// import useStyles from '../../style/itemTableStyle';

import Paper from '@material-ui/core/Paper';
import {loadUserItems} from "../../actions/index"

import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import {compose} from "redux";
import './userList.css'
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import {grey, red} from "@material-ui/core/colors";
import {popUpItem} from '../../actions';
import Button from '@material-ui/core/Button';
import Popup from '../utilitycomponent/PopUpForUserEdit';

import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


const styles = theme => {
    return ({
            root: {},
            paper: {
                padding: theme.spacing(1),
                textAlign: 'center',
                color: theme.palette.text.primary,
                backgroundColor: grey[200]
            },
            icon: {
                margin: theme.spacing(1),
                fontSize: 32,
            },
            iconDelete: {
                margin: theme.spacing(1),
                fontSize: 32,
                color: red[800]
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
        Meteor.call("getUserItem", Meteor.userId(), function (error, result) {
            if (error) {
                console.log(error.reason);
                return;
            }
            this.props.loadUserItems(result);

        }.bind(this));

    }

    componentDidUpdate(prevProps) {
        if (this.props.toPop !== prevProps.toPop) {
            Meteor.call("getUserItem", Meteor.userId(), function (error, result) {
                if (error) {
                    console.log(error.reason);
                    return;
                }
                this.props.loadUserItems(result);
            }.bind(this))
        }
    }

    clickDelete = (itemId) => {
        Meteor.call("deleteOneItem", itemId, (err) => {
            if (err) {
                console.log(err.reason)
                console.log('Failed to delete the item, id: ' + itemId)
            } else {
                Meteor.call("getUserItem", Meteor.userId(), function (error, result) {
                    if (error) {
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
    }


    formatDate = (date) => {
        return new Date(date).toISOString().replace('-', '/').split('T')[0].replace('-', '/');
    }


    render() {
        const {classes} = this.props;
        let likesNum = this.props.popUp._id;
        return (
            <div>
                <br/>
                <div className={"centerAndWidth"}>
                    <h3>Welcome Back, {Meteor.user().profile.name}</h3>

                    {(this.props.itemArray.length === 0) ?
                        <div style={{marginTop: 50, fontSize: 20, textAlign: "center"}}><b>You do not have any postings
                            yet!</b></div> :
                        <div style={{marginTop: 50, fontSize: 20, textAlign: "center"}}><b>Your current postings:</b>
                        </div>
                    }
                    <GridList cellHeight={"auto"} cols={3} spacing={25}>
                        {this.props.itemArray.map(item => (
                            <GridListTile key={item._id}>
                                <Paper className={classes.paper}>
                                    <div>
                                        {(item.imagePreviewUrl !== '') ?
                                            <img src={item.imagePreviewUrl} width={"150"} height={"150"}/> :
                                            <img src={item.imagePreviewUrl} width={"150"} height={"150"}/>
                                        }
                                    </div>
                                    <div className={[classes.textPart, "preventOverFlow"].join(" ")}>
                                        <div><strong>Item: </strong>{(item.title)}</div>
                                        <div><strong>Price:</strong> ${item.price}</div>
                                        <div><strong>Category:</strong> {item.category}</div>
                                        <div><strong>Uploaded Date:</strong> {this.formatDate(item.date)}</div>
                                        <div><strong>Description:</strong> {(item.description)}</div>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                        <Grid item xs={8}>
                                            <EditIcon className={classes.icon} onClick={() => this.clickEdit(item)}/>
                                            <DeleteForeverIcon className={classes.iconDelete}
                                                               onClick={() => this.clickDelete(item._id)}/>
                                            <p>{item.like.length} likes</p>
                                            <FormControlLabel label={item.like.length}
                                                              control={<Checkbox icon={<FavoriteBorder/>}
                                                                                 checkedIcon={<Favorite/>}
                                                                                 checked={true}/>}
                                                              label=""/>


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
    return {
        itemArray: state.userItemReducer,
        toPop: state.userEditReducer.popUp,
        popUp: state.userEditReducer.itemForPopUp
    };

}


export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(UserList)





