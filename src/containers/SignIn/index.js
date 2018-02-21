import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import SignInForm from '../../components/SignInForm';
import SignUpLink from '../../components/SignUpLink';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 90px);
  justify-content: center;
`;

const PageTitle = styled.h1`
  color: #fff;
`;

const SignIn = ({ history }) => (
  <Wrapper>
    <PageTitle>Sign In</PageTitle>
    <SignInForm history={history} />
    <SignUpLink />
  </Wrapper>
);

export default withRouter(SignIn);
