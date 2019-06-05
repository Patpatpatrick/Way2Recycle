import React from 'react';
import { connect } from 'react-redux';
import { clearMessage}  from '../actions/index.js';
import './style.css'
class ClearOne extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.cOne(this.props.index);
    }
	render() {
        return (
            <button type="del" onClick = {this.handleClick} id={this.props.index + 'Clear'}>Clear</button>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      cOne: (index) => {
        dispatch(clearMessage(index));
      }
    }
};
export default connect(null, mapDispatchToProps)(ClearOne);