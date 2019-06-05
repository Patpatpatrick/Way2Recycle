import React from 'react';
import { connect } from 'react-redux';
import { popUpItem}  from '../../actions';
import Popup from './PopUp'
class SeeOne extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log(this.props.index);
        this.props.showIndex(this.props.index);
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
        toPop: state.itemProcess.popUp,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
      showIndex: (index) => {
        dispatch(popUpItem(index));
      }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SeeOne);