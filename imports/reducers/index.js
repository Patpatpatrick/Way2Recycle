import { combineReducers } from 'redux';
import * as actions from '../actions';
const defaultState = {
	count : 1,
	chosenCategory: 'Undefined',
	unsubmitteditem : {
		itemname: 'An item',
		price: 0,
		category : 'Undefined',
		description : 'Description',
		date : new Date().toLocaleString()
	},
	popUp: false,
	popUpitemIndex : 0,
	itemArray : [{
		itemname: 'I am a BMW!',
		price: 20000,
		category : 'Car',
		description : 'PC-14 Plasma Cutter Severs 3/4inch Check out our website for DEMO videos and specs www.rjrequipmentinnovations.com $600 plus tax, shipping is a flat rate of $50 anywhere in Canada Ships in 1 day and takes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos error ex harum id ipsum nihil perspiciatis reprehenderit unde voluptates. Aut, doloremque ea in inventore iste nam perspiciatis quae quis?',
		date : 'Mon Jun 03 2019 01:46:51 GMT-0700 (PDT)'
	},{
		itemname: 'I am a Honda!',
		price: 10000,
		category : 'Car',
		description : 'PC-14 Plasma Cutter Severs 3/4inch Check out our website for DEMO videos and specs www.rjrequipmentinnovations.com $600 plus tax, shipping is a flat rate of $50 anywhere in Canada Ships in 1 day and takes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos error ex harum id ipsum nihil perspiciatis reprehenderit unde voluptates. Aut, doloremque ea in inventore iste nam perspiciatis quae quis?',
		date : 'Mon Jun 03 2019 01:46:51 GMT-0700 (PDT)'
	},{
		itemname: 'I am a book!',
		price: 10,
		category : 'Textbook',
		description : 'PC-14 Plasma Cutter Severs 3/4inch Check out our website for DEMO videos and specs www.rjrequipmentinnovations.com $600 plus tax, shipping is a flat rate of $50 anywhere in Canada Ships in 1 day and takes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos error ex harum id ipsum nihil perspiciatis reprehenderit unde voluptates. Aut, doloremque ea in inventore iste nam perspiciatis quae quis?',
		date : 'Mon Jun 03 2019 01:46:51 GMT-0700 (PDT)'
	},{
		itemname: 'I am an MacBook!',
		price: 1000,
		category : 'Computer',
		description : 'PC-14 Plasma Cutter Severs 3/4inch Check out our website for DEMO videos and specs www.rjrequipmentinnovations.com $600 plus tax, shipping is a flat rate of $50 anywhere in Canada Ships in 1 day and takes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos error ex harum id ipsum nihil perspiciatis reprehenderit unde voluptates. Aut, doloremque ea in inventore iste nam perspiciatis quae quis?',
		date : 'Mon Jun 03 2019 01:46:51 GMT-0700 (PDT)'
	},{
		itemname: 'I am an MacBook!',
		price: 2000,
		category : 'Computer',
		description : 'PC-14 Plasma Cutter Severs 3/4inch Check out our website for DEMO videos and specs www.rjrequipmentinnovations.com $600 plus tax, shipping is a flat rate of $50 anywhere in Canada Ships in 1 day and takes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos error ex harum id ipsum nihil perspiciatis reprehenderit unde voluptates. Aut, doloremque ea in inventore iste nam perspiciatis quae quis?',
		date : 'Mon Jun 03 2019 01:46:51 GMT-0700 (PDT)'
	},{
		itemname: 'I am an MacBook!',
		price: 3000,
		category : 'Computer',
		description : 'PC-14 Plasma Cutter Severs 3/4inch Check out our website for DEMO videos and specs www.rjrequipmentinnovations.com $600 plus tax, shipping is a flat rate of $50 anywhere in Canada Ships in 1 day and takes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos error ex harum id ipsum nihil perspiciatis reprehenderit unde voluptates. Aut, doloremque ea in inventore iste nam perspiciatis quae quis?',
		date : 'Mon Jun 03 2019 01:46:51 GMT-0700 (PDT)'
	}
	]
};
const itemReducer = (state = defaultState, action) => {
	switch(action.type){
		case actions.GEN_ITEM :
			// console.log(state);
			console.log([...state.itemArray,state.unsubmitteditem]);
			console.log(state.count);
			return {
				count : state.count + 1,
				unsubmitteditem : state.unsubmitteditem,
				popUp:  state.popUp,
				popUpitemIndex : state.popUpitemIndex,
				itemArray: [...state.itemArray,state.unsubmitteditem]
			};
		case actions.CLEAR_ALL:
			// console.log(state);
			return {
				count : 0,
				unsubmitteditem : state.unsubmitteditem,
				popUp:  state.popUp,
				popUpitemIndex : state.popUpitemIndex,
				itemArray: []
			};
		case actions.CLEAR_ONE:
			return	{
				count : state.count - 1,
				unsubmitteditem : state.unsubmitteditem,
				popUp: state.popUp,
				popUpitemIndex : state.popUpitemIndex,
				itemArray: [...state.itemArray.slice(0,action.toDelIndex).concat(state.itemArray.slice(action.toDelIndex+1))]
			};
		case actions.VIEW_ONE:
			console.log('wwww'+action.toViewIndex);
			return	{
				count : state.count,
				unsubmitteditem : state.unsubmitteditem,
				popUp : true,
				popUpitemIndex : action.toViewIndex,
				itemArray: state.itemArray
			};
		case actions.UNVIEW_ONE:
			return	{
				count : state.count,
				unsubmitteditem : state.unsubmitteditem,
				popUp : false,
				popUpitemIndex : 0,
				itemArray: state.itemArray
			};
		case actions.CHANGE_INPUT :
			console.log(action.keyToChange);
			console.log(action.valueToUpdate);
			var newitem = Object.assign({}, state.unsubmitteditem, 
				{ 
					[action.keyToChange]: action.valueToUpdate,
					'date' : new Date()
				}
			);
			console.log(newitem);
			return {
				count : state.count,
				unsubmitteditem : newitem,
				popUp : state.popUp,
				popUpitemIndex : state.popUpitemIndex,
				itemArray: state.itemArray
			};
		case 'CHANGE_CATEGORY' :
			console.log('change cate');
			return Object.assign({}, state, 
				{ 
					chosenCategory: action.chosenCategory,
				}
			);
		default:
			return state;
	}
};


export default combineReducers({ 
	itemProcess: itemReducer,
    //anotherKey: anotherReducer //all your reducers should be combined
});
