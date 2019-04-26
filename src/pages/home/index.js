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
import { connect } from 'react-redux';
import { actionCreators } from './store'

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
		this.props.changeHomeData();
	}
}

const mapDisPatch = (dispatch) => ({
	changeHomeData() {
		const action = actionCreators.getHomeInfo();
		dispatch(action);
	},
});

export default connect(null, mapDisPatch)(Home);