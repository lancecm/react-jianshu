import React, { Component } from 'react';
import { WriterWrapper, WriterList } from '../style'

class Writer extends Component {
	render() {
		return (
			<WriterWrapper>
				<div className='title'>
					<span>推荐作者</span>
					<a className='change'>换一批</a>
				</div>
				<WriterList>
					<li className='writer'>
						<a className='avater'>
							<img className='img' alt='' src='https://upload.jianshu.io/users/upload_avatars/3292545/78f2855a-80fd-419a-9fb2-1aeed39690f0.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'/>
						</a>
						<a className='follow'>关注</a>
						<a className='name'>北美之美</a>
						<p className='intro'>写了400.3k字 · 28.8k喜欢</p>
					</li>
				</WriterList>
			</WriterWrapper>
		)
	}
}

export default Writer;