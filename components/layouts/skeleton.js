import React from 'react';
import styled from 'styled-components';

const skel = (name) => props => props.theme.skeleton[name]

const SkeletonStyle = styled.div`
  background-size: 200px;
  animation: skeleton 2s running infinite forwards linear;
  background: linear-gradient(90deg, ${skel('from')}, ${skel('to')}, ${skel('from')});

  @keyframes skeleton {
    0% {
      background-position-x: 0px;
    }

    25% {
      background-position-x: 50px;
    }

    50% {
      background-position-x: 250px;
    }
    75% { background-position-x: 250px }
    100% { background-position-x: 250px }
  }
`;

export const SkeletonWrapper = props => {
  const { width, height } = props;
  return <SkeletonStyle {...props} style={{ width, height }} />;
};
