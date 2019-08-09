import React from 'react';
import { connect } from 'react-redux';
import { popUpItem}  from '../../actions';
import Button from '@material-ui/core/Button';
import Popup from '../utilitycomponent/PopUpForItemBoxDialog';
import { popUpItemInItemsBox} from '../../actions';

class SeeOne extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.showIndex(this.props.index);
    }

	render() {
        return (
            <div>
                <Button type="button" onClick = {this.handleClick} id={this.props.index + 'View'}>
                Show More
                </Button>
                {this.props.toPop && <Popup/>}
            </div>   
        );
    }
}
const mapStateToProps = (state) => {
    return { 
        toPop: state.itemBoxReducer.shouldPopUpInitemBox,
        liked: state.itemBoxReducer.liked,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
      showIndex: (index) => {
        dispatch(popUpItemInItemsBox(index));
      }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SeeOne);