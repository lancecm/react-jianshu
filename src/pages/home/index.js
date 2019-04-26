import React, { Component } from 'react';
import { HomeWrapper,
	HomeLeft,
	HomeRight,
} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import Download from './components/Download';
import axios from 'axios';
import { connect } from 'react-redux';

class Home extends Component {
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className='banner-img' alt=''
					src='https://upload.jianshu.io/admin_banners/web_images/4645/2082eac837471d244b9d319da17bdf5580db9ff0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
					<Topic></Topic>
					<List></List>
				</HomeLeft>
				<HomeRight>
					<Recommend></Recommend>
					<Download></Download>
					<Writer></Writer>
				</HomeRight>
			</HomeWrapper>
		)
	}

	componentDidMount() {
		axios.get('/api/home.json').then((res)=> {
			const data = res.data.data;
			console.log(data);
			const action = {
				type: 'change_home_data',
				topicList: data.topicList,
				articleList: data.articleList,
				recommendList: data.recommendList,
			};
			this.props.changeHomeData(action);
		});

	}
}

const mapDisPatch = (dispatch) => ({
	changeHomeData(action) {
		dispatch(action);
	},
});

export default connect(null, mapDisPatch)(Home);