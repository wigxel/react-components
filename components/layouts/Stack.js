import React from 'react';
import styled, { css } from '../ThemeProvider';
import { withProp } from '../helpers';

const propSizes = [
  ['small', '.5rem'],
  ['medium', '1.5rem'],
  ['large', '2rem']
]

const StackStyle = styled.div`
  padding: 0.1px 0;
  
  ${withProp('noExtraSpace')(css`
    > * {
      margin-top: 0;
      margin-bottom: 0;
    }
  `)}

  > * + * {
    margin-top: 1rem;
  }

  ${propSizes.map(([prop, size]) => withProp(prop)(css`

    > * + * {
      margin-top:  ${size};
    }
  `))}

`;

export const Stack = props => {
  return <StackStyle {...props} />;
};

export default Stack;
