import React from 'react';
import styled from 'styled-components';
import { GlobalStyle, Theme } from '../../theme';

const Heading = styled.h1`
  ${({ theme }) => theme.mobile`
      color: red;
   `}
`;

const App = () => {
  return (
    <Theme>
      <>
        <Heading>Hello</Heading>
        <GlobalStyle />
      </>
    </Theme>
  );
};

export default App;
