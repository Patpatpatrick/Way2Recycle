import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../Typography';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import images from './CategoryImgs';
import {connect} from 'react-redux';
import List from '../List';

// import changeCategory from '../../actions'
const styles = theme => ({
    root: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4),
    },
    images: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexWrap: 'wrap',
    },
    imageWrapper: {
        position: 'relative',
        display: 'block',
        padding: 0,
        borderRadius: 0,
        height: '40vh',
        [theme.breakpoints.down('sm')]: {
            width: '100% !important',
            height: 100,
        },
        '&:hover': {
            zIndex: 1,
        },
        '&:hover $imageBackdrop': {
            opacity: 0.15,
        },
        '&:hover $imageMarked': {
            opacity: 0,
        },
        '&:hover $imageTitle': {
            border: '4px solid currentColor',
        },
    },
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: theme.palette.common.black,
        opacity: 0.5,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
});

function Categories(props) {
    const {classes} = props;

    return (
        <BrowserRouter>
            <Container className={classes.root} component="section">
                <Typography variant="h4" marked="center" align="center" component="h2">
                    Popular
                </Typography>
                <div className={classes.images}>
                    {images.map(image => (
                        <ButtonBase
                            key={image.title}
                            className={classes.imageWrapper}
                            style={{
                                width: image.width,
                            }}
                            onClick={() => props.dispatch({type: 'CHANGE_CATEGORY', chosenCategory: image.title})}
                            // href = {'/categories/'+image.title}
                        >
                            <div
                                className={classes.imageSrc}
                                style={{
                                    backgroundImage: `url(${image.url})`,
                                }}
                            />
                            <div className={classes.imageBackdrop}/>
                            <div className={classes.imageButton}>
                                <Typography
                                    component="h3"
                                    variant="h6"
                                    color="inherit"
                                    className={classes.imageTitle}
                                >
                                    {image.title}
                                    <div className={classes.imageMarked}/>
                                </Typography>
                            </div>
                        </ButtonBase>
                    ))}
                </div>
            </Container>
            <Route path="/categories/" component={List}/>
        </BrowserRouter>
    );
}

Categories.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStylesCategories = withStyles(styles)(connect(null, null)(Categories));


// import React, {Component} from 'react';
// import Category_ele from "./Category_ele";

// class Categories extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }

//     render() {
//         return (
//             <div className="row">
//                 {this.props.categories.map(ele => <Category_ele title={ele}/>)}
//             </div>);
//     }
// }

// export default Categories;