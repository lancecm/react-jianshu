import Loadable from 'react-loadable';
import React from 'react';
const LoadableComponent = Loadable({
  loader: () => import('./'),  // 加载对象为当前目录下的Detail组件
  loading() {
	return <div>正在加载</div>; // 正在加载时显示的页面
  }
});
 
export default () => <LoadableComponent/>;