import React from 'react';
import { connect } from 'react-redux';
import List_ele from './List_ele';
class List extends React.Component { 
 
	render() {
        return (
            <div  className="items">
                {this.props.itemArray.filter((item) => item.category === this.props.chosenCategory).map( (item, idx) => {
                    return (
                        <div>
                            <List_ele element = {item} index = {idx} key = {item.itemname + idx}/>
                        </div>
                    )
                    })
                }
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