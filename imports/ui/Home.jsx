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

class home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }

    componentWillMount() {
        console.log("componentWillMount begin")
        Meteor.call('getItems', (error, result) => {
            if (error) {
                console.log(error.reason);
                return;
            }
            // do something with result
            // console.log(result);
            this.setState({
                items: [...result]
            })
        });

    }

    componentDidMount() {
        // console.log(Meteor.call('getItems'));
        this.props.fetchData([{
            itemname: 'I am a BMW!',
            price: 20000,
            category: 'Car',
            description: 'PC-14 Plasma Cutter Severs 3/4inch Check out our website for DEMO videos and specs www.rjrequipmentinnovations.com $600 plus tax, shipping is a flat rate of $50 anywhere in Canada Ships in 1 day and takes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos error ex harum id ipsum nihil perspiciatis reprehenderit unde voluptates. Aut, doloremque ea in inventore iste nam perspiciatis quae quis?',
            date: 'Mon Jun 03 2019 01:46:51 GMT-0700 (PDT)'
        }, {
            itemname: 'I am a Honda!',
            price: 10000,
            category: 'Car',
            description: 'PC-14 Plasma Cutter Severs 3/4inch Check out our website for DEMO videos and specs www.rjrequipmentinnovations.com $600 plus tax, shipping is a flat rate of $50 anywhere in Canada Ships in 1 day and takes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos error ex harum id ipsum nihil perspiciatis reprehenderit unde voluptates. Aut, doloremque ea in inventore iste nam perspiciatis quae quis?',
            date: 'Mon Jun 03 2019 01:46:51 GMT-0700 (PDT)'
        }, {
            itemname: 'I am a book!',
            price: 10,
            category: 'Textbook',
            description: 'PC-14 Plasma Cutter Severs 3/4inch Check out our website for DEMO videos and specs www.rjrequipmentinnovations.com $600 plus tax, shipping is a flat rate of $50 anywhere in Canada Ships in 1 day and takes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos error ex harum id ipsum nihil perspiciatis reprehenderit unde voluptates. Aut, doloremque ea in inventore iste nam perspiciatis quae quis?',
            date: 'Mon Jun 03 2019 01:46:51 GMT-0700 (PDT)'
        }, {
            itemname: 'I am an MacBook!',
            price: 1000,
            category: 'Computer',
            description: 'PC-14 Plasma Cutter Severs 3/4inch Check out our website for DEMO videos and specs www.rjrequipmentinnovations.com $600 plus tax, shipping is a flat rate of $50 anywhere in Canada Ships in 1 day and takes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos error ex harum id ipsum nihil perspiciatis reprehenderit unde voluptates. Aut, doloremque ea in inventore iste nam perspiciatis quae quis?',
            date: 'Mon Jun 03 2019 01:46:51 GMT-0700 (PDT)'
        }, {
            itemname: 'I am an MacBook!',
            price: 2000,
            category: 'Computer',
            description: 'PC-14 Plasma Cutter Severs 3/4inch Check out our website for DEMO videos and specs www.rjrequipmentinnovations.com $600 plus tax, shipping is a flat rate of $50 anywhere in Canada Ships in 1 day and takes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos error ex harum id ipsum nihil perspiciatis reprehenderit unde voluptates. Aut, doloremque ea in inventore iste nam perspiciatis quae quis?',
            date: 'Mon Jun 03 2019 01:46:51 GMT-0700 (PDT)'
        }, {
            itemname: 'I am an MacBook!',
            price: 3000,
            category: 'Computer',
            description: 'PC-14 Plasma Cutter Severs 3/4inch Check out our website for DEMO videos and specs www.rjrequipmentinnovations.com $600 plus tax, shipping is a flat rate of $50 anywhere in Canada Ships in 1 day and takes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos error ex harum id ipsum nihil perspiciatis reprehenderit unde voluptates. Aut, doloremque ea in inventore iste nam perspiciatis quae quis?',
            date: 'Mon Jun 03 2019 01:46:51 GMT-0700 (PDT)'
        }
        ]);
    }


    render() {
        const listItems = this.state.items.map((item) =>
            <li>{item._id}</li>
        );

        return (
            <React.Fragment>
                <ul>{listItems}</ul>


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
        fetchData: (items) => {
            dispatch(assignItemsToStoreItemArray(items));
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