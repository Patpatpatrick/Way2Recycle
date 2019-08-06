import React from 'react';
import { connect } from 'react-redux';
import List_ele from './List_ele';
import Typography from '@material-ui/core/Typography';
import { Fade } from 'react-slideshow-image';
import {Meteor} from "meteor/meteor";

const fadeImages = [
    './IMG_20190428_171852.jpg',
    './IMG_20190428_171854.jpg',
    './IMG_20190428_171901.jpg'
  ];
  
  const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: false,
    indicators: true
  }
class List extends React.Component { 
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    
    handleClick(){
        Meteor.call('getItemsByParam', this.props.chosenCategory);
        console.log();
    }
    
	render() {
        return (
            <div className="items">
                <Typography variant="h4" marked="center" align="center" component="h2">
                   {"Hot "+this.props.chosenCategory}
                </Typography>
                <Fade {...fadeProperties}>
                    {this.props.itemArray.filter((item) => item.category === this.props.chosenCategory).map( (item, idx) => {
                        console.log(item);
                        return (
                            <div className="each-fade">
                                <div className="image-container">
                                <img src={item.imagePreviewUrl} />
                                </div>
                                <h2>{item.title}</h2>
                            </div>
                        )
                        })
                    }
                </Fade>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { 
        itemArray: state.homePageReducer.itemArray,
        chosenCategory: state.homePageReducer.category,

    };
}

export default connect(mapStateToProps,null)(List);