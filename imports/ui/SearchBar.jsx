import React from 'react';
import useStyles from './style/SearchBarStyle';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class SignUp extends React.Component{
  render(){
    const classes = useStyles;
    return (
      <React.Fragment>           
          
          <div className={classes.search}>
              <TextField
                variant="outlined"
                fullWidth
                id="search"
                label="Search..."
                name="search"
                type=''
                autoComplete="search"
              />
              {/* <InputBase
              placeholder="Search…"
              classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
              /> */}
          </div>
          <Button href="/login" color="primary" variant="outlined" className={classes.searchBtn} >
            <SearchIcon />
          </Button>
        </React.Fragment>  
        );

  }
  
}
