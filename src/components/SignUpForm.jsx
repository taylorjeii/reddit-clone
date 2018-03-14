import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as routes from '../constants/routes';
import TextInput from './FormControls/TextInput';
import SubmitButton from './FormControls/SubmitButton';
import ErrorNotification from './FormControls/ErrorNotification';
import { auth } from '../firebase';

const INITIAL_STATE = {
  email: '',
  error: null,
  password: '',
  passWordConfirm: '',
  name: ''
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
    const { email, password, name } = this.state;

    // create new user
    auth
      .doCreateUserWithEmailAndPassword(email, password, name)
      .then(user => {
        if (!user.displayName) {
          user.updateProfile({
            displayName: name
          });
        }
        this.setState(() => ({ ...INITIAL_STATE }));
        this.props.history.push(`${routes.HOME}`);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  };

  render() {
    const { name, email, password, passWordConfirm, error } = this.state;
    const isInvalid =
      password !== passWordConfirm || password === '' || email === '' || name === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <TextInput
          value={name}
          onChange={event => this.setState(byPropKey('name', event.target.value))}
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
SignUpForm.propTypes = {
  history: PropTypes.object.isRequired
};

export default SignUpForm;
