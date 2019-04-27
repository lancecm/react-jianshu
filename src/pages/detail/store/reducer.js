import { fromJS } from 'immutable'; // JS object -> immutable object
import * as constants from './constants';

const defaultState = fromJS({
	title: '',
	content: '',
});

export default (state = defaultState, action) => {	
	switch(action.type) {
		case constants.GET_DETAIL:
			return state.merge({
				title: fromJS(action.title),
				content: fromJS(action.content)
			})
		default :
			return state;
	}
}