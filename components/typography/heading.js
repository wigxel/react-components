import React from 'react';
import styled from'styled-components';

export const Heading = `
  font-family: var(--heading-font), 'Montserrat', 'Avenir', 'Helvetica Neue', 'Segoe UI' sans-serif;
  color: #555555;

  &.font-light {
      font-weight: 300;
  }
  
  &.font-bold {
      font-weight: 500;
  }
`

export const H1 = styled.h1`
  ${Heading}
  font-size: 45px;
`

export const H2 = styled.h2`
  ${Heading}
  font-size: 35px;
`

export const H3 = styled.h3`
  ${Heading}
  font-size: 25px;
`

export const H4 = styled.h4`
  ${Heading}
  font-size: 18px;
`
