// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Container from '@material-ui/core/Container';
// import Typography from './Typography';
// import Categories from './Categories';


// const styles = theme => ({
//     root: {
//       marginTop: theme.spacing(8),
//       marginBottom: theme.spacing(4),
//     },
//     images: {
//       marginTop: theme.spacing(8),
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     imageWrapper: {
//       position: 'relative',
//       display: 'block',
//       padding: 0,
//       borderRadius: 0,
//       height: '40vh',
//       [theme.breakpoints.down('sm')]: {
//         width: '100% !important',
//         height: 100,
//       },
//       '&:hover': {
//         zIndex: 1,
//       },
//       '&:hover $imageBackdrop': {
//         opacity: 0.15,
//       },
//       '&:hover $imageMarked': {
//         opacity: 0,
//       },
//       '&:hover $imageTitle': {
//         border: '4px solid currentColor',
//       },
//     },
//     imageButton: {
//       position: 'absolute',
//       left: 0,
//       right: 0,
//       top: 0,
//       bottom: 0,
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       color: theme.palette.common.white,
//     },
//     imageSrc: {
//       position: 'absolute',
//       left: 0,
//       right: 0,
//       top: 0,
//       bottom: 0,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center 40%',
//     },
//     imageBackdrop: {
//       position: 'absolute',
//       left: 0,
//       right: 0,
//       top: 0,
//       bottom: 0,
//       background: theme.palette.common.black,
//       opacity: 0.5,
//       transition: theme.transitions.create('opacity'),
//     },
//     imageTitle: {
//       position: 'relative',
//       padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
//     },
//     imageMarked: {
//       height: 3,
//       width: 18,
//       background: theme.palette.common.white,
//       position: 'absolute',
//       bottom: -2,
//       left: 'calc(50% - 9px)',
//       transition: theme.transitions.create('opacity'),
//     },
//   });
  
//   function Category_ele(props) {
//     const { classes } = props;
  
//     const images = [
//       {
//         url:
//           'https://images.unsplash.com/photo-1499525870663-3c9cf5a945c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//         title: 'Car',
//         width: '40%',
//       },
//       {
//         url:
//           'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//         title: 'Rental',
//         width: '20%',
//       },
//       {
//         url:
//           'https://images.unsplash.com/photo-1543165796-5426273eaab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//         title: 'Textbook',
//         width: '40%',
//       },
//       {
//         url:
//           'https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//         title: 'Computer',
//         width: '38%',
//       },
//       {
//         url:
//           'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//         title: 'Job',
//         width: '38%',
//       },
//       {
//         url:
//           'https://images.unsplash.com/photo-1455970022149-a8f26b6902dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=696&q=80',
//         title: 'Pet',
//         width: '24%',
//       },
//     ];
  
//     return (
//       <Container className={classes.root} component="section">
//         <Typography variant="h4" marked="center" align="center" component="h2">
//           Way2Recyle
//         </Typography>
//         <div className={classes.images}>
//           {images.map(image => (
//             <ButtonBase
//               key={image.title}
//               className={classes.imageWrapper}
//               style={{
//                 width: image.width,
//               }}
//             >
//               <div
//                 className={classes.imageSrc}
//                 style={{
//                   backgroundImage: `url(${image.url})`,
//                 }}
//               />
//               <div className={classes.imageBackdrop} />
//               <div className={classes.imageButton}>
//                 <Typography
//                   component="h3"
//                   variant="h6"
//                   color="inherit"
//                   className={classes.imageTitle}
//                 >
//                   {image.title}
//                   <div className={classes.imageMarked} />
//                 </Typography>
//               </div>
//             </ButtonBase>
//           ))}
//         </div>
//       </Container>
//     );
//   }
  
//   Category_ele.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
  
//   export default withStyles(styles)(Category_ele);
  
// // class Category_ele extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             title:''
// //         }
// //     }

// //     render() {
// //         return (
// //             <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
// //                 <div className="card h-100">
// //                     <div className="card-body">
// //                         <h4 className="card-title">
// //                             <a href="#">{this.props.title}</a>
// //                         </h4>
// //                         {/*<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam*/}
// //                         {/*    aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,*/}
// //                         {/*    dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>*/}
// //                     </div>
// //                 </div>
// //             </div>
// //     );
// //     }
// //     }

// //     export default Category_ele;