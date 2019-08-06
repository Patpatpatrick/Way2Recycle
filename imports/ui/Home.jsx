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

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         items: [],
    //     };
    // }
    //
    // componentWillMount() {
    //     console.log("componentWillMount begin")
    //     Meteor.call('getItems', (error, result) => {
    //         if (error) {
    //             console.log(error.reason);
    //             return;
    //         }
    //         // do something with result
    //         // console.log(result);
    //         this.setState({
    //             items: [...result]
    //         })
    //     });
    //
    // }

    componentDidMount() {
        // this.props.dataToStore();


        // Meteor.call('mySearch', "Bose", function(error, result) {
        //     // console.log(result);
        //     // console.log(error);
        //     console.log(result);
        //
        // }.bind(this));


        Meteor.call('getItems', function (err, result) {
            if (err) {
                console.log("error");
            }
            // console.log(result);
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
                <List/>
                <Categories/>
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

// export default function Nav() {
//   const classes = useStyles();

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
//         <Toolbar className={classes.toolbar}>
//           <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
//             Way2Recycle
//           </Typography>
//           <SearchBar/>
//           <nav>
//             <Link variant="button" color="textPrimary" href="/" className={classes.link}>
//               Home
//             </Link>
//             <Link variant="button" color="textPrimary" href="/postAd" className={classes.link}>
//               Post ad
//             </Link>
//             <Link variant="button" color="textPrimary" href="/group" className={classes.link}>
//               Group
//             </Link>
//           </nav>
//           <Button href="/login" color="primary" variant="outlined" className={classes.link}>
//             Login
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
//   );
// }