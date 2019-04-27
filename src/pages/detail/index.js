import React, { Component } from 'react';
import { DetailWrapper, Header, Content} from './style'
class Detail extends Component {
	render() {
		return (
			<DetailWrapper>
				<Header>
					“我30岁，刚离职，才发现自己什么都不会”
				</Header>
				<Content>
					<img alt='' src='https://upload-images.jianshu.io/upload_images/15631385-20b1f447c92f4afd?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp'/>
					<p>
						建议你隔段时间就问问自己：你的梦想是什么，你怎样才能离梦想更近一点。
					<p>►简历是一个人的门面，请把它粉饰好每天姐大致总结了一些优秀简历的特点，给小伙伴们做个参考：能用PDF就少用Word；能说主要成就的就不要多说无关紧要的；能按用人单位岗位JD来写简历的，就不要发通用简历；能用数据代表成绩的，就不要用文字。也许有小伙伴会说：每天姐，你这说的不实用，我的简历卡就卡在没有漂亮成绩啊。那你也好意思说？没有成绩你也敢跳槽？</p>
					<p>►给自己至少半年时间，为跳槽作准备如果你现在干的不好，换一份工作也一定不会好。你需要做的是好好待在公司，一门心思做业绩。但是要注意，不是死命干活就能出成绩的。网上有句很火的话叫：废掉一个人最隐蔽的方式，是让他忙到没时间成长。很多人看起来很勤奋，也很忙碌，但过了段时间发现，自己还在原地踏步。</p>
					</p>
				</Content>
			</DetailWrapper>
		)
	}
}

export default Detail;