export const GEN_ITEM = 'GEN_ITEM';
export const CLEAR_ALL = 'CLEAR_ALL';
export const CLEAR_ONE = 'CLEAR_ONE';
export const VIEW_ONE = 'VIEW_ONE';
export const UNVIEW_ONE = 'UNVIEW_ONE';
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const CHANGE_INPUT = 'CHANGE_INPUT';

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

