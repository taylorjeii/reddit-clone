import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import SignUpForm from '../../components/SignUpForm';

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

const SignUp = ({ history }) => (
  <Wrapper>
    <PageTitle>Sign Up</PageTitle>
    <SignUpForm history={history} />
  </Wrapper>
);

export default withRouter(SignUp);
