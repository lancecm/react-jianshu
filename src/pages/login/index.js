import React, { PureComponent } from 'react';
import { LoginWrapper, LoginBox, Input, Button} from './style'
import { connect } from 'react-redux';
// import { actionCreators } from './store';

class Login extends PureComponent {
	render() {
		return (
			<LoginWrapper>
				<LoginBox>
					<Input placeholder='账号'></Input>
					<Input placeholder='密码'></Input>
					<Button>登录</Button>
				</LoginBox>
			</LoginWrapper>
		);
	}
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});

export default connect(null, null)(Login);