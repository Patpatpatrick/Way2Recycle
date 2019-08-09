import React from 'react';
import {connect} from 'react-redux';
import List_ele from './List_ele';
import Typography from '@material-ui/core/Typography';
import {Meteor} from "meteor/meteor";
import SlideComponent from './Slider.jsx';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        Meteor.call('getItemsByParam', this.props.chosenCategory);
    }

    render() {
        return (
            <div className="items">
                <Typography variant="h4" marked="center" align="center" component="h2">
                    {this.props.chosenCategory}
                </Typography>
                <span className="Typography-markedH4Center-183"></span>
                <br/>
                <div className="slide-container"></div>
                <SlideComponent/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        chosenCategory: state.homePageReducer.category,
    };
}

export default connect(mapStateToProps, null)(List);