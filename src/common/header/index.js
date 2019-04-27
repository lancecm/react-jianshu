import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
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
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { actionCreators as loginActionCreators } from '../../pages/login/store';

class Header extends PureComponent {
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
		const { focused, handleInputBlur, handleInputFocus, list, login, logout} = this.props;
		return (
			<HeaderWrapper> 
				<Link to={'/'}>
					<Logo />
				</Link>
				<Nav>
					<Link to='/'><NavItem className="left active"><i className="iconfont">&#xe69b;</i>首页</NavItem></Link>
					<NavItem className="left"><i className="iconfont">&#xe60f;</i>下载App</NavItem>
					{ login ? 
						<Link onClick={logout}><NavItem className="right">退出</NavItem></Link> : 
						<Link to='/login'><NavItem className="right">登录</NavItem></Link> }
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
					<Link to='/write'><Button className="writting"><span className="iconfont">&#xe615;</span>写文章</Button></Link>
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
		login: state.getIn(['login', 'login']),
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
		},
		logout() {
			dispatch(loginActionCreators.logout());
		}
	}
}

export default connect(mapStateToProp, mapDispatchToProp)(Header);