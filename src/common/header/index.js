import React, {Component} from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	NavSearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList,
	Addition,
	Button
} from './style';
import { CSSTransition } from 'react-transition-group'

class Header extends Component {
	getListArea() {
		const { focused, list, page, mouseEnter, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
		const pageList = [];
		const newList = list.toJS(list); // change to JS object
		
		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				if (newList[i]){
					pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>);
				}				
			}
		}

		if (focused || mouseEnter) {
			return (
				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>热门搜索
						<SearchInfoSwitch onClick={handleChangePage}>换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			);
		}
	}

	render() {
		const { focused, handleInputBlur, handleInputFocus} = this.props;
		return (
			<HeaderWrapper> 
				<Logo />
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载App</NavItem>
					<NavItem className="right">登录</NavItem>
					<NavItem className="right">
						<span className="iconfont">&#xe636;</span>
					</NavItem>
					<NavSearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch 
								onFocus={handleInputFocus}
								onBlur={handleInputBlur}
								className={focused ? 'focused' : ''}/>
						</CSSTransition>
						<span className={focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</span>
						{this.getListArea()}
					</NavSearchWrapper>
				</Nav>
				<Addition>
					<Button className="writting"><span className="iconfont">&#xe615;</span>写文章</Button>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		);
	}
}

const mapStateToProp = (state) => {
	return {
		focused: state.getIn(['header', 'focused']),
		// focused: state.get('header').get('focused'),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		mouseEnter: state.getIn(['header', 'mouseEnter']),
	}
}

const mapDispatchToProp = (dispatch) => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.getListAction());
			dispatch(actionCreators.searchFocusAction());
		},
		handleInputBlur() {
			const action = actionCreators.searchBlurAction();
			dispatch(action);
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnterAction());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeaveAction());
		},
		handleChangePage() {
			dispatch(actionCreators.changePageAction());
		}
	}
}

export default connect(mapStateToProp, mapDispatchToProp)(Header);