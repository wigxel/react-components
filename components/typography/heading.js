import React from 'react';
import styled from'styled-components';

export const Heading = styled.span`
  font-family: var(--heading-font, 'Avenir', 'Helvetica Neue', 'Segoe UI', sans-serif);
  font-weight: ${props => props.bold ? 'bold' : (props.light ? '300' : '400' )};
  font-size: ${props => props.$fontSize};
`

export const H1 = (props) => <Heading {...props} as="h1" $fontSize="43px" />

export const H2 = (props) => <Heading {...props} as="h2" $fontSize="35px" />

export const H3 = (props) => <Heading {...props} as="h3" $fontSize="25px" />

export const H4 = (props) => <Heading {...props} as="h4" $fontSize="18px" />
