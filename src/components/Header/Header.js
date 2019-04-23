import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const HeaderWrapper = styled.header`
  display: grid;
  height: 120px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  grid-template-areas:
    'space top top top top space2'
    'space logo nav nav signup-login space2';
  background-color: red;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav />
    </HeaderWrapper>
  );
};

export default Header;
