import React from 'react';
import { Button } from 'antd';
import PasswordInput from 'components/input/password';
import styles from './index.module.less';
import { login } from '../../api/user';
import { getQueryObject } from '../../utils';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    const { redirect } = getQueryObject();
    this.redirectUrl = redirect || '/home';
  }

  render() {
    const {
      username, password,
    } = this.state;
    const { history } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.loginForm}>
          <h2>后台管理系统</h2>
          <div className={styles.label}>手机号</div>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              const { value } = e.target;
              this.setState({
                username: value,
              });
            }}
          />
          <div className={styles.label}>密码</div>
          <PasswordInput
            showEye
            className={styles.passwordRow}
            inputClassName={styles.password}
            value={password}
            onChange={(value) => this.setState({ password: value })}
          />
          <Button
            type="primary"
            id="login-btn"
            onClick={async () => {
              const result = await login({ phone: username, password, domId: '#login-btn' });
              if (result) {
                history.replace(this.redirectUrl);
              }
            }}
          >
            登录
          </Button>
          <div className={styles.register}>
            <span
              onClick={() => {
                history.push('/register');
              }}
            >
              注册账号！
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
