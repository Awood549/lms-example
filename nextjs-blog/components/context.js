import React from 'react';
// import Login from './login.js';

export const LoginContext = React.createContext();

class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {username:'teacher', password:'teach4fun'},
        {username:'student', password:'learn2grow'}
      ],
      currentUser:'',
      loggedIn: false,
      login: this.login,
      logout: this.logout,
    };
  }

  login = user => {
    if(JSON.stringify(user)=== JSON.stringify(this.state.users[0]) || JSON.stringify(user) === JSON.stringify(this.state.users[1])){ 
      this.state.currentUser=user.username;
      console.log(this.state.currentUser)
      this.setLoginState(true);
    }
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