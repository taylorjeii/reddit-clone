import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { auth } from '../firebase';
import TextInput from './FormControls/TextInput';

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
const Input = styled.input`
  border: none;
  display: block;
  font-size: 1rem;
  height: 30px;
  outline: none;
  width: 100%;
`;

const FormField = styled.div`
  background: #fff;
  margin-bottom: 0.5rem;
  padding: 5px 24px;
  width: 100%;
`;

const SignInBtn = styled.button`
  background: #598234;
  border: 1px solid #598234;
  color: #fff;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.2rem;
  letter-spacing: 1px;
  margin: 1rem 0.5rem;
  padding: 1rem;
  text-decoration: none;
  transition: all 0.2s ease-out;

  &:hover {
    border-color: #fff;
    cursor: pointer;
  }
`;

const ErrorMessage = styled.p`
  color: #fff;
  padding: 1rem;
  background: #ff0033;
  margin: 0;
`;

const ErrorWrapper = styled.div`
  position: absolute;
  top: 0;
`;

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, password, passWordConfirm } = this.state;

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
        <SignInBtn disabled={isInvalid} type="submit">
          Sign In
        </SignInBtn>

        <ErrorWrapper>{error && <ErrorMessage>{error.message}</ErrorMessage>}</ErrorWrapper>
      </Form>
    );
  }
}

export default SignInForm;
