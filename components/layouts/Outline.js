import styled, { css } from 'styled-components';
import { withProp } from '../helpers';

const outlineColor = props => props.color || 'orange';

const Outliner = styled.div`
    & > * {
        outline: solid 1px ${outlineColor};
    }

    ${withProp('all')(css`
        * {
            outline: solid 1px ${outlineColor};
        }
    `)}
`

export const Outline = Outliner

export default Outliner;