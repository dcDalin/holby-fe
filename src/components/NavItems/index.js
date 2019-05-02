import React from 'react';
import styled from 'styled-components';

const NavItemsContainer = styled.div`
  display: inline-block;
  height: 40px;
  position: relative;
  left: 22%;
  color: #9e9e9e;
`;
const LinkNavItems = styled.div`
  display: inline-block;
  font-size: 15px;
  letter-spacing: 2px;
  margin-left: 25px;
  cursor: pointer;
  color: black;
`;

const NavItems = () => (
  <NavItemsContainer>
    <LinkNavItems>about</LinkNavItems>
    <LinkNavItems>products</LinkNavItems>
    <LinkNavItems>services</LinkNavItems>
    <LinkNavItems>portfolio</LinkNavItems>
    <LinkNavItems>blog</LinkNavItems>
    <LinkNavItems>store</LinkNavItems>
  </NavItemsContainer>
);

export default NavItems;
