import axios from 'axios';
import * as constants from './constants';

export const getDetailAction = (dispatch) => {
		return (dispatch) => {
			axios.get('/api/detail.json').then((res) => {
			const data = res.data.data;
			const action = {
				type: constants.GET_DETAIL,
				title: data.title,
				content: data.content
			}
			dispatch(action);
		})
	}
}