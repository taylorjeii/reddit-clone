import React, { Component } from 'react';
import styled from 'styled-components';

import { auth } from '../firebase';
import TextInput from './FormControls/TextInput';
import SubmitButton from './FormControls/SubmitButton';
import ErrorNotification from './FormControls/ErrorNotification';

const INITIAL_STATE = {
  email: '',
  error: null,
  password: ''
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

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    // sign user in
    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        this.props.history.push('/posts');
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <Form onSubmit={this.onSubmit}>
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
        <SubmitButton disabled={isInvalid} type="submit" text="Sign In" />
        <ErrorNotification error={error} />
      </Form>
    );
  }
}

export default SignInForm;
