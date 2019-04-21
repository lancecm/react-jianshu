import React, { Fragment, Component } from 'react';
import Header from './common/header'
import { GlobalStyle } from './style'
import { GlobalStyleIconFont } from './statics/iconfont/iconfont'
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';


class App extends Component {
  render() {
    return (
    	<Provider store={store}>
	      <Fragment>
	        <GlobalStyle />
	        <GlobalStyleIconFont />
	        <Header />
	        <BrowserRouter>
        		<div>
		        	<Route path='/' exact render={()=>{return <div>home</div>;}}></Route>
		        	<Route path='/detail' exact render={()=><div>detail</div>}></Route>
	        	</div>
	        </BrowserRouter>
	      </Fragment>
	    </Provider>
    );
  }
}

export default App;
