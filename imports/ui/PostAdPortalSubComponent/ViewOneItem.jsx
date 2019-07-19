import React from 'react';
import { connect } from 'react-redux';
import { popUpItem}  from '../../actions';
import Button from '@material-ui/core/Button';
import Popup from './PopUp';
import { updatePostedItem} from '../../actions';

class SeeOne extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        // console.log(this.props.detail);
        console.log(this.props);
        this.props.showIndex(this.props.index);
        console.log(this.props.index);
        this.props.updateIndex(this.props.index);
        console.log(this.props.index);
        Meteor.call('getOneItem', this.props.index);
        console.log('get one item')
    }

	render() {
        return (
            <div>
                <Button type="button" onClick = {this.handleClick} id={this.props.index + 'View'}>
                
                <div>{this.props.toPop && <Popup index={this.props.index}/>}</div>
                Update
                </Button>
                
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
      },
      updateIndex: (index) => {
        dispatch(updatePostedItem(index))
      }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SeeOne);