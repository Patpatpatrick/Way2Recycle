import React from 'react';
import useStyles from './style/SearchBarStyle';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


export default function SearchBar() {
  const classes = useStyles();

  return (
        <React.Fragment>           
            <div className={classes.search}>
                <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'Search' }}
                />
            </div>

            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </React.Fragment>  
          );
}
