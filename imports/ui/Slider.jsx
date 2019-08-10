import React from 'react';
import {Fade} from 'react-slideshow-image';
import "./Slider.css";
import {connect} from "react-redux";

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: false,
    indicators: true,
    onChange: (oldIndex, newIndex) => {
    }
}

class Slideshow extends React.Component {
    render() {
        var array = this.props.itemArray.filter((item) => item.category === this.props.chosenCategory);

        if (array.length < 3) {
            return (<div>
            </div>)
        } else
            return (
                <div className="slide-container">
                    <Fade {...fadeProperties}>
                        <div className="each-fade">
                            <div className="image-container">
                                <img src={array[0].imagePreviewUrl}/>
                            </div>
                            <h2>{array[0].title}</h2>
                        </div>
                        <div className="each-fade">
                            <div className="image-container">
                                <img src={array[1].imagePreviewUrl}/>
                            </div>
                            <h2>{array[1].title}</h2>
                        </div>
                        <div className="each-fade">
                            <div className="image-container">
                                <img src={array[2].imagePreviewUrl}/>
                            </div>
                            <h2>{array[2].title}</h2>
                        </div>
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
export default connect(mapStateToProps, null)(Slideshow);


