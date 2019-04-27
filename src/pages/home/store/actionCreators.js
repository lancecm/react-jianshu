import axios from 'axios';
import * as constants from './constants';

const changeHomeData = (data) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: data.topicList,
	articleList: data.articleList,
	recommendList: data.recommendList,
})

const addHomeList = (list, newPage) => ({
	type: constants.ADD_ARTICLE_LIST,
	list: list,
	newPage
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

export const getMoreList = (page) => {
	return (dispatch)=> {
		axios.get('/api/homeList.json?page=' + page).then((res)=> {
			const newList = res.data.data;
			dispatch(addHomeList(newList, page + 1)); 
		});
	}
}

export const toggleUpShow = (show) => ({
	type: constants.TOGGLE_SCROLL_TOP,
	show
})