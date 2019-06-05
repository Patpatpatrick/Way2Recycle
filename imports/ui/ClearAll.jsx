import React from 'react';
import { connect } from 'react-redux';
import { clearAllMessages}  from '../actions/index.js';
import './style.css'
class ClearAll extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.cAll();
    }
	render() {
        return (
            <center>
                <button type="del" onClick = {this.handleClick} id="ClearAll">ClearAll</button>
            </center>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      cAll: () => {
        dispatch(clearAllMessages());
      }
    }
};
export default connect(null, mapDispatchToProps)(ClearAll);