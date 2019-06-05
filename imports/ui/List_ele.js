import React, {Component} from 'react';

class List_ele extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

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
                            <a href="#">                        <h5>Equipment Innovations PC-14 Plasma cutter NEW with Warranty</h5>
                            </a>
                        </div>

                        <div className="col-md-2">
                        <h4>$500</h4>
                        </div>

                    </div>

                    <p>PC-14 Plasma Cutter Severs 3/4inch Check out our website for DEMO videos and specs www.rjrequipmentinnovations.com $600 plus tax, shipping is a flat rate of $50 anywhere in Canada Ships in 1 day and takes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos error ex harum id ipsum nihil perspiciatis reprehenderit unde voluptates. Aut, doloremque ea in inventore iste nam perspiciatis quae quis?</p>
                    {/*<a className="btn btn-primary" href="#">View Product</a>*/}

                </div>

            </div>
        );
    }
    }

    export default List_ele;