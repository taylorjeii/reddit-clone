import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { auth } from '../firebase';

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
        <FormField>
          <Input
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            placeholder="Email"
          />
        </FormField>
        <FormField>
          <Input
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            type="password"
            placeholder="Password"
          />
        </FormField>
        <SignInBtn disabled={isInvalid} type="submit">
          Sign In
        </SignInBtn>
        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}

export default SignInForm;
