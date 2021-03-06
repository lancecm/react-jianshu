import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
	type: constants.CHANGE_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length / 10),
});

export const searchFocusAction = () => ({
	type: constants.SEARCH_FOCUS,
});

export const searchBlurAction = () => ({
	type: constants.SEARCH_BLUR,
});

export const getListAction = () => {
	return (dispatch) => {
		axios.get('/api/headerList.json')
		.then((res) => {
			dispatch(changeList(res.data.data));
		})
		.catch(() => {
			console.log('error');
		});
	}
}

export const mouseEnterAction = () => ({
	type: constants.MOUSE_ENTER,
})

export const mouseLeaveAction = () => ({
	type: constants.MOUSE_LEAVE,
})

export const changePageAction = () => ({
	type: constants.CHANGE_PAGE,
})