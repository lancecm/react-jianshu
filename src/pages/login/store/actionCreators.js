import axios from 'axios';
import * as constants from './constants';

const changeLogin = (result) => ({
	type: constants.CHANGE_LOGIN,
	value: true
});


export const loginAction = (account, password) => {
	return (dispatch) => {
		// 为数据模拟方便，使用get
		axios.get('/api/login.json?account='+account+'?password='+password).then((res)=>{
			const result = res.data.data;
			if (result) {
				alert("登录成功");
				dispatch(changeLogin());
			} else {
				alert("登录失败");
			}
		});
	}
}

export const logout = () => ({
	type: constants.LOGOUT,
	value: false
})