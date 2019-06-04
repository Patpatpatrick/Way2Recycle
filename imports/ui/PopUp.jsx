import React from 'react';
import './style.css'
import { connect } from 'react-redux';
import { closePopeditem } from '../actions';


class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
                <div>from : {this.props.item.itemname}</div>
                <div>to : {this.props.item.price}</div>
                <div>category: {this.props.item.category}</div>
                <div>content: {this.props.item.description}</div>
                <div>date: {this.props.item.date.toString()}</div>
                <button type = 'close' onClick={this.props.closePopeditem}>close me</button>
          </div>
        </div>
      );
    }
}
const mapStateToProps = (state) => {
    return { 
        toPopThisIndex : state.itemProcess.popUpitemIndex,
        item: state.itemProcess.itemArray[state.itemProcess.popUpitemIndex],
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
      closePopeditem: () => {
        dispatch(closePopeditem());
      }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Popup);


