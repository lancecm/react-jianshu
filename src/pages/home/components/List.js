import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore} from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store'; 
import { Link } from 'react-router-dom';

class List extends PureComponent {
	render() {
		const { list, getMoreList, page} = this.props;
		return (
			<div>
				{
					list.map((item, index) => {
						if (item.get('imgUrl')) {
							return (
								<Link to='/detail' key={index}>
									<ListItem>
										<ListInfo>
											<h3 className='title'>{item.get('title')}</h3>
											<p className='desc'>{item.get('desc')}</p>
										</ListInfo>
										<img alt='' className='listItem-pic' src={item.get('imgUrl')}/>
									</ListItem>
								</Link>
							);
						}
						else {
							return (
								<Link to='/detail' key={index}>
									<ListItem>
										<ListInfo>
											<h3 className='title'>{item.get('title')}</h3>
											<p className='desc full'>{item.get('desc')}</p>
										</ListInfo>
									</ListItem>
								</Link>
							);
						}
					})
				}
			<LoadMore onClick={()=>getMoreList(page)}>Load More</LoadMore>
			</div>
		)
	}
}

const mapStateToProp = (state)=> ({
	list: state.getIn(['home', 'articleList']),
	page: state.getIn(['home', 'articlePage']),
});

const mapDispatchToProp = (dispatch)=> ({
	getMoreList(page) {
		dispatch(actionCreators.getMoreList(page));
	},
});

export default connect(mapStateToProp, mapDispatchToProp)(List);
