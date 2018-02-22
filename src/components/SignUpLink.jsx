import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Text = styled.p`
  color: #fff;
  font-size: 1rem;
`;

const SignUp = styled(Link)`
  border-bottom: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-decoration: none;
`;

const SignUpLink = () => (
  <Text>
    Don't have an account? {''}
    <SignUp to={routes.SIGN_UP}>Sign Up</SignUp>
  </Text>
);

export default SignUpLink;
