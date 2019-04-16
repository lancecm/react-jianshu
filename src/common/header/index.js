import React from 'react';
import { connect } from 'react-redux';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	NavSearchWrapper,
	Addition,
	Button
} from './style';
import { CSSTransition } from 'react-transition-group'

const Header = (props) => {

	const { focused, handleInputBlur, handleInputFocus} = props;

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
		focused: state.header.focused,
	}
}

const mapDispatchToProp = (dispatch) => {
	return {
		handleInputFocus() {
			const action = {
				type: 'search_focus',
			};
			dispatch(action);
		},
		handleInputBlur() {
			const action = {
				type: 'search_blur',
			};
			dispatch(action);
		}
	}
}

export default connect(mapStateToProp, mapDispatchToProp)(Header);