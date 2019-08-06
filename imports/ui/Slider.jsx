import React from 'react';
import { Fade } from 'react-slideshow-image';
import "./Slider.css";
import {connect} from "react-redux";

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
class Slideshow extends React.Component{
      render() {
        var array = this.props.itemArray.filter((item) => item.category === this.props.chosenCategory);
        console.log(this.props.itemArray);
        return (    
            <div className="slide-container">
            <Fade {...fadeProperties}>
              <div className="each-fade">
                <div className="image-container">
                  <img src={array[0].imagePreviewUrl} />
                </div>
                <h2>First Slide</h2>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={array[1].imagePreviewUrl} />
                </div>
                <h2>Second Slide</h2>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={array[2].imagePreviewUrl} />
                </div>
                <h2>Third Slide</h2>
              </div>
              {/* {this.props.itemArray.filter((item) => item.category === this.props.chosenCategory).map( (item, idx) => {
                    console.log("1");
                    return (
                        <div className="each-fade">
                            <div className="image-container">
                            <img src={item.imagePreviewUrl} />
                            </div>
                            <h2>{item.itemname}</h2>
                        </div> 
                    )
                    })
                } */}
            </Fade>
          </div>

        );
    }

}

const mapStateToProps = (state) => {
    return { 
        chosenCategory: state.homePageReducer.category,
        itemArray: state.homePageReducer.itemArray
    };
}
export default connect(mapStateToProps,null)(Slideshow);


