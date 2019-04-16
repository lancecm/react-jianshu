import React, { Fragment, Component } from 'react';
import Header from './common/header'
import { GlobalStyle } from './style'
import { GlobalStyleIconFont } from './statics/iconfont/iconfont'
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
    	<Provider store={store}>
	      <Fragment>
	        <GlobalStyle />
	        <GlobalStyleIconFont />
	        <Header />
	      </Fragment>
	    </Provider>
    );
  }
}

export default App;
