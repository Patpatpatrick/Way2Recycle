import React, { Component } from 'react';
import Categories from "./Categories";
import List from "./List";

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from './style/NavStyle';
import SearchBar from './SearchBar.jsx';

export default function home() {
  const classes = useStyles();

    return (
       <React.Fragment>
       <CssBaseline />
      
       <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        {/* <Categories categories={['Car', 'Rental', 'Textbook', 'Computer']} postion = "static" color = "default" elevation={0}
        className={classes.categories}>
        </Categories> */}

        <List variant="h6" postion = "static" color = "default" elevation={0} className={classes.list}>
          
        </List>
  
      </React.Fragment>
    );
}


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