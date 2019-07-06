import { combineReducers } from 'redux';
import * as actions from '../actions';
const defaultState = {
	count : 1,
	chosenCategory: 'Car',
	unsubmitteditem : {
		itemname: 'An item',
		price: 0,
		category : 'Car',
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
		case actions.ASSIGN_SERVER_ITEMS_TO_STORE :
			console.log(action.itemsFromServer);
			return Object.assign({}, state, 
				{ 
					itemArray: action.itemsFromServer,
				}
			);
		case actions.GEN_ITEM :
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

// Reducer for LogIn Page
const updateEmailInput = (str = '', action) => {
	if (action.type===actions.CHANGE_EMAIL_INPUT) {
		return action.payload
	}
	return str
};

const updatePasswordInput = (str = '', action) => {
	if (action.type===actions.CHANGE_PASSWORD_INPUT) {
		return action.payload
	}
	return str
};

// Reducer for Sign Up Page

const updateFNameInput = (str = '', action) => {
	if (action.type===actions.CHANGE_FNAME_INPUT) {
		return action.payload
	}
	return str
};
const updateLNameInput = (str = '', action) => {
	if (action.type===actions.CHANGE_LNAME_INPUT) {
		return action.payload
	}
	return str
};
const updateCreateEmailInput = (str = '', action) => {
	if (action.type===actions.CHANGE_CREATE_EMAIL_INPUT) {
		return action.payload
	}
	return str
};
const updateCreatePasswordInput = (str = '', action) => {
	if (action.type===actions.CHANGE_CREATE_PW_INPUT) {
		return action.payload
	}
	return str
};

const toggleLogin = (bool = false, action) => {
	switch (action.type) {
		case 'LOG_IN_OUT':
			return !bool
		default:
			return bool;
	}
}


const displayReview = (popReviewWindow = false, action) => {
	if (action.type === actions.SHOW_REVIEW){
		console.log('fffffffffffffffffffff');
		return true;
	}
	if (action.type === actions.CLOSE_REVIEW){
		return false;
	}
	return popReviewWindow;
}
// const renderChoices = ['home','post','viewPost','login','signup']
const renderChoiceAssigner = (renderChoice = 'home', action) => {
	switch(action.type){
		case actions.CHANGE_CHOICE_ON_NAV:
			return action.choice;
		default:
			return renderChoice;
	}
}
export default combineReducers({
	itemProcess: itemReducer,
	// for LogIn Page
	emailInput: updateEmailInput,
	passwordInput: updatePasswordInput,
	toggleLogin: toggleLogin,



	// for Sign Up Page
	fNameInput: updateFNameInput,
	lNameInput: updateLNameInput,
	createEmailInput: updateCreateEmailInput,
	createPasswordInput: updateCreatePasswordInput,

	// for postItem show review
	displayReview,

	// for change choice on Nav
	renderChoiceAssigner
});
