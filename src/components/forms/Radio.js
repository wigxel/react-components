import React from "react";
import t from "prop-types";
import styled from "styled-components";
import { themeOr } from "../../libs/styled.helpers";

const theme = themeOr({
  radio: {
    unchecked: "#eee",
    checked: "#705DF5",
    shadow: "rgba(0, 0, 0, .16)",
    pill: { hover: "#f8f8f8" },
  },
});

const RingStyle = styled.label`
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 5px;
  cursor: pointer;
  vertical-align: middle;

  input {
    visibility: hidden;
    width: 0.1px;
    height: 0.1px;
    position: absolute;
    left: -5px;
    border: solid 1px black;
  }

  input + span {
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    padding: 1px;
    background-clip: content-box;
    text-align: center;
    box-sizing: border-box;
    border: solid 1px ${theme("radio.checked")};
  }

  input:checked + span {
    background-color: ${theme("radio.checked")};
  }

  > input[type="checkbox"] + span {
    border-radius: 2px;
  }

  > input[type="radio"] + span {
    border-radius: 999px;
  }
`;

const FillStyle = styled.span`
  span {
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
    box-sizing: border-box;
    margin-right: 0.5rem;
    box-shadow: 0 0 0 ${theme("radio.shadow")};
    background-color: ${theme("radio.unchecked")};
    transition: all 0.3s ease-out;
    transition-property: border, box-shadow, background-color;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
    z-index: -1;
    margin: 0;
  }

  input[type="checkbox"] + span {
    border-radius: 4px;
    border: solid 1px rgba(0, 0, 0, 0.16);
  }

  & input[type="checkbox"]:checked + span {
    border: solid 10px ${theme("radio.checked")};
    box-shadow: 0 4px 3px -2px ${theme("radio.shadow")};
  }

  & input[type="radio"]:checked + span {
    background-color: ${theme("radio.checked")};
    box-shadow: 0 4px 3px -2px ${theme("radio.shadow")};
  }
`;

export const RadioVariants = {
  Ring: RingStyle,
  Fill: FillStyle,
};

export const RadioLabel = (props) => {
  return (
    <Radio.Pill>
      <Radio variant={RingStyle} {...props} />
      <span>&nbsp;&nbsp;{props.label}</span>
    </Radio.Pill>
  );
};

export const Radio = React.forwardRef(function RadioRef(
  { variant, ...props },
  ref
) {
  const Variant = variant ? variant : RadioVariants.Fill;

  return (
    <Variant>
      <input type="radio" ref={ref} name={props.name} {...props} />
      <span></span>
    </Variant>
  );
});

export const Checkbox = React.forwardRef(function CheckboxRef(
  { variant, ...props },
  ref
) {
  const Variant = variant ? variant : RadioVariants.Fill;

  return (
    <Variant>
      <input {...props} type="checkbox" ref={ref} name={props.name} />
      <span></span>
    </Variant>
  );
});

RadioLabel.defaultProps = {
  label: "Something",
};

RadioLabel.propTypes = {
  label: t.string.isRequired,
};

const SharedPropsTypes = {
  name: t.string.isRequired,
  variant: t.func,
};

Checkbox.propTypes = SharedPropsTypes;

Radio.propTypes = SharedPropsTypes;

Radio.Pill = styled.label`
  vertical-align: top;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  border-radius: 2rem;
  display: inline-flex;
  transition: background-color 0.3s ease-out;
  cursor: pointer;

  &:hover,
  &:focus-within {
    background-color: ${theme("radio.pill.hover")};
  }
`;

Radio.Pill.propTypes = {
  htmlFor: t.string.isRequired,
};

/** @deprecated use `<Radio variant={variants.Ring} />` instead
 * **/
export const Radio1 = React.forwardRef(function Checkbox1Ref(props, ref) {
  return <Radio {...props} variant={RadioVariants.Default} ref={ref} />;
});

/** @deprecated use `<Checkbox variant={variants.Ring} />` instead
 * **/
export const Checkbox1 = React.forwardRef(function Checkbox1Ref(props, ref) {
  return <Checkbox {...props} variant={RadioVariants.Ring} ref={ref} />;
});
