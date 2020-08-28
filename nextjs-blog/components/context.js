import React from 'react';
import Login from './login.js';

const LoginContext = React.createContext();
class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {'teacher': 'teach4fun'},
        {'student': 'learn2grow'}
      ],
      loggedIn: false,
      login: this.login,
      logout: this.logout,
    };
  }

  login = user => {
    if(user === this.state.users[0] || user === this.state.users[1])
    this.setLoginState(true);
  };

  logout = () => {
    this.setLoginState(false);
  };

  setLoginState = loggedIn => {
    this.setState({loggedIn });
  };

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginProvider;