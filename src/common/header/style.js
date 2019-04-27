import styled from 'styled-components';
import logoPic from '../../statics/logo.png'; // webpack会帮忙打包图片到当前文件夹下

export const HeaderWrapper = styled.div`
	margin: 0px 0px 0px 0px
	position: relative;
	height: 56px;
	border-bottom: 1px solid #f0f0f0
`

// url(${logoPic}) 是一个多行文本嵌变量的语法
export const Logo = styled.div`
	position: absolute;
	display: block;
	height: 56px;
	width: 100px;
	top: 0;
	left: 0;
	background: url(${logoPic});
	background-size: contain;
`

export const Nav = styled.div`
	width: 945px;
	height:56px;
	padding-right: 70px;
	box-sizing: border-box;
	margin: 0 auto; 
`

// 如果className有left，向左浮动；有right，向右浮动
export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	color: #333;
	font-size: 17px;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`

export const NavSearchWrapper = styled.div`
	position: relative;
	float: left;
	.zoom {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 30px;
		text-align: center;
		&.focused{
			background: #777;
			color: #fff;
		}
	}
}
`

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px;
	height: 38px;
	padding: 0 20px 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #777;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 240px;
	}
	&.slide-enter {
		width: 160px;
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit{
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
`

export const SearchInfo = styled.div`
	margin-left: 20px;
	position: absolute;
	left: 0;
	top: 56px;
	width: 220px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
	background: #fff;
`

export const SearchInfoTitle = styled.div`
	color: #969696;
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
`

export const SearchInfoSwitch = styled.span`
	float: right;
	color: #969696;
	font-size: 13px;
	cursor: pointer;
	.spin {
		display: block;
		float: left;
		font-size: 13px;
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center;
	}
`

export const SearchInfoList = styled.div`
	overflow: hidden;
`

export const SearchInfoItem = styled.a`
	color: #787878;
	font-size: 12px;
	padding: 0 5px;
	line-height: 20px;
	border: 1px solid #969696;
	border-radius: 3px;
	display: block;
	float: left;
	margin-right: 10px;
	margin-bottom: 15px;
`


export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`

export const Button = styled.div`
	float: right;
	line-height: 38px;
	margin-right: 20px;
	padding: 0 20px;
	border-radius: 19px;
	margin-top: 9px;
	border: 1px solid #ec6149;
	font-size: 14px;
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`