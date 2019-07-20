import React from 'react';
import { connect } from 'react-redux';
import CarDetail from './DetailUI/CarDetail';
import BookDetail from './DetailUI/BookDetail';
import ApplianceDetail from './DetailUI/ApplianceDetail';
import FurnitureDetail from './DetailUI/FurnitureDetail';
import ComputerDetail from './DetailUI/ComputerDetail';
import OtherCategoryDetail from './DetailUI/OtherCategoryDetail';

class PostDetailUnderOneCategory extends React.Component {
    constructor(props) {
        super(props);
        this.conditionalRender = this.conditionalRender.bind(this);
    }
    conditionalRender(){
        if (this.props.unposted.category === "Car") {
            return (<CarDetail/>);
        } else if (this.props.unposted.category === "Book") {
            return (<BookDetail/>);
        } else if (this.props.unposted.category === "Appliance") {
            return (<ApplianceDetail/>);
        } else if (this.props.unposted.category === "Furniture") {
            return (<FurnitureDetail/>);
        } else if (this.props.unposted.category === "Computer") {
            return (<ComputerDetail/>);
        } else if (this.props.unposted.category === "Other") {
            return (<OtherCategoryDetail/>);
        } 
    }
	render() {
        return (
            <div>
                {this.conditionalRender()}
            </div>   
        );
    }
}
const mapStateToProps = (state) => {
    return { 
        unposted: state.postItemReducer,
    };
}
export default connect(mapStateToProps, null)(PostDetailUnderOneCategory);