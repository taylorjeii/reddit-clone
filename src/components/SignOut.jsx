import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import * as routes from '../constants/routes';
import { auth } from '../firebase';

const SignOutBtn = styled.a`
  border: 1px solid #598234;
  background: #598234;
  color: #fff;
  font-family: 'Roboto Condensed', sans-serif;
  letter-spacing: 1px;
  margin: 0 0.5rem;
  padding: 0.5rem;
  text-decoration: none;
  transition: all 0.2s ease-out;

  &:hover {
    border-color: #fff;
    cursor: pointer;
  }
`;

const SignOutButton = ({ history }) => {
  const signUserOut = () => {
    auth.doSignOut();
    history.push(`${routes.HOME}`);
  };
  return (
    <SignOutBtn type="button" onClick={() => signUserOut()}>
      Sign Out
    </SignOutBtn>
  );
};
export default withRouter(SignOutButton);
