import React from 'react';
import useStyles from './style/SearchBarStyle';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import {changeChoiceOnNav, searchFromNavBar, searchWordFromNav} from "../actions";

class SearchBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            inputString:""
        }
    }

    changeInputString = (event) => {
        this.setState({inputString:event.target.value})
    }

    queryByText = () => {
        //alert(this.state.inputString)
        let queryParam = this.state.inputString
        Meteor.call('mySearch',queryParam, function (err, result) {
            if(err){
                console.log("failResetByMeteor querying items by keyword");
            }
            //this.props.dataToStore(result);
            this.props.searchFromNavBar(true)
            this.props.searchWordFromNav(this.state.inputString)
            this.props.changeChoiceOnNav('viewPost')

        }.bind(this));
    }

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
                autoComplete="search"
                type={""}
                onChange={this.changeInputString}
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
          <Button  color="primary" variant="outlined" className={classes.searchBtn} onClick = {()=> this.queryByText()}
                   >
            <SearchIcon />
          </Button>
        </React.Fragment>  
        );
  }
  
}

const mapDispatchToProps = (dispatch) => {
    return {
        /*dataToStore: (boolean) => {
            dispatch(searchFromNavBar(result));
        }*/
        searchFromNavBar: (text) => dispatch(searchFromNavBar(text)),
        changeChoiceOnNav: (choice) => dispatch(changeChoiceOnNav(choice)),
        searchWordFromNav:(string) => dispatch(searchWordFromNav(string))

    }
};

const mapStateToProps = (state) => {
    return { itemArray: state.itemBoxReducer.itemArray,
        isSearchedFromNavBar: state.isSearchedFromNavBar,
        renderChoiceAssigner: state.renderChoiceAssigner
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
