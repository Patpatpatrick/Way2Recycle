import {combineReducers} from 'redux';
import * as actions from '../actions';
import {Load_User_Items} from "../actions";

const defaultState = {
    unsubmitteditem: {
        user_id: Meteor.userId(),
        title: 'An item',
        price: 0,
        category: 'Pleasechoose',
        description: 'Description',
        location: {lat: 49.2827291, lng: -123.12073750000002},
        locationStr: "Vancouver,BC,Canada",
        date: new Date().toLocaleString(),
        file: '',
        imagePreviewUrl: '',
        attribute: "",
    },
    popUpitemIndex: 0,
	itemForPopUp:{}
};

const homePgdefaultState = {
    category: 'Auto',
    itemArray: []
}
// this reducer is for showing items in dashboard
const userItemReducer = (state = [], action) => {
    if (action.type === actions.Load_User_Items) {
        return [...action.items];
    }
    return state;
};
// this reducer is for editing posted item

const userEditReducerDefaultState = {
    popUp: false,
	itemForPopUp:{}
}
const userEditReducer = (state = userEditReducerDefaultState, action) => {
    switch (action.type) {
        case actions.VIEW_ONE:
            console.log('wwww' + action.toViewIndex);
            return {
                popUp: true,
			};
			
		// added 
		case actions.ALLOW_EDIT:
			console.log('updating'+action.toUpdateIndex);
			return {
				popUp : true,
			}
        case actions.UNVIEW_ONE:
            return {
                popUp: false,
                popUpitemIndex: 0,
            };
        case actions.CHANGE_INPUT :
            console.log(action.keyToChange);
            console.log(action.valueToUpdate);
            var newitem = Object.assign({}, state.itemForPopUp,
                {
                    [action.keyToChange]: action.valueToUpdate,
                    'date': new Date()
                }
            );
            console.log(newitem);
            return {
				itemForPopUp:newitem,
            };
        default:
                return state;
    }
};

const homePageCateReducer = (state = homePgdefaultState, action) => {
    if(action.type == actions.CHANGE_CATEGORY ){
        return action.chosenCategory;
    }
    return state;
}

const postItemReducer = (state = defaultState, action) => {
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
                itemArray: [...state.itemArray, state.unsubmitteditem]
            };
        case actions.CLEAR_ALL:
            // console.log(state);
            return {
                itemArray: []
            };
        case actions.CLEAR_ONE:
            console.log("CLEAR ONE")
            return {
                itemArray: [...state.itemArray.slice(0, action.toDelIndex).concat(state.itemArray.slice(action.toDelIndex + 1))]
            };

        case actions.CHANGE_UNSUBMITTED_ITEM:
            var newitem = Object.assign({}, state.unsubmitteditem,
                {
                    [action.keyToChange]: action.valueToUpdate,
                    'date': new Date()
                }
            );
            console.log(newitem);
            return {
                unsubmitteditem:newitem,
            };
        
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
    homePageProcess:homePageCateReducer,
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
