import React, { PureComponent } from 'react';
import { TopicWrapper, TopicItem} from '../style';
import { connect } from 'react-redux';

class Topic extends PureComponent {
	render() {
		const { topicList } = this.props;
		return (
			<TopicWrapper>
				{
					topicList.map((item) => {
						return (
							<TopicItem key={item.get('id')}>
								<img alt='' src={item.get('imgUrl')} className="topic-pic"/>
								{item.get('title')}
							</TopicItem>
						)
					})
				}
			</TopicWrapper>
		)
	}
}

const mapStateToProp = (state) => {
	return {
		topicList: state.getIn(['home', 'topicList']),
	};
};


// const mapDispatchToProp = (dispatch) => {};

export default connect(mapStateToProp, null)(Topic);