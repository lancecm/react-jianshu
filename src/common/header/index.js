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
						<SearchInfoSwitch onClick={()=> handleChangePage(this.spinIcon)}>
					{/*ref可以传入一个DOM节点*/}
							<i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe606;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			);
		}
	}

	render() {
		const { focused, handleInputBlur, handleInputFocus, list} = this.props;
		return (
			<HeaderWrapper> 
				<Logo />
				<Nav>
					<NavItem className="left active"><i className="iconfont">&#xe69b;</i>首页</NavItem>
					<NavItem className="left"><i className="iconfont">&#xe60f;</i>下载App</NavItem>
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
								onFocus={()=> {handleInputFocus(list)}}
								onBlur={handleInputBlur}
								className={focused ? 'focused' : ''}/>
						</CSSTransition>
						<span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62d;</span>
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
		handleInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getListAction());
			
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
		handleChangePage(spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, ''); // replace not numbers with ''
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			} else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)';
			dispatch(actionCreators.changePageAction());
		}
	}
}

export default connect(mapStateToProp, mapDispatchToProp)(Header);