import React from 'react';
import { GlobalStyle, Theme } from '../../theme';
import Nav from '../Nav';

const App = () => {
  return (
    <Theme>
      <>
        <Nav />
        <GlobalStyle />
      </>
    </Theme>
  );
};
export default App;
