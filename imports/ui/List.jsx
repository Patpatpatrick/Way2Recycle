import React from 'react';
import { connect } from 'react-redux';
import List_ele from './List_ele';
import Typography from '@material-ui/core/Typography';

class List extends React.Component { 
    
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
                        return (
                            <div>
                                <List_ele element = {item} index = {idx} key = {item.itemname + idx}/>
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
        itemArray: state.itemProcess.itemArray,
        chosenCategory: state.itemProcess.chosenCategory
    };
}
export default connect(mapStateToProps,null)(List);