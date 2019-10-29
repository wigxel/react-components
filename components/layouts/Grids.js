import React from 'react'
import styled from 'styled-components';
import t from 'prop-types';

export const TwoColumns = props => {
  const [aside, section] = props.children;

  return (
    <>
      <div className="flex">
        <div className="w-1/5">{aside}</div>
        <div className="flex-1">{section}</div>
      </div>
    </>
  );
};

export const ThreeColumns = props => {
  const [aside, section, third] = props.children;

  return (
    <section className="flex">
      <aside className="w-1/5">{aside}</aside>
      <section className="flex-1 p-5">{section}</section>
      <aside className="w-1/5">{third}</aside>
    </section>
  );
};

export const FourColumnGrid = props => {
  return <FourColumnGridStyle {...props}>{props.children}</FourColumnGridStyle>;
};

const FourColumnGridStyle = styled.section`
  display: grid;
  grid-gap: 1.5rem;
  position: relative;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
`;

const addPixel = (number) => {
  const isWithoutUnit = RegExp('\\d$').test(number);  
return isWithoutUnit ? number + 'px' : number;
}

const Grid = styled(FourColumnGridStyle)`
  justify-content: flex-start;
  grid-template-columns: repeat(auto-fill, ${a => addPixel(a.width)});
`;

export const GridView = props => <Grid {...props} />;
GridView.defaultProps = {
  width: 200
};
GridView.propTypes = {
  width: t.oneOfType([t.number, t.string]).isRequired,
}