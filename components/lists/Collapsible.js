import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

// TODO: complete the collapsibla component
//add an morph property

const CollapseStyle = styled.div`
  height: 0;
  padding: 0 0;
  overflow: hidden;
  grid-column: 1 / 3;
  transition: all 0.3s ease-out;

  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    display: block;
  }
`;

export const Collapsible = props => {
  const container = useRef();
  const [height, setHeight] = useState(0);
  const getHeight = el => el.getBoundingClientRect().height;

  useEffect(() => {
    setHeight(props.open ? getHeight(container.current) : 0);
  }, [props.open]);

  return (
    <CollapseStyle {...props} style={{ height }}>
      <div ref={container}>{props.children}</div>
    </CollapseStyle>
  );
};

Collapsible.defaultProps = {
  morph: false
};

export default Collapsible;
