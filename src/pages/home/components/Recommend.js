import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';
import { connect } from 'react-redux';
class Recommend extends PureComponent {
	render() {
		const { recommendList } = this.props;
		return (
			<RecommendWrapper>
				{ 
					recommendList.map((item)=>{
						return (
							<RecommendItem key={item.get('id')} href={item.get('href')}>
								<img alt='' className='img' src={item.get('imgUrl')}/>
							</RecommendItem>
						);
					})
				}
			</RecommendWrapper>
		)
	}
}

const mapStateToProp = (state)=> ({
	recommendList: state.getIn(['home','recommendList']),
})

export default connect(mapStateToProp, null)(Recommend);