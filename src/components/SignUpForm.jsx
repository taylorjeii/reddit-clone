import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import TextInput from './FormControls/TextInput';
import SubmitButton from './FormControls/SubmitButton';
import ErrorNotification from './FormControls/ErrorNotification';
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

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
`;

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
      <Form onSubmit={this.onSubmit}>
        <TextInput
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Full Name"
        />
        <TextInput
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email"
        />
        <TextInput
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <TextInput
          value={passWordConfirm}
          onChange={event => this.setState(byPropKey('passWordConfirm', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />

        <SubmitButton disabled={isInvalid} type="submit" text="Sign Up" />
        <ErrorNotification error={error} />
      </Form>
    );
  }
}

export default SignUpForm;
