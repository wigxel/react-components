import styled, { css } from '../ThemeProvider';
import { withProp } from '../helpers';

const Outliner = styled.div`
    & > * {
        outline: solid 1px red;
    }
    
    ${withProp('all')(css`
        * {
            outline: solid 1px red;
        }
    `)}
`

export const Outline = Outliner

export default Outliner;