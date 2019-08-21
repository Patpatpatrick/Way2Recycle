import React from 'react';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

import {changeChoiceOnNav} from '../actions';


const useStyles = makeStyles(theme => ({
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainGrid: {
        marginTop: theme.spacing(3)
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    }
}));

class List_ele extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.showIndex(this.props.element._id);
    }

    render() {
        const classes = useStyles;
        return (
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth="lg">
                    <main>
                        <Grid container spacing={4} className={classes.cardGrid}>
                            <Grid item key={this.props.element.itemname} xs={12} md={12}>
                                <CardActionArea component="a" href="#">
                                    <Card className={classes.card}>
                                        <div className={classes.cardDetails}>
                                            <CardContent>
                                                <Typography component="h2" variant="h5">
                                                    {this.props.element.title}
                                                </Typography>
                                                <Typography variant="subtitle1" color="textPrimary">
                                                    {this.props.element.date + '   Price: ' + this.props.element.price}
                                                </Typography>


                                                <Typography variant="subtitle1" color="textSecondary">
                                                    {'owner:' + this.props.element.owner.username + '        email:' + this.props.element.owner.owner_email}
                                                </Typography>

                                                <Link variant="subtitle1" color="primary"
                                                      onClick={() => this.props.changeChoiceOnNav('viewPost')}>
                                                    More info...
                                                </Link>
                                            </CardContent>
                                        </div>
                                        <Hidden xsDown>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image="https://source.unsplash.com/random"
                                                title="Image title"
                                            />
                                        </Hidden>
                                    </Card>
                                </CardActionArea>
                            </Grid>
                        </Grid>
                    </main>
                </Container>
            </React.Fragment>
        );

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showIndex: (index) => {
            dispatch(popUpItemInItemsBox(index));
        },
        changeChoiceOnNav: (choice) => dispatch(changeChoiceOnNav(choice))
    }
};


export default connect(null, mapDispatchToProps)(List_ele);
