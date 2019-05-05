import { Grommet } from 'grommet';
import React from 'react';
import Router from '../Router';

const theme = {
  global: {
    colors: {
      brand: 'rgba(228, 43, 25, 1.0)',
      fadeGreen: 'rgba(17, 119, 85, 0.1)',
    },
    font: {
      family: 'Montserrat',
    },
    anchor: {
      fontWeight: 600,
      hover: {
        textDecoration: 'underline dotted',
        fontWeight: 600,
      },
    },
  },
};

const App = () => {
  return (
    <Grommet theme={theme}>
      <Router />
    </Grommet>
  );
};
export default App;
