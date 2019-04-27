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
	width: 282px;
`
// overflow: hidden; 出发BFC
export const TopicWrapper = styled.div`
	padding: 20px 0 10px 0;
	overflow: hidden;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
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

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	height: 125;
	border-bottom: 1px solid #dcdcdc;
	.listItem-pic {
		display: block;
		float: right;
		width: 125px;
		height: 100px;
		border-radius: 10px;
	}
`

export const ListInfo = styled.div`
	float: left;
	line-height: 24px;
	width: 458px;
	height: 72px;
	margin-bottom: 8px;
	.title {
		color: #333;
		font-size: 18px;
		line-height: 27px;
		font-weight: bold;
	}
	.desc {
		color: #999;
		line-height: 24px;
		font-size: 13px;
	}
	.full {
		width: 625px;
	}
`

export const RecommendWrapper = styled.div`
	margin-top: -4px;
    padding-bottom: 4px;

`
export const RecommendItem = styled.a`
	display: block;
	min-height: 50px;
	.img {
		width: 100%;
		border-radius: 4px;
		margin-bottom: 3px;
	}
`
export const WriterWrapper = styled.div`
	width: 280px;
	text-align: middle;
    margin-bottom: 20px;
    font-size: 13px;
    .title span {
		font-size: 14px;
		color: #969696;
	}
    .title {
    	text-align: left;
    }
    .change {
    	float: right;
    	display: inline-block;
    	color: #969696;
    	font-size: 14px;
    }
}
`

export const DownloadWrapper = styled.div`
	border: 1px solid #f0f0f0;
	border-radius: 6px;
	background-color:#fff;
	width: 236px;
	padding: 10px 22px;
	margin-bottom: 25px;
	.qr {
		width: 60px;
    	height: 60px;
    	opacity: .85;
	}
	.info {
		margin-top: -50px;
	    display: inline-block;
	    vertical-align: middle;
	    margin-left: 7px;
	}
	.title {
		font-size: 15px;
		color: #333;
	}
	.desc {
		margin-top: 5px;
	    font-size: 13px;
	    color: #999;
	}
`

export const WriterList = styled.ul`
	margin: 0 0 20px;
    text-align: left;
    list-style: none;
    .writer {
    	margin-top: 15px;
    }
    .avater {
    	float: left;
	    width: 48px;
	    height: 48px;
	    margin-right: 10px;
    }
    .img {
    	width: 100%;
	    height: 100%;
	    border: 1px solid #ddd;
	    border-radius: 50%;
    }
    .follow {
	    float: right;
	    margin-top: 5px;
	    font-size: 13px;
	    color: #42c02e;
    }
    .name {
    	padding-top: 5px;
	    margin-right: 60px;
	    font-size: 14px;
	    display: block;
    }
    .intro {
    	margin-top: 2px;
	    font-size: 12px;
	    color: #969696;
    }
`

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	background: #ddd;
	text-align: center;
	border-radius: 20px;
	margin: 30px 0;
	color: #fff;
	cursor: pointer;
`

