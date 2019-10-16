import React from 'react';
import t from 'prop-types';
import styled, { css } from 'styled-components';
import { withProp } from '../helpers';
// import { log } from '../../libs/helpers';

const addChildren = (Cluster) => {
    const C = ({horizontal, vertical, children}) => {
        return <Cluster {...{horizontal, vertical}}>{children}</Cluster> 
    }

    C.propTypes = {
        horizontal: t.bool,
        vertical: t.bool,
        children: t.node.isRequired
    }
    return C
}

const LargeS = styled.span`
    display: inline-block;
    width: 100%;
    padding: 5rem;

    ${withProp('vertical')(css`
        padding-left: 0 !important;
        padding-right: 0 !important;
    `)}

    ${withProp('horizontal')(css`
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    `)}
`
const SmallS = styled(LargeS)`
    padding: 1rem;
`
const MediumS = styled(LargeS)`
    padding: 2.5rem;
`

export const Cluster = addChildren(MediumS)
const Small = addChildren(SmallS)
const Large = addChildren(LargeS)

Cluster.Large = Large;
Cluster.Small = Small;

export default Cluster;