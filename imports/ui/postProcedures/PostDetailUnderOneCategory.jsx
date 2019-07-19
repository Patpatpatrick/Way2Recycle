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
        console.log(this.props.category)
        return (<p>fff</p>)
        // if (this.props.unsubmitteditem.category === "Car") {
        //     return (<CarDetail/>);
        // } else if (this.props.unsubmitteditem.category === "Book") {
        //     return (<BookDetail/>);
        // } else if (this.props.unsubmitteditem.category === "Appliance") {
        //     return (<ApplianceDetail/>);
        // } else if (this.props.unsubmitteditem.category === "Furniture") {
        //     return (<FurnitureDetail/>);
        // } else if (this.props.unsubmitteditem.category === "Computer") {
        //     return (<ComputerDetail/>);
        // } else if (this.props.unsubmitteditem.category === "Other") {
        //     return (<OtherCategoryDetail/>);
        // } 
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
        category: state.itemProcess.unsubmitteditem.category,
    };
}
export default connect(mapStateToProps, null)(PostDetailUnderOneCategory);