import React from 'react';
import { connect } from 'react-redux';

import ItemDetail from './DetailUI/ItemDetail';

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