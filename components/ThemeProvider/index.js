import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

export const ThemeProvider = ({ theme, children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      {React.Children.only(children)}
    </StyledThemeProvider>
  );
};