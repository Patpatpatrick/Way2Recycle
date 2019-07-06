import React from 'react';
// import ClearOne from '../ClearOne';
import DeleteOne from './DeleteOne';
// import SeeOne from './ViewOneItem';
import { connect } from 'react-redux';
// import useStyles from '../../style/itemTableStyle';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditOne from "./EditOne";
import  {loadUserItems} from "../../actions/index"

class UserList extends React.Component {

    componentWillMount() {
        Meteor.call("getUserItem",  "ceSRZG55GELRgaNCz", function(error, result){
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

    render() {
        const classes = useStyles;
        return (
            <Paper className={classes.root}>
                <h1>Welcome Back {Meteor.user().profile.name}</h1>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Item Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Added Date</TableCell>
                            <TableCell align="right">Operation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.itemArray.map( (item, idx) => {
                            return (
                                <TableRow key={idx}>
                                    <TableCell component="th" scope="row">
                                        {item.itemname}
                                    </TableCell>
                                    <TableCell align="right">{item.price}</TableCell>
                                    <TableCell align="right">{item.category}</TableCell>
                                    <TableCell align="left">{item.description}</TableCell>
                                    <TableCell align="right">{item.date.toString()}</TableCell>
                                    {/*<TableCell align="right"><ClearOne index = {idx}/><SeeOne index = {idx}/></TableCell>*/}
                                    <TableCell align="right"><DeleteOne index = {idx}/></TableCell>
                                    <TableCell align="right"><EditOne index = {idx}/></TableCell>
                                </TableRow>
                            )
                        })
                        }
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
const mapStateToProps = (state) => {
    return { itemArray: state.userItemProcess};
}
export default connect(mapStateToProps,{loadUserItems})(UserList);