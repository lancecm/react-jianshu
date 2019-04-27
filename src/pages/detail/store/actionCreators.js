import axios from 'axios';
import * as constants from './constants';

export const getDetailAction = (id) => {
		return (dispatch) => {
			console.log(id);
			axios.get('/api/detail.json?id=' + id).then((res) => {
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