import React from 'react';
// import DeleteOne from '../DeleteOne';
import ViewOneItem from '../ViewOneItem';
import { connect } from 'react-redux';
import useStyles from '../../style/itemTableStyle';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {blue, red} from "@material-ui/core/colors";
import {compose} from "redux";
import withStyles from "@material-ui/core/styles/withStyles";
import {assignItemsToStoreItemArray} from "../../../actions";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";

import Paginate from "react-pure-pagination";
import "react-pure-pagination/dist/Paginate.css";

import './itemBox.css'
import Typography from "../../Typography";
import Slider from '@material-ui/core/Slider';

const styles = theme => {
    return ({
            root: {
                position: 'absolute',
                left: '5%',
                right: '5%',
            },
            paper: {
                padding: theme.spacing(1),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },

            filterPaper: {
                padding: theme.spacing(1),
                textAlign: 'center',
            },

            titleFont: {
                color: blue[400],
                fontSize: '32px',
                fontWeight: 'fontWeightMedium'

            },

            padding: {
                paddingTop:50,
                paddingBottom:25
            },

            formControl: {
                margin: theme.spacing(1),
                minWidth: 120,
            },

            textField: {
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1),
                width:60,
                fontSize: 10
            },
            selectEmpty: {
                marginTop: theme.spacing(2),
            },
        }
    );
};


const marks = [
    {
        value: 3,
        label: '3',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 10,
        label: '10',
    },
    {
        value: 20,
        label: '20',
    },
];

const paginationStyle = {
    currentPage: {
        background: '#4925bd'
    }
}

class ItemsBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queryCategory: "None",
            queryMinPrice:-1,
            queryMaxPrice:-1,
            queryKeyWord: "",
            currentPage:1,
            itemsPerPage:5,
            predictedNumPages:5,
        }
    }


    componentDidMount() {
        // Don't delete this block of comment yet
         Meteor.call('getItems', function (err, result) {
            if(err){
                console.log("error");
            }
            // console.log(result);
            this.props.dataToStore(result);
        }.bind(this));
    }

    formatDate = (date) => {
        return new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/');
    }

    searchByParam = () => {
        this.setState({currentPage:1})
        let queryParam = {
            minPrice: 0,
            maxPrice: 0,
            category: ""
        }

        let minPrice = this.state.queryMinPrice
        let maxPrice = this.state.queryMaxPrice
        let category = this.state.queryCategory
        let keyWord = this.state.queryKeyWord

        queryParam.minPrice = minPrice
        queryParam.maxPrice = maxPrice
        queryParam.category = category
        queryParam.keyword = keyWord

        Meteor.call('getItemsByParam',queryParam, function (err, result) {
            if(err){
                console.log("error querying items by filter");
            }
            this.props.dataToStore(result);
            this.setState({itemsPerPage:this.state.predictedNumPages})
            //this.setState({currentPage:1})
        }.bind(this));
    }


    changeQueryCategory = (event) => {
        this.setState({queryCategory: event.target.value})
    }

    changeQueryMinPrice = (event) => {
        this.setState({queryMinPrice: event.target.value})

    }

    changeQueryMaxPrice = (event) => {
        this.setState({queryMaxPrice: event.target.value})

    }

    handlePaginate=(page) => {
        this.setState({
            currentPage: page
        });
    }


    numPagesLabelSlider = (value) => {
        return marks.findIndex(mark => mark.value === value) + 1;
    }

    valuetext=(value)=> {
        return value;
    }

    changeNumPages = (event, value) => {
        (this.props.itemArray.length <= value)
            ?this.setState({predictedNumPages:value})
            :this.setState({predictedNumPages:value})
    }


	render() {
        const { classes } = this.props;
        return (
            <div>
            <div className={classes.root.toString() + " row1"}>


                <div className={classes.padding.toString() + " column1"}>
                    <Paper className={classes.filterPaper}>
                        <div style={{zIndex:-1}} >
                            <div>Category</div>
                            <FormControl  className={classes.formControl}>
                                <FormHelperText>Category</FormHelperText>
                                <Select
                                    value={this.state.queryCategory}
                                    displayEmpty
                                    onChange={this.changeQueryCategory}
                                    input={<OutlinedInput labelWidth={0} name="" id="" />}
                                >
                                    <MenuItem value={"Appliance"}>Appliance</MenuItem>
                                    <MenuItem value={"Car"}>Car</MenuItem>
                                    <MenuItem value={"Book"}>Book</MenuItem>
                                    <MenuItem value={"Furniture"}>Furniture</MenuItem>
                                    <MenuItem value={"Computer"}>Computer</MenuItem>
                                    <MenuItem value={"Other"}>Other</MenuItem>
                                </Select>
                            </FormControl>
                            </div>
                        <div>
                            <br/>
                            <div>Price Range</div>
                            <span>
                            <TextField
                                placeholder="min"
                                className={classes.textField}
                                type=""
                                margin="normal"
                                variant="outlined"
                                onChange = {this.changeQueryMinPrice}
                            />

                             <TextField
                                  id="outlined-email-input"
                                  placeholder={"max"}
                                  className={classes.textField}
                                  type=""
                                  margin="normal"
                                  variant="outlined"
                                  onChange = {this.changeQueryMaxPrice}
                             />
                            </span>
                        </div>


                        <br/>
                        <Typography id="discrete-slider-restrict" gutterBottom>
                            Number of Items per Page
                        </Typography>
                        <Slider
                            defaultValue={5}
                            valueLabelFormat={this.numPagesLabelSlider}
                            getAriaValueText={this.valuetext}
                            aria-labelledby="discrete-slider-restrict"
                            step={null}
                            valueLabelDisplay="auto"
                            marks={marks}
                            max={20}
                            onChange={(event, value) =>this.changeNumPages(event, value)}
                            /*onDragStop={this.changeNumPages}*/
                        />
                        <div>
                            <button onClick={this.searchByParam}>Submit</button>
                        </div>
                    </Paper>
                </div>

            <Paper className={classes.paper.toString() + " column2"}>
                <Table className={classes.table}>

                    <TableBody>
                    {this.props.itemArray.slice(((this.state.currentPage-1)*this.state.itemsPerPage),
                        ((this.state.currentPage)*this.state.itemsPerPage)
                    ).map( (item, idx) => {
                        return (
                            <TableRow key={idx}>
                                <TableCell style={{ width: 1 }}>{ <img src={item.imagePreviewUrl} width={150} height={150}/>}</TableCell>
                                <TableCell align="left">
                                        <span className={classes.titleFont}>{item.title}</span>
                                         <div>--------------------------</div>
                                     <div>Price: ${item.price}</div>
                                    <div>Category: {item.category}</div>
                                    <div>Description: {item.description}</div>
                                    <div>Date: {this.formatDate(item.date.toString())}</div>

                                    <br/>
                                    <div><ViewOneItem index = {idx}/></div>
                                </TableCell>
                            </TableRow>
                        )
                        })
                    }
                    </TableBody>
                </Table>

                <Paginate total={this.props.itemArray.length}
                          perPage={this.state.itemsPerPage} current={this.state.currentPage}
                          onChange={this.handlePaginate} styles={paginationStyle} />
            </Paper>
            </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { itemArray: state.itemBoxReducer.itemArray};
}

const mapDispatchToProps = (dispatch) => {
    return {
        dataToStore: (result) => {
            dispatch(assignItemsToStoreItemArray(result));
        }
    }
};
//export default connect(mapStateToProps,null)(ItemsBox);

export default compose (
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
) (ItemsBox)
