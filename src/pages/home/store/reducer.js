import { fromJS } from 'immutable'; // JS object -> immutable object

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: []
})

export default (state = defaultState, action) => {
	switch(action.type) {
		case 'change_home_data':
			console.log(action);
			console.log(action.articleList);
			return state.merge({
				'topicList': fromJS(action.topicList),
				'articleList': fromJS(action.articleList),
				'recommendList': fromJS(action.recommendList)
			})
		default :
			return state;
	}
}