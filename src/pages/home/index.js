import React, { PureComponent } from 'react';
import { 
	HomeWrapper,
	HomeLeft,
	HomeRight,
} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import Download from './components/Download';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { BackTop } from './style';

class Home extends PureComponent {
	handleScrollTop() {
		window.scrollTo(0, 0);
	}

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
				{ this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
			</HomeWrapper>
		)
	}

	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}

	componentWilUnmount() {
		window.removeEventLisener('scroll', this.props.changeScrollTopShow);
	}
}

const mapState = (state) => ({
	showScroll: state.getIn(['home', 'showScroll']),
})

const mapDisPatch = (dispatch) => ({
	changeHomeData() {
		dispatch(actionCreators.getHomeInfo());
	},
	changeScrollTopShow(e) {
		const dis = document.documentElement.scrollTop;
		if (dis > 300) {
			dispatch(actionCreators.toggleUpShow(true));
		} else {
			dispatch(actionCreators.toggleUpShow(false))
		}
	}
});

export default connect(mapState, mapDisPatch)(Home);
