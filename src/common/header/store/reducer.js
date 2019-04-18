import * as constants from './constants';
import { fromJS } from 'immutable'; // JS object -> immutable object

const defaultState = fromJS({
	focused: false,
	list: [],
})

export default (state = defaultState, action) => {
	if (action.type === constants.SEARCH_FOCUS) {
		// immutable set: 结合之前immutable对象的值和设置的值，返回一个全新的对象
		return state.set('focused', true);
	}
	if (action.type === constants.SEARCH_BLUR) {
		return state.set('focused', false);
	}
	if (action.type === constants.CHANGE_LIST) {
		return state.set('list', action.data);
	}
	return state;
}