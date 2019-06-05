import React, {Component} from 'react';

class Category_ele extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:''
        }
    }

    render() {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="#">{this.props.title}</a>
                        </h4>
                        {/*<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam*/}
                        {/*    aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,*/}
                        {/*    dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>*/}
                    </div>
                </div>
            </div>
    );
    }
    }

    export default Category_ele;