import React from "react";
import styled, { ThemeProvider as StyledThemeProvider } from "styled-components";

export { css } from 'styled-components'
export const ThemeProvider = ({ theme, children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      {React.Children.only(children)}
    </StyledThemeProvider>
  );
};

export default styled;
