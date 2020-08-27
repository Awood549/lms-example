import React from 'react';
import {LoginContext} from './context.js'

const If = props => {
  return !!props.condition ? props.children : null;
};

class Login extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // e.target.reset();
    console.log(this.state)
    return this.state
  };

  render() {
    return (
      <>
        <If condition={LoginContext.loggedIn}>
          <button onClick={LoginContext.logout}>Log Out</button>
        </If>

        <If condition={!LoginContext.loggedIn}>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="UserName"
              name="username"
              onChange={this.handleChange}
            />
            <input
              placeholder="password"
              name="password"
              onChange={this.handleChange}
            />
            <input type="submit" value="Login" />
          </form>
        </If>
      </>
    );
  }
}

export default Login;