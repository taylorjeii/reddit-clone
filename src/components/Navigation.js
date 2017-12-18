import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #505160;
  width: 100%;
`;

const AppTitle = styled.h1`
  color: #FFF;
  font-family: 'Alegreya', serif; 
  margin-left: 1rem;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  letter-spacing: 1px;
  font-family: 'Roboto Condensed', sans-serif;
  color: #fff;
`;

const Nav = () => (
  <NavWrapper>
    <AppTitle>Reddit Clone</AppTitle>
    <LinkWrapper>
      <NavLink to="/addpost">Add Post</NavLink>
      <NavLink to="/posts">Posts</NavLink>
    </LinkWrapper>
  </NavWrapper>
);

export default Nav;