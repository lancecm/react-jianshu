// 不从redux中，而是从redux-immutable中引入state，则会得到一个immutable的对象
import { combineReducers } from 'redux-immutable';

import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer} from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'

const reducer = combineReducers({
	header: headerReducer, // header是给headerReducer起的名字
	home: homeReducer,
	detail: detailReducer
})

export default reducer;