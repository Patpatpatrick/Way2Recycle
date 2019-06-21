import React from 'react';
import ClearOne from './PostAdPortalSubComponent/ClearOne';
import SeeOne from './PostAdPortalSubComponent/ViewOneItem';
class List_ele extends Component {

    render() {
        return (
            <div className="row">

                <div className="col-md-3">
                    <a href="#">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/200X200" alt=""/>
                    </a>
                </div>

                <div className="col-md-5">
                    <div className="row">
                        <div className="col-md-10">
                            <a href="#">                        <h5>{this.props.element.itemname}</h5>
                            </a>
                        </div>

                    <div className="col-md-2">
                        <h4>{'$'+ this.props.element.price}</h4>
                        <h4>{this.props.element.category}</h4>
                    </div>

                </div>

                    <p>{this.props.element.description}</p>
                    {/*<a className="btn btn-primary" href="#">View Product</a>*/}

                </div>
            </div>
        );
    }
    }

export default List_ele;
