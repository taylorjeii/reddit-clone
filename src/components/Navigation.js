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
  color: #FFF;
  font-family: 'Alegreya', serif; 
  margin-left: 1rem;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 1rem
`;

const NavLink = styled(Link)`
  border: 1px solid #FFF;
  color: #FFF;
  font-family: 'Roboto Condensed', sans-serif;
  letter-spacing: 1px;
  margin: 0 .5rem;
  padding: .5rem;
  text-decoration: none;
  transition: all .2s ease-out;

  &:hover {
    border-color: #AEBD38;
    color: #AEBD38;
  }
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