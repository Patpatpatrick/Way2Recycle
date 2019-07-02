export const GEN_ITEM = 'GEN_ITEM';
export const CLEAR_ALL = 'CLEAR_ALL';
export const CLEAR_ONE = 'CLEAR_ONE';
export const VIEW_ONE = 'VIEW_ONE';
export const UNVIEW_ONE = 'UNVIEW_ONE';
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const CHANGE_INPUT = 'CHANGE_INPUT';

// for post page
export const SHOW_REVIEW = 'SHOW_REVIEW';
export const CLOSE_REVIEW = 'CLOSE_REVIEW';

// for LogIn Page
export const CHANGE_EMAIL_INPUT = 'CHANGE_EMAIL_INPUT'
export const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT'

// for Sign Up
export const CHANGE_FNAME_INPUT = 'CHANGE_FNAME_INPUT'
export const CHANGE_LNAME_INPUT = 'CHANGE_LNAME_INPUT'
export const CHANGE_CREATE_PW_INPUT = 'CHANGE_CREATE_PW_INPUT'
export const CHANGE_CREATE_EMAIL_INPUT = 'CHANGE_CREATE_EMAIL_INPUT'

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
		toDelIndex : index
	};
};
export const popUpItem = (index) => {
	return {
		type: VIEW_ONE,
		toViewIndex : index
	};
};

export const closePopedItem = () => {
	return {
		type: UNVIEW_ONE,
	};
};
export const changeUnsubmittedItem = (key,value) => {
	return {
		type: CHANGE_INPUT,
		keyToChange: key,
		valueToUpdate : value
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