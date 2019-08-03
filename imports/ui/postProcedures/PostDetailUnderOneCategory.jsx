import React from 'react';
import { connect } from 'react-redux';
import CarDetail from './DetailUI/CarDetail';
import BookDetail from './DetailUI/BookDetail';
import ItemDetail from './DetailUI/ItemDetail';
import FurnitureDetail from './DetailUI/FurnitureDetail';
import ComputerDetail from './DetailUI/ComputerDetail';
import OtherCategoryDetail from './DetailUI/OtherCategoryDetail';

class PostDetailUnderOneCategory extends React.Component {
    constructor(props) {
        super(props);
        this.conditionalRender = this.conditionalRender.bind(this);
    }
    conditionalRender(){
        if (this.props.unposted.category !== "") {
            return (<ItemDetail/>);
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