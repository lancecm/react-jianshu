import axios from 'axios';
import * as constants from './constants';

const changeHomeData = (data) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: data.topicList,
	articleList: data.articleList,
	recommendList: data.recommendList,
})

const addHomeList = (list) => ({
	type: constants.ADD_ARTICLE_LIST,
	list: list
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

export const getMoreList = () => {
	return (dispatch)=> {
		axios.get('/api/homeList.json').then((res)=> {
			const newList = res.data.data;
			dispatch(addHomeList(newList));
		});
	}
}