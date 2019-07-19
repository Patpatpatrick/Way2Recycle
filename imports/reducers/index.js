import {combineReducers} from 'redux';
import * as actions from '../actions';
import {Load_User_Items} from "../actions";

const defaultState = {
    count: 1,
    chosenCategory: 'Auto',
    unsubmitteditem: {
        itemname: 'An item',
        price: 0,
        category: 'Auto',
        description: 'Description',
        date: new Date().toLocaleString()
    },
    popUp: false,
    popUpitemIndex: 0,
    itemArray: []
};

const userItemReducer = (state = [], action) => {
    if (action.type === actions.Load_User_Items) {
        return [...action.items];
    }

    return state;

};

const itemReducer = (state = defaultState, action) => {
// 	switch(action.type){
// 		// case actions.ASSIGN_SERVER_ITEMS_TO_STORE :
// 		// 	console.log('=======================!!!');
// 		// 	console.log(action.itemsFromServer);
// 		// 	console.log('=======================!!!');
// 		// 	return Object.assign({}, state, 
// 		// 		{ 
// 		// 			itemArray: action.itemsFromServer,
// 		// 		}
// 		// 	);
// 		// case actions.GEN_ITEM :
// 		// 	return {
// 		// 		count : state.count + 1,
// 		// 		unsubmitteditem : state.unsubmitteditem,
// 		// 		popUp:  state.popUp,
// 		// 		popUpitemIndex : state.popUpitemIndex,
// 		// 		itemArray: [...state.itemArray,state.unsubmitteditem]
// 		// 	};
// 		// case actions.CLEAR_ALL:
// 		// 	// console.log(state);
// 		// 	return {
// 		// 		count : 0,
// 		// 		unsubmitteditem : state.unsubmitteditem,
// 		// 		popUp:  state.popUp,
// 		// 		popUpitemIndex : state.popUpitemIndex,
// 		// 		itemArray: []
// 		// 	};
// 		// case actions.CLEAR_ONE:
// 		// 	console.log('clearing ONE');
// 		// 	console.log(action.toDelIndex);
// 		// 	let newArray = [...state.itemArray.filter((item) => item._id !== action.toDelIndex)]
// 		// 	console.log(newArray);
// 		// 	return	{
// 		// 		count : state.count - 1,
// 		// 		unsubmitteditem : state.unsubmitteditem,
// 		// 		popUp: state.popUp,
// 		// 		popUpitemIndex : state.popUpitemIndex,
// 		// 		itemArray: newArray
// 		// 	};
// 		case actions.VIEW_ONE:
// 			console.log('wwww'+action.toViewIndex);
// 			return	{
// 				count : state.count,
// 				unsubmitteditem : state.unsubmitteditem,
// 				popUp : true,
// 				popUpitemIndex : action.toViewIndex,
// 				itemArray: state.itemArray
// 			};
// 			// added 
// 		case actions.ALLOW_EDIT:
// 			console.log('updating'+action.toUpdateIndex);
// 			return {
// 				count : state.count,
// 				unsubmitteditem : state.unsubmitteditem,
// 				popUp : true,
// 				popUpitemIndex : action.toUpdateIndex,
// 				itemArray: state.itemArray
// 			}
// 		case actions.UNVIEW_ONE:
// 			return	{
// 				count : state.count,
// 				unsubmitteditem : state.unsubmitteditem,
// 				popUp : false,
// 				popUpitemIndex : 0,
// 				itemArray: state.itemArray
// 			};
		// case actions.CHANGE_INPUT :
		// 	console.log(action.keyToChange);
		// 	console.log(action.valueToUpdate);
		// 	var newitem = Object.assign({}, state.unsubmitteditem, 
		// 		{ 
		// 			[action.keyToChange]: action.valueToUpdate,
		// 			'date' : new Date()
		// 		}
		// 	);
		// 	console.log(newitem);
		// 	return {
		// 		count : state.count,
		// 		unsubmitteditem : newitem,
		// 		popUp : state.popUp,
		// 		popUpitemIndex : state.popUpitemIndex,
		// 		itemArray: state.itemArray
		// 	};
		
		// case 'CHANGE_CATEGORY' :
		// 	console.log('change cate');
		// 	return Object.assign({}, state, 
		// 		{ 
		// 			chosenCategory: action.chosenCategory,
		// 		}
		// 	);
	// 	default:
	// 		return state;
	// }
    switch (action.type) {
        case actions.ASSIGN_SERVER_ITEMS_TO_STORE :
            // console.log('=======================!!!');
            // console.log(action.itemsFromServer);
            // console.log('=======================!!!');
            return Object.assign({}, state,
                {
                    itemArray: action.itemsFromServer,
                }
            );
        case actions.GEN_ITEM :
            return {
                count: state.count + 1,
                unsubmitteditem: state.unsubmitteditem,
                popUp: state.popUp,
                popUpitemIndex: state.popUpitemIndex,
                itemArray: [...state.itemArray, state.unsubmitteditem]
            };
        case actions.CLEAR_ALL:
            // console.log(state);
            return {
                count: 0,
                unsubmitteditem: state.unsubmitteditem,
                popUp: state.popUp,
                popUpitemIndex: state.popUpitemIndex,
                itemArray: []
            };
        case actions.CLEAR_ONE:
            console.log("CLEAR ONE")
            return {
                count: state.count - 1,
                unsubmitteditem: state.unsubmitteditem,
                popUp: state.popUp,
                popUpitemIndex: state.popUpitemIndex,
                itemArray: [...state.itemArray.slice(0, action.toDelIndex).concat(state.itemArray.slice(action.toDelIndex + 1))]
            };
        case actions.VIEW_ONE:
            console.log('wwww' + action.toViewIndex);
            return {
                count: state.count,
                unsubmitteditem: state.unsubmitteditem,
                popUp: true,
                popUpitemIndex: action.toViewIndex,
                itemArray: state.itemArray
			};
			
		// added 
		case actions.ALLOW_EDIT:
			console.log('updating'+action.toUpdateIndex);
			return {
				count : state.count,
				unsubmitteditem : state.unsubmitteditem,
				popUp : true,
				popUpitemIndex : action.toUpdateIndex,
				itemArray: state.itemArray
			}

        case actions.UNVIEW_ONE:
            return {
                count: state.count,
                unsubmitteditem: state.unsubmitteditem,
                popUp: false,
                popUpitemIndex: 0,
                itemArray: state.itemArray
            };
        case actions.CHANGE_INPUT :
            console.log(action.keyToChange);
            console.log(action.valueToUpdate);
            var newitem = Object.assign({}, state.unsubmitteditem,
                {
                    [action.keyToChange]: action.valueToUpdate,
                    'date': new Date()
                }
            );
            console.log(newitem);
            return {
                count: state.count,
                unsubmitteditem: newitem,
                popUp: state.popUp,
                popUpitemIndex: state.popUpitemIndex,
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
    if (action.type === actions.CHANGE_EMAIL_INPUT) {
        return action.payload
    }
    return str
};

const updatePasswordInput = (str = '', action) => {
    if (action.type === actions.CHANGE_PASSWORD_INPUT) {
        return action.payload
    }
    return str
};

// Reducer for Sign Up Page

const updateFNameInput = (str = '', action) => {
    if (action.type === actions.CHANGE_FNAME_INPUT) {
        return action.payload
    }
    return str
};
const updateLNameInput = (str = '', action) => {
    if (action.type === actions.CHANGE_LNAME_INPUT) {
        return action.payload
    }
    return str
};
const updateCreateEmailInput = (str = '', action) => {
    if (action.type === actions.CHANGE_CREATE_EMAIL_INPUT) {
        return action.payload
    }
    return str
};
const updateCreatePasswordInput = (str = '', action) => {
    if (action.type === actions.CHANGE_CREATE_PW_INPUT) {
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
    if (action.type === actions.SHOW_REVIEW) {
        console.log('fffffffffffffffffffff');
        return true;
    }
    if (action.type === actions.CLOSE_REVIEW) {
        return false;
    }
    return popReviewWindow;
}

// update Item for ViewOneItem component
// const updateItem = (state = defaultState, action) => { // should use 'updateOneItem'
// 	if (action.type === actions.ALLOW_EDIT){
// 		console.log('editing posted item!')
// 	}
// 	if (action.type === actions.CONFIRM_EDIT) {
// 		console.log('confirming the update!')
// 	}
// 	return updateOneItem;
// }

// const renderChoices = ['home','post','viewPost','login','signup']
// const renderChoices = ['home','post','viewPost','login','signup',''User']
const renderChoiceAssigner = (renderChoice = 'home', action) => {
    switch (action.type) {
        case actions.CHANGE_CHOICE_ON_NAV:
            return action.choice;
        default:
            return renderChoice;
    }
}

// const userItemReducer = (state = defaultState, action) => {
// 	switch(action.type){
//
// 		case 'xxx' :
// 			console.log('xxx');
// 			console.log(action.items);
// 			return Object.assign({}, state,
// 				{
// 					itemArray: action.itemsFromServer,
// 				}
// 			);
// 		default:
// 			console.log(action.type);
// 			return state;
// 	}
// };



export default combineReducers({
    userItemProcess: userItemReducer,
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
	// for viewOneItem allow edit posted items
	// updateItem,
    // for change choice on Nav
    renderChoiceAssigner
});
