import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import SignInForm from '../../components/SignInForm';
import SignUpLink from '../../components/SignUpLink';

const SignIn = ({ history }) => (
  <div>
    <h1>Sign Up</h1>
    <SignInForm history={history} />
    <SignUpLink />
  </div>
);

export default withRouter(SignIn);
