import { combineReducers } from 'redux';

import { reducer as headerReducer } from '../common/header/store'

const reducer = combineReducers({
	header: headerReducer, // header是给headerReducer起的名字
})

export default reducer;