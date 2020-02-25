import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Light } from './Theme';

const GlobalStyle = createGlobalStyle`
	:root {
		--heading-font: 'Poppins';
	}

  body {
    font-family: PT Sans, Lato, "Segoe UI", sans-serif;
  }
`;

export const Theme = props => (
  <ThemeProvider theme={Light}>
    <Router>
      {props.children}
      <GlobalStyle />
    </Router>
  </ThemeProvider>
);
