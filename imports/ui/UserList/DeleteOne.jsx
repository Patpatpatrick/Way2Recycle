import React from 'react';
import {connect} from 'react-redux';
import {clearItem} from '../../actions/index.js';
import Button from '@material-ui/core/Button';

class DeleteOne extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert("delete");
    }

    render() {
        return (
            <Button type="del" onClick={this.handleClick} id={this.props.index + 'Clear'}>Delete</Button>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cOne: (index) => {
            dispatch(clearItem(index));
        }
    }
};
export default connect(null, mapDispatchToProps)(DeleteOne);