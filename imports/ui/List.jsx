import React from 'react';
import { connect } from 'react-redux';
import List_ele from './List_ele';
import Typography from '@material-ui/core/Typography';
import {Meteor} from "meteor/meteor";

class List extends React.Component { 
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    
    handleClick(){
        Meteor.call('getItemsByParam', this.props.chosenCategory);
        console.log();
    }
    
	render() {
        return (
            <div className="items">
                <Typography variant="h4" marked="center" align="center" component="h2">
                    {this.props.chosenCategory}
                </Typography>
                <span className="Typography-markedH4Center-183"></span>
                <br/>
                <div align="center">
                    {this.props.itemArray.filter((item) => item.category === this.props.chosenCategory).map( (item, idx) => {
                        console.log(item);
                        return (
                            <div key = {item.itemname + '_'+idx}>
                                <List_ele element = {item} index = {idx}/>
                            </div>
                        )
                        })
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { 
        itemArray: state.homePageReducer.itemArray,
        chosenCategory: state.homePageReducer.category,

    };
}

export default connect(mapStateToProps,null)(List);