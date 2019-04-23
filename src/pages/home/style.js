import styled from 'styled-components';
export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;
	overflow: hidden;
`

export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	.banner-img{
		width: 625px;
		height: 270px;
	}
`

export const HomeRight = styled.div`
	padding-top: 30px;
	float: right;
	width: 240px;
`
// overflow: hidden; 出发BFC
export const TopicWrapper = styled.div`
	padding: 20px 0 10px 0;
	overflow: hidden;
	margin-left: -18px;
`

export const TopicItem = styled.div`
	float: left;
	background: #f7f7f7;
	margin-left: 18px;
	margin-bottom: 10px;
	height: 32px;
	line-height: 32px;
	padding-right: 10px;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`