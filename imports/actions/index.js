// for itemsBox
export const VIEW_ONE_IN_ITEM_BOX = 'VIEW_ONE_IN_ITEM_BOX';
export const CLOSE_ONE_IN_ITEM_BOX = 'CLOSE_ONE_IN_ITEM_BOX';

export const LIKE_ITEM = 'LIKE_ITEM';
export const UNLIKE_ITEM = 'UNLIKE_ITEM';

export const GEN_ITEM = 'GEN_ITEM';
export const CLEAR_ALL = 'CLEAR_ALL';
export const CLEAR_ONE = 'CLEAR_ONE';
export const VIEW_ONE = 'VIEW_ONE';
export const UNVIEW_ONE = 'UNVIEW_ONE';
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const UPDATE_INPUT = 'UPDATE_INPUT';
export const CHANGE_UNSUBMITTED_ITEM = 'CHANGE_UNSUBMITTED_ITEM';
// for post page
export const SHOW_REVIEW = 'SHOW_REVIEW';
export const CLOSE_REVIEW = 'CLOSE_REVIEW';

// for edit item
export const ALLOW_EDIT = 'ALLOW_EDIT';
export const CONFIRM_EDIT = 'CONFIRM_EDIT';

// for LogIn Page
export const CHANGE_EMAIL_INPUT = 'CHANGE_EMAIL_INPUT'
export const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT'

// for Sign Up
export const CHANGE_FNAME_INPUT = 'CHANGE_FNAME_INPUT'
export const CHANGE_LNAME_INPUT = 'CHANGE_LNAME_INPUT'
export const CHANGE_CREATE_PW_INPUT = 'CHANGE_CREATE_PW_INPUT'
export const CHANGE_CREATE_EMAIL_INPUT = 'CHANGE_CREATE_EMAIL_INPUT'

// for change the choice of Nav bar
export const CHANGE_CHOICE_ON_NAV = 'CHANGE_CHOICE_ON_NAV'
// for assign fetched data to store
export const ASSIGN_SERVER_ITEMS_TO_STORE = 'ASSIGN_SERVER_ITEMS_TO_STORE'
export const reset_cate_in_post = 'reset_cate_in_post'


export const Load_User_Items = 'Load_User_Items'
export const popUpItemInItemsBox = (index) => {
    return {
        type: VIEW_ONE_IN_ITEM_BOX,
        indexToPop: index
    };
};

export const closePopedItemInItemBox = () => {
    return {
        type: CLOSE_ONE_IN_ITEM_BOX
    }
}
export const generateItem = () => {
    return {
        type: GEN_ITEM,
    };
};
export const clearAllItems = () => {
    return {
        type: CLEAR_ALL,
    };
};
export const clearItem = (index) => {
    return {
        type: CLEAR_ONE,
        toDelIndex: index
    };
};
export const popUpItem = (item) => {
    return {
        type: VIEW_ONE,
        itemForPopUp: item
    };
};

export const closePopedItem = () => {
    return {
        type: UNVIEW_ONE,
    };
};
// this is for user edit
export const updateItem = (key, value) => {
    return {
        type: CHANGE_INPUT,
        keyToChange: key,
        valueToUpdate: value
    };
};

// this is for like
export const likeItem = (userId, postId) => {
    return {
        type: LIKE_ITEM,
        idToAddToLike: userId,
        postLiked: postId
    }
}

// this is for unlike 
export const unlikeItem = (userId, postId) => {
    return {
        type: UNLIKE_ITEM,
        idToRemoveFromLike: userId,
        postUnliked: postId
    }
} 

// this is for post!
export const changeUnPostedItem = (key, value) => {
    return {
        type: CHANGE_UNSUBMITTED_ITEM,
        keyToChange: key,
        valueToUpdate: value
    };
};

export const changeCategory = (chosenCategory) => {
    return {
        type: CHANGE_CATEGORY,
        chosenCategory
    };
};

// For LogIn Page
export const updateEmailInputBox = (text) => {
    return {
        type: CHANGE_EMAIL_INPUT,
        payload: text,
    }
}

export const updatePasswordInputBox = (text) => {
    return {
        type: 'CHANGE_PASSWORD_INPUT',
        payload: text,
    }
}

// For Create User Page
export const updateFirstNameInputBox = (text) => {
    return {
        type: CHANGE_FNAME_INPUT,
        payload: text,
    }
}

export const updateLastNameInputBox = (text) => {
    return {
        type: CHANGE_LNAME_INPUT,
        payload: text,
    }
}

export const updateCreatePasswordInputPage = (text) => {
    return {
        type: CHANGE_CREATE_PW_INPUT,
        payload: text,
    }
}
export const updateCreateEmailInputPage = (text) => {
    return {
        type: CHANGE_CREATE_EMAIL_INPUT,
        payload: text,
    }
}

export const logInFlag = () => {
    return {
        type: 'LOG_IN_OUT'
    }

}
// action creators for prepost review

export const showPostReview = () => {
    return {
        type: SHOW_REVIEW
    };
};

export const closePostReview = () => {
    return {
        type: CLOSE_REVIEW
    };
};


export const updatePostedItem = (index) => {
	return {
		type: ALLOW_EDIT,
		toUpdateIndex : index
	}
}


export const confirmUpdatePostedItem = () => {
	return {
		type: CONFIRM_EDIT
	}
}

// create an action to indicate a change of choice
export const changeChoiceOnNav = (choice) => {
    return {
        type: CHANGE_CHOICE_ON_NAV,
        choice
    };
};

export const searchFromNavBar = (boolean) => {
    return {
        type: 'SEARCH_FROM_NAV_BAR',
        payload:boolean
    }
}

export const searchWordFromNav = (string) => {
    return {
        type: "KEYWORD_NAV_BAR",
        payload:string
    }
}

// export const dataToStore = () => {
//     return (dispatch) => {
// 		Meteor.call('getItems', function (err, result) {
// 			if(err){
// 				console.log("failResetByMeteor");
// 			}
// 			console.log(result);
// 			dispatch(assignItemsToStoreItemArray(result));
// 		});
//     };
// }


export const assignItemsToStoreItemArray = (itemsFromServer) => {
	return {
		type: ASSIGN_SERVER_ITEMS_TO_STORE,
		itemsFromServer
	}
};


export const loadUserItems = (items) => ({
    type: Load_User_Items,
    items
});

export const resetCate = () =>({
    type: reset_cate_in_post
})