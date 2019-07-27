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







const styles = theme => {
    return ({
            root: {
                position: 'absolute',
                left: '15%',
                right: '15%',
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
            }


        }
    );
};










class ItemsBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            queryCategory: "None",
            queryMinPrice:-1,
            queryMaxPrice:-1,
            queryKeyWord: ""
        }
    }


    componentDidMount() {
        console.log("ItemBox componentdid mount")
  /*      Meteor.call('getItems', function (err, result) {
            if(err){
                console.log("error");
            }
            // console.log(result);
            this.props.dataToStore(result);
        }.bind(this))*/;
    }

    formatDate = (date) => {
        return new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/');
    }





    searchByParam = () => {
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

        //alert(JSON.stringify(queryParam))





        Meteor.call('getItemsByParam',queryParam, function (err, result) {
            if(err){
                console.log("error");
            }
            // console.log(result);
            this.props.dataToStore(result);
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



	render() {
       // const classes = useStyles;
        const { classes } = this.props;
        return (
            <div className={classes.root}>

                <div className={classes.padding}>
                    <Paper className={classes.filterPaper}>
                    {/*    <div> Filter </div>
                        <div>
                            <textarea>
                            </textarea>
                            <div>Category</div>
                            <select  onChange={this.changeQueryCategory}>
                                <option value="None">None</option>
                                <option value="Appliance">Appliance</option>
                                <option value="Car">Car</option>
                                <option value="Book">Book</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Computer">Computer</option>
                                <option value="Other">Other</option>
                            </select>
                            <div>Price range</div>
                            <button onClick={this.searchByParam}>submit</button>
                        </div>*/}




                        <div>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel  htmlFor="outlined-age-simple">
                                    Category
                                </InputLabel>
                                <Select
                                    value={this.state.queryCategory}
                                    onChange={this.changeQueryCategory}
                                    input={<OutlinedInput labelWidth={50} name="age" id="outlined-age-simple" />}
                                >
                                    {/*<MenuItem value="">
                                        <em>fff</em>
                                    </MenuItem>*/}
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
                            <div>Price Range</div>
                            <span>
                            <TextField
                                id="outlined-email-input"
                                label="min"
                                className={classes.textField}
                                type="email-type"
                                name="email-name"
                                autoComplete="email-auto"
                                margin="normal"
                                variant="outlined"
                                onChange = {this.changeQueryMinPrice}
                            />

                             <TextField
                                  id="outlined-email-input"
                                  label="max"
                                  className={classes.textField}
                                  type="email-type"
                                  name="email-name"
                                  autoComplete="email-auto"
                                  margin="normal"
                                  variant="outlined"
                                  onChange = {this.changeQueryMaxPrice}
                             />
                            </span>
                        </div>

                        <div>
                            <button onClick={this.searchByParam}>Submit</button>
                        </div>


                    </Paper>




                </div>




            <Paper className={classes.paper}>
                <Table className={classes.table}>
                {/*    <TableHead>
                        <TableRow>
                            <TableCell>Item Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Added Date</TableCell>
                            <TableCell align="right">Operation</TableCell>
                        </TableRow>
                    </TableHead>*/}




                    <TableBody>
                    {this.props.itemArray.map( (item, idx) => {
                        return (
                            <TableRow key={idx}>
                    {/*            <TableCell component="th" scope="row">
                                    {item.title}
                                </TableCell>*/}
                                <TableCell style={{ width: 1 }}>{ <img src={item.imagePreviewUrl} width={150} height={150}/>}</TableCell>
                                <TableCell align="left">
                                        <span className={classes.titleFont}>{item.title}</span>
                                         <div>--------------------------</div>
                                     <div>Price {item.price}</div>
                                    <div>Category {item.category}</div>
                                    <div>Description: {item.description}</div>
                                    <div>Date: {item.date.toString()}</div>

                                    <br/>
                                    <div><ViewOneItem index = {idx}/></div>

                                </TableCell>
                                {/*<TableCell align="right">{item.category}</TableCell>
                                <TableCell align="left">{item.description}</TableCell>
                                <TableCell align="right">{this.formatDate(item.date)}</TableCell>
                                <TableCell align="right"><ViewOneItem index = {idx}/></TableCell>*/}
                            </TableRow>
                        )
                        })
                    }
                    </TableBody>
                </Table>
            </Paper>
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
