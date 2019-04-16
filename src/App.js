import React, { Fragment, Component } from 'react';
import Header from './common/header'
import { GlobalStyle } from './style'
import { GlobalStyleIconFont } from './statics/iconfont/iconfont'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <GlobalStyleIconFont />
        <Header />
      </Fragment>
    );
  }
}

export default App;
