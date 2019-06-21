import React, {Component} from 'react';

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from './Typography';

// class Category_ele extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title:''
//         }
//     }

//     render() {
//         return (
//             <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
//                 <div className="card h-100">
//                     <div className="card-body">
//                         <h4 className="card-title">
//                             <a href="#">{this.props.title}</a>
//                         </h4>
//                         {/*<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam*/}
//                         {/*    aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,*/}
//                         {/*    dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>*/}
//                     </div>
//                 </div>
//             </div>
//     );
//     }
//     }

//     export default Category_ele;