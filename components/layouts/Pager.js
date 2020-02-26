import React, { useRef, useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import t from "prop-types";
import { debounce } from "lodash";

const Wrap = styled.div`
  box-sizing: border-box;
  max-width: 100%;

  .wg--hr_bounce {
    transition-timing-function: cubic-bezier(0.78, 0.05, 0.41, 0.92);
  }

  #page-holder {
    height: 100%;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
    boxsizing: border-box;
    scroll-snap-type: x mandatory;
    transition: height 0.3s ease-out;
    transition-property: all;
    transition-duration: 0.3s;

    &.is-absolute {
      width: 100%;
      position: absolute;
    }

    .page {
      height: 100%;
      flex-shrink: 0;
      margin-left: 0px;
      scroll-snap-align: start;
      display: inline-block;
      box-sizing: border-box;

      &:first-child {
        margin-left: 0;
      }
    }
  }
`;

export const Pager = props => {
  const { current: cp } = props;
  const [height, setHeight] = useState("auto");

  const pages = props.children;
  const slideLeft = useCallback(
    (cp, slider) => slider.current.clientWidth * cp,
    []
  );

  const rootElem = useRef(null);
  const slider = useRef(null);
  const slides = [];
  const addSlideRef = useCallback(
    (ref, index) => {
      slides[index] = ref;
    },
    [slides]
  );

  useEffect(() => {
    if (slider.current) {
      const leftOffset = slideLeft(cp, slider);
      slider.current.scroll({
        top: 0,
        left: leftOffset,
        behavior: "smooth"
      });
    }

    if (props.morph) {
      const resizeHeight = () => {
        if (slides[cp]) {
          let newHeight = slides[cp].clientHeight + "px";
          if (height !== newHeight) setHeight(newHeight);
        }
      };
      debounce(resizeHeight, 500)();
    } else {
      setHeight('auto');
    }
  }, [cp, slides, height, props, slideLeft]);

  return (
    <Wrap ref={rootElem}>
      <section id="page-holder" ref={slider} style={{ height }}>
        {pages.map((child, index) => {
          return (
            <Slide
              key={index}
              ref={ref => addSlideRef(ref, index)}
              width={slider.current ? slider.width + "px" : "100%"}
              isActive={cp == index}
            >
              {child}
            </Slide>
          );
        })}
      </section>
    </Wrap>
  );
};

Pager.propTypes = {
  morph: t.bool,
  current: t.number.isRequired,
  children: t.array.isRequired
};

Pager.defaultProps = {
  current: 0,
  morph: false
};

const Slide = React.forwardRef(function Slide(
  { width, isActive, children },
  ref
) {
  return (
    <section
      className={`page ${isActive ? "pager--active" : ""}`}
      style={{ width }}
    >
      <div ref={ref} className="wg-slider-page px-15">
        {children}
      </div>
    </section>
  );
});

Slide.propTypes = {
  children: t.node,
  isActive: t.bool.isRequired,
  width: t.string.isRequired
};

export default Pager;