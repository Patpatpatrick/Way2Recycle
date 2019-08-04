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
import {blue, grey, red} from "@material-ui/core/colors";
import {compose} from "redux";
import withStyles from "@material-ui/core/styles/withStyles";
import {assignItemsToStoreItemArray, searchFromNavBar} from "../../../actions";
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
import {Meteor} from "meteor/meteor";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import SearchIcon from '@material-ui/icons/Search';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

const styles = theme => {
    return ({
            root: {
                position: 'absolute',
                left: '5%',
                right: '5%',
                marginTop: 30,
                marginBottom:30
            },
            paper: {
                padding: theme.spacing(1),
                textAlign: 'center',
                /* color: theme.palette.text.secondary,*/
                backgroundColor: grey[200]
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

            rootSearchBar: {
                padding: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: '60%',
            },
            iconButton: {
                padding: 10,
            },
            divider: {
                width: 1,
                height: 28,
                margin: 4,
            },
            input: {
                marginLeft: 8,
                flex: 1,
                width: '70%',
            },
            cardActionCSS: {
            },
            cardColor : {

                margin: 10,

                /* backgroundColor: blue[50]*/
                '&:hover': {
                    backgroundColor: blue[50]
                }
            }


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
            inputString:"",
            date: "latest"
        }
    }


    componentDidMount() {

        if (this.props.isSearchedFromNavBar) {

            this.props.searchFromNavBar(false)
            let searchString = this.props.keywordFromNavBar
            Meteor.call('mySearch', searchString, (error, result) => {
                if (error) {
                    console.log("failed to view items searched from nav bar")
                }
                this.props.dataToStore(result);
                console.log(result)
            });
        } else {
            Meteor.call('getItems', function (err, result) {
                if(err){
                    console.log("failResetByMeteor getting default list of items");
                }
                this.props.dataToStore(result);
            }.bind(this));
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.isSearchedFromNavBar !== prevProps.isSearchedFromNavBar) {
            // call this when search bar was clicked from view post item
            if (this.props.renderChoiceAssigner === prevProps.renderChoiceAssigner) {
                let searchString = this.props.keywordFromNavBar
                Meteor.call('mySearch', searchString, (error, result) => {
                    this.props.searchFromNavBar(false)
                    this.props.dataToStore(result);
                    console.log(result)
                });
            }
        }
    }

    formatDate = (date) => {
        return new Date(date).toISOString().replace('-', '/').split('T')[0].replace('-', '/');
    }

    searchByParam = () => {
        this.setState({currentPage:1})
        let queryParam = {
            minPrice: 0,
            maxPrice: 0,
            category: "",
            keyword: "",
            sortDate:""
        }

        let minPrice = this.state.queryMinPrice
        let maxPrice = this.state.queryMaxPrice
        let category = this.state.queryCategory
        let keyWord = this.state.inputString
        let sortDate = this.state.date

        queryParam.minPrice = minPrice
        queryParam.maxPrice = maxPrice
        queryParam.category = category
        queryParam.keyword = keyWord
        queryParam.sortDate=sortDate


        Meteor.call('getItemsByParam',queryParam, function (err, result) {
            if(err){
                console.log("failResetByMeteor querying items by filter");
            }
            this.props.dataToStore(result);
            this.setState({itemsPerPage:this.state.predictedNumPages})
            //this.setState({currentPage:1})
        }.bind(this));
    }


    changeSortDate = (event) => {
        this.setState({date: event.target.value})
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

    changeInputString = (event) => {
        this.setState({inputString:event.target.value})
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

                            <div>Sort by Date</div>
                            <FormControl  className={classes.formControl}>
                                <FormHelperText>Date</FormHelperText>
                                <Select
                                    value={this.state.date}
                                    onChange={this.changeSortDate}
                                    input={<OutlinedInput labelWidth={0} name="" id="" />}
                                >
                                    <MenuItem value={"latest"}>Sort by Latest</MenuItem>
                                    <MenuItem value={"oldest"}>Sort by Oldest</MenuItem>

                                </Select>
                            </FormControl>

                            <div>
                                <button onClick={this.searchByParam}>Submit</button>
                            </div>
                        </Paper>
                    </div>

                    <Paper className={classes.paper.toString() + " column2"}>
                        {/*<Paper className={classes.rootSearchBar}>*/}
                        <span>
                    <InputBase
                        className={classes.input}
                        placeholder="Search Keywords"
                        inputProps={{ 'aria-label': 'Search Keywords' }}
                        onChange={this.changeInputString}
                    />
                    <IconButton className={classes.iconButton} aria-label="search"
                                onClick={()=> this.searchByParam()}>
                        <Divider className={classes.divider} />
                        <SearchIcon />
                    </IconButton>
                   </span>
                        {/* </Paper>*/}

                        {this.props.itemArray.length===0?
                            <div>
                                No result found!
                            </div>:
                            <Table className={classes.table}>

                                <TableBody>
                                    {this.props.itemArray.slice(((this.state.currentPage-1)*this.state.itemsPerPage),
                                        ((this.state.currentPage)*this.state.itemsPerPage)
                                    ).map( (item, idx) => {
                                        return (
                                            <TableRow key={idx + (this.state.currentPage -1) * (this.state.itemsPerPage)} >
                                                <div>
{/*
                                                    <CardActionArea className={classes.cardActionCSS}>
*/}
                                                        <Card className={classes.cardColor}>
                                                            <TableCell style={{ width: 1 }}>{ <img src={item.imagePreviewUrl} width={150} height={150}/>}</TableCell>
                                                            <TableCell align="left" style={{verticalAlign:'top'}} >
                                                                <span className={classes.titleFont}>{item.title}</span>
                                                                <div>--------------------------</div>
                                                                <div>Price: ${item.price}</div>
                                                                <div>Category: {item.category}</div>
                                                                <div className={"descriptionStyle"}>
                                                                    Description: {item.description}
                                                                </div>
                                                                <div>Date: {this.formatDate(item.date.toString())}</div>

                                                                <br/>
                                                                <div><ViewOneItem index = {idx + (this.state.currentPage -1) * (this.state.itemsPerPage)}/></div>
                                                            </TableCell>

                                                        </Card>
                                                  {/*  </CardActionArea>*/}

                                                </div>
                                            </TableRow>
                                        )
                                    })
                                    }
                                </TableBody>
                            </Table>}



                        <Paginate total={this.props.itemArray.length}
                                  perPage={this.state.itemsPerPage} current={this.state.currentPage}
                                  onChange={this.handlePaginate} styles={paginationStyle} />
                    </Paper>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dataToStore: (result) => {
            dispatch(assignItemsToStoreItemArray(result));
        },
        searchFromNavBar: (text) => dispatch(searchFromNavBar(text)),
    }
};

const mapStateToProps = (state) => {
    return { itemArray: state.itemBoxReducer.itemArray,
        isSearchedFromNavBar: state.isSearchedFromNavBar,
        keywordFromNavBar: state.keywordFromNavBar,
        renderChoiceAssigner: state.renderChoiceAssigner
    };
}

//export default connect(mapStateToProps,null)(ItemsBox);

export default compose (
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
) (ItemsBox)