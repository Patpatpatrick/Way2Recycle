import React, {Component} from 'react';
import Categories from "./Categories/Categories";
import List from "./List";
import {connect} from 'react-redux';
import {assignItemsToStoreItemArray} from '../actions'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from './style/NavStyle';
import UserList from "./UserList/UserList.jsx";
import {Meteor} from "meteor/meteor";

class home extends Component {

    componentDidMount() {

        Meteor.call('getItems', function (err, result) {
            if (err) {
            }
            this.props.dataToStore(result);
        }.bind(this));
    }


    render() {

        return (
            <React.Fragment>


                <CssBaseline/>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <Categories/>
                <List/>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dataToStore: (result) => {
            dispatch(assignItemsToStoreItemArray(result));
        }
    }
};
export default connect(null, mapDispatchToProps)(home);