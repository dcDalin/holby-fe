import React from 'react';
import { GlobalStyle, Theme } from '../../theme';
import Router from '../Router';

const App = () => {
  return (
    <Theme>
      <>
        <Router />
        <GlobalStyle />
      </>
    </Theme>
  );
};
export default App;
