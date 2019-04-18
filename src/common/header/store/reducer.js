import * as constants from './constants';
import { fromJS } from 'immutable'; // JS object -> immutable object

const defaultState = fromJS({
	focused: false,
	list: [],
	page: 1,
	totalPage: 1,
	mouseEnter: false,
})

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SEARCH_FOCUS:
			return state.set('focused', true);
		case constants.SEARCH_BLUR:
			return state.set('focused', false);
		case constants.CHANGE_LIST:
			return state.merge({
				'list': action.data,
				'totalPage': action.totalPage
			}); // 等于调用两次set
		case constants.MOUSE_ENTER:
			return state.set('mouseEnter', true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseEnter', false);
		case constants.CHANGE_PAGE:
			if (state.get('page') === state.get('totalPage')) {
				return state.set('page', 1);
			}
			else return state.set('page', state.get('page') + 1);
		default:
			return state;
	}
}