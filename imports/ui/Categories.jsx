import React, {Component} from 'react';
import Category_ele from "./Category_ele";

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="row">
                {this.props.categories.map(ele => <Category_ele title={ele}/>)}
            </div>);
    }
}

export default Categories;