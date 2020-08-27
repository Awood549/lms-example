import React from 'react';

export const LoginContext = React.createContext();

class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {'teacher': 'teach4fun'},
        {'student': 'learn2grow'}
      ],
      loggedIn: false,
      token: token,
      login: this.login,
      logout: this.logout,
    };
  }

  login = user => {
    if(user === this.state.users[0] || user === this.state.users[1])
    this.setLoginState(true);
  };

  logout = () => {
    cookie.remove('auth');
    this.setLoginState(false);
  };

  setLoginState = loggedIn => {
    let token = cookie.load('auth');
    this.setState({ token, loggedIn });
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