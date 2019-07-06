import React from 'react';
import ClearOne from './ClearOne';
import SeeOne from './ViewOneItem';
import { connect } from 'react-redux';
class ItemsBox extends React.Component { 
 
	render() {
        return (
            <div className="items">		
                <table id = "itemtable" style={{"wordWrap":"break-word","wordBreak":"break-all"}}>
                    <tbody>
                        <tr id = "itemtableHeader">
                            <th style={{width: '50px'}}>Name</th>
                            <th style={{width: '50px'}}>Price</th>
                            <th style={{width: '50px'}}>Category</th>
                            <th>Description</th>
                            <th style={{width: '190px'}} >Added Date</th>
                            <th style={{width: '20px'}}>Operation</th>
                        </tr>
                        {this.props.itemArray.map( (item, idx) => {
                            return (
                                <tr key = {idx}>
                                    <td>{item.itemname}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                    <td>{item.description}</td>
                                    <td>{item.date.toString()}</td>
                                    <td><ClearOne index = {item._id}/><SeeOne index = {idx}/></td>
                                </tr>
                            )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { itemArray: state.itemProcess.itemArray};
}
export default connect(mapStateToProps,null)(ItemsBox);