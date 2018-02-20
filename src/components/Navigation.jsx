import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  align-items: center;
  background-color: #505160;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const AppTitle = styled.h1`
  color: #fff;
  font-family: 'Alegreya', serif;
  margin-left: 1rem;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 1rem;
`;

const NavLink = styled(Link)`
  border: 1px solid #fff;
  color: #fff;
  font-family: 'Roboto Condensed', sans-serif;
  letter-spacing: 1px;
  margin: 0 0.5rem;
  padding: 0.5rem;
  text-decoration: none;
  transition: all 0.2s ease-out;

  &:hover {
    border-color: #aebd38;
    color: #aebd38;
  }
`;

const Nav = () => (
  <NavWrapper>
    <AppTitle>Reddit Clone</AppTitle>
    <LinkWrapper>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/add-post">Add Post</NavLink>
      <NavLink to="/sign-up">Sign Up</NavLink>
    </LinkWrapper>
  </NavWrapper>
);

export default Nav;
