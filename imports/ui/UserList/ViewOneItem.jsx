import React from 'react';
import { connect } from 'react-redux';
import { popUpItem}  from '../../actions';
import Button from '@material-ui/core/Button';
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
                <Button type="view" onClick = {this.handleClick} id={this.props.index + 'View'}>ViewInPopUp</Button>
                {this.props.toPop && <Popup/>}
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