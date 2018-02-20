import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import SignUpForm from '../../components/SignUpForm';

const SignUp = ({ history }) => (
  <div>
    <h1>Sign Up</h1>
    <SignUpForm history={history} />
  </div>
);

export default withRouter(SignUp);
