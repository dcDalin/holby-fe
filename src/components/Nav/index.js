import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  ${({ theme }) => theme.mobile`
      color: red;
   `}
`;

const Nav = () => {
  return <Heading>This is the Navigation</Heading>;
};

export default Nav;
