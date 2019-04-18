import React from 'react';
import { connect } from 'react-redux';
import { actionCreators} from './store'
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

const Header = (props) => {

	const { focused, handleInputBlur, handleInputFocus} = props;

	const getListArea = (show) => {
		if (show) {
			return (
				<SearchInfo>
					<SearchInfoTitle>热门搜索
						<SearchInfoSwitch>换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>信息</SearchInfoItem>
						<SearchInfoItem>工作</SearchInfoItem>
						<SearchInfoItem>学习</SearchInfoItem>
						<SearchInfoItem>生活</SearchInfoItem>
						<SearchInfoItem>英语</SearchInfoItem>
						<SearchInfoItem>文化</SearchInfoItem>
						<SearchInfoItem>留学</SearchInfoItem>
					</SearchInfoList>
				</SearchInfo>
			)
		}
		else {

		}
	}
	
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
					{getListArea(focused)}
				</NavSearchWrapper>
			</Nav>
			<Addition>
				<Button className="writting"><span className="iconfont">&#xe615;</span>写文章</Button>
				<Button className="reg">注册</Button>
			</Addition>
		</HeaderWrapper>
	)
}

const mapStateToProp = (state) => {
	return {
		focused: state.getIn(['header', 'focused'])
		// focused: state.get('header').get('focused'),
	}
}

const mapDispatchToProp = (dispatch) => {
	return {
		handleInputFocus() {
			const action = actionCreators.searchFocusAction();
			dispatch(action);
		},
		handleInputBlur() {
			const action = actionCreators.searchBlurAction();
			dispatch(action);
		}
	}
}

export default connect(mapStateToProp, mapDispatchToProp)(Header);