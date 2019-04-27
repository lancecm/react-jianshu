import React, { Component } from 'react';
import { ListItem, ListInfo, LoadMore} from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store' 
class List extends Component {
	render() {
		const { list, getMoreList } = this.props;
		return (
			<div>
				{
					list.map((item) => {
						if (item.get('imgUrl')) {
							return (
								<ListItem key={item.get('id')}>
									<ListInfo>
										<h3 className='title'>{item.get('title')}</h3>
										<p className='desc'>{item.get('desc')}</p>
									</ListInfo>
									<img alt='' className='listItem-pic' src={item.get('imgUrl')}/>
								</ListItem>
							);
						}
						else {
							return (
								<ListItem key={item.get('id')}>
									<ListInfo>
										<h3 className='title'>{item.get('title')}</h3>
										<p className='desc full'>{item.get('desc')}</p>
									</ListInfo>
								</ListItem>
							);
						}
					})
				}
			<LoadMore onClick={getMoreList}>Load More</LoadMore>
			</div>
		)
	}
}

const mapStateToProp = (state)=> ({
	list: state.getIn(['home', 'articleList'])
});

const mapDispatchToProp = (dispatch)=> ({
	getMoreList() {
		dispatch(actionCreators.getMoreList());
	},
});

export default connect(mapStateToProp, mapDispatchToProp)(List);
