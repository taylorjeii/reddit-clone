import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const INITIAL_STATE = {
  email: '',
  error: null,
  password: '',
  passWordConfirm: '',
  username: ''
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, password, passWordConfirm } = this.state;

    // create new user
    auth
      .doCreateUserWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  };

  render() {
    const { username, email, password, passWordConfirm, error } = this.state;
    const isInvalid = password !== passWordConfirm || password === '' || email === '' || username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <input
          value={passWordConfirm}
          onChange={event => this.setState(byPropKey('passWordConfirm', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />

        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default SignUpForm;
