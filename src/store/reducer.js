// 不从redux中，而是从redux-immutable中引入state，则会得到一个immutable的对象
import { combineReducers } from 'redux-immutable';

import { reducer as headerReducer } from '../common/header/store'

const reducer = combineReducers({
	header: headerReducer, // header是给headerReducer起的名字
})

export default reducer;