import axios from 'axios';
import * as constants from './constants';

const changeHomeData = (data) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: data.topicList,
	articleList: data.articleList,
	recommendList: data.recommendList,
})

// use redux-thunk
export const getHomeInfo = () => {
	return (dispatch)=> {
		axios.get('/api/home.json').then((res)=> {
			const data = res.data.data;
			dispatch(changeHomeData(data));
		});
	}
}