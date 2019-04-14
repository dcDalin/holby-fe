import PropTypes from 'prop-types';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import media from './media';

const GlobalStyle = createGlobalStyle`
  :root {
    --purp: 25,42,86;
  }
  * {
    margin: 0;
    padding: 0;
  }
  html {
   box-sizing: border-box;
   font-family: 'Montserrat';
  }
  body {
    background-color: rgba(var(--purp), 0.2);
  }
`;

const Theme = ({ children }) => (
  <ThemeProvider
    theme={{
      ...media,
    }}
  >
    {children}
  </ThemeProvider>
);

export { Theme, GlobalStyle };

Theme.propTypes = {
  children: PropTypes.string.isRequired,
};
