import React, {Component} from 'react';
import List_ele from "./List_ele";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <List_ele/>
                <List_ele/>
                <List_ele/>
            </div>);
    }
}

export default List;