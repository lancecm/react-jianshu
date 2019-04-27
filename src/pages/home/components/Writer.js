import React, { PureComponent } from 'react';
import { WriterWrapper, WriterList } from '../style'

class Writer extends PureComponent {
	render() {
		return (
			<WriterWrapper>
				<div className='title'>
					<span>推荐作者</span>
					<a href='/' className='change'>换一批</a>
				</div>
				<WriterList>
					<li className='writer'>
						<a href='/' className='avater'>
							<img className='img' alt='' src='https://upload.jianshu.io/users/upload_avatars/3292545/78f2855a-80fd-419a-9fb2-1aeed39690f0.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'/>
						</a>
						<a href='/' className='follow'>关注</a>
						<a href='/' className='name'>北美之美</a>
						<p className='intro'>写了400.3k字 · 28.8k喜欢</p>
					</li>
				</WriterList>
			</WriterWrapper>
		)
	}
}

export default Writer;