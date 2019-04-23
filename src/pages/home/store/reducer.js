import { fromJS } from 'immutable'; // JS object -> immutable object

const defaultState = fromJS({
	topicList: [{
		id: 1,
		title: '社会热点',
		imgUrl: 'https://upload-images.jianshu.io/upload_images/2100084-cefc9b097be382ab?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp',
	},
	{
		id: 2,
		title: '手绘',
		imgUrl: 'https://upload-images.jianshu.io/upload_images/14715425-49e1dccf1fcf51da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp',
	},
	]
})

export default (state = defaultState, action) => {
	switch(action.type) {
		default:
			return state;
	}
}