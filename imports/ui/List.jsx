import React from 'react';

import { connect } from 'react-redux';
import List_ele from './List_ele';
class List extends React.Component { 
 
	render() {
        return (
            <div  className="items">		
                {this.props.itemArray.map( (item, idx) => {
                    return (
                        <div>
                            <List_ele style ={{alignItems: 'center'}} element = {item} index = {idx}/>
                        </div>
                    )
                    })
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { itemArray: state.itemProcess.itemArray};
}
export default connect(mapStateToProps,null)(List);