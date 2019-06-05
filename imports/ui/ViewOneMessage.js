import React from 'react';
import { connect } from 'react-redux';
import { popUpMessage}  from '../actions/index.js';
import './style.css'
import Popup from './PopUp'
class SeeOne extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log(this.props.index);
        this.props.showIndexMessage(this.props.index);
    }
	render() {
        return (
            <div>
                <button type="view" onClick = {this.handleClick} id={this.props.index + 'View'}>ViewInPopUp</button>
                {this.props.toPop && <Popup />}
            </div>   
        );
    }
}
const mapStateToProps = (state) => {
    return { 
        toPop: state.messageProcess.popUp,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
      showIndexMessage: (index) => {
        dispatch(popUpMessage(index));
      }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SeeOne);