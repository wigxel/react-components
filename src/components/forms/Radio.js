import React from "react"
import t from "prop-types"
import styled from "styled-components"
import { themeOr } from "../../libs/styled.helpers"

const theme = themeOr({
	radio: {
		unchecked: "#eee",
		checked: "#705DF5",
		shadow: "rgba(0, 0, 0, .16)",
		pill: { hover: "#f8f8f8" }
	}
})

const RadioStyle = styled.label`
	width: 20px;
	height: 20px;
	display: inline-block;
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
`

export const Radio1 = React.forwardRef(function Radio1Ref(props, ref) {
	return (
		<RadioStyle>
			<input ref={ref} type="radio" {...props} />
			<span />
		</RadioStyle>
	)
})

export const RadioLabel = (props) => {
	return (
		<Radio.Pill>
			<Radio1 {...props} />
			<span>&nbsp;&nbsp;{props.label}</span>
		</Radio.Pill>
	)
}

RadioLabel.defaultProps = {
	label: "Something",
}

RadioLabel.propTypes = {
	label: t.string.isRequired,
}

const CheckboxStyle = styled(RadioStyle)`
	margin-right: 5px;
	cursor: pointer;

	> input + span {
		border-radius: 2px;
	}
`

export const Checkbox1 = React.forwardRef(function Checkbox1Ref(props, ref) {
	return (
		<CheckboxStyle>
			<input ref={ref} type="checkbox" {...props} />
			<span />
		</CheckboxStyle>
	)
})

const StyledLabel = styled.label`
  span {
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
    box-sizing: border-box;
    margin-right: .5rem;
    box-shadow: 0 0 0 ${theme("radio.shadow")};
    background-color: ${theme("radio.unchecked")};
    transition: all 0.3s ease-out;
    transition-property: border, box-shadow, background-color;
  }

  input {
    opacity: 0;
    width: 0px;
    height: 0px;
    position: absolute;
    z-index: -1;
    margin: 0;
  }

  input[type="checkbox"] + span {
    border-radius: 4px;
    border: solid 1px rgba(0,0,0,0.16);
  }

  & input[type="checkbox"]:checked + span {
    border: solid 10px ${theme("radio.checked")};
    box-shadow: 0 4px 3px -2px ${theme("radio.shadow")};
  }

  & input[type="radio"]:checked + span {
    background-color: ${theme("radio.checked")};
    box-shadow: 0 4px 3px -2px ${theme("radio.shadow")};
  }
`

export const Radio = React.forwardRef(function RadioRef(props, ref) {
	return (
		<StyledLabel {...props}>
			<input type="radio" ref={ref} name={props.name} />
			<span></span>
		</StyledLabel>
	)
})

export const Checkbox = React.forwardRef(function CheckboxRef(props, ref) {
	return (
		<StyledLabel {...props}>
			<input type="checkbox" ref={ref} name={props.name} />
			<span></span>
		</StyledLabel>
	)
})

Checkbox.propTypes = Radio.propTypes = {
	name: t.string.isRequired
}

Radio.Pill = styled.div`
  cursor: default;
  vertical-align: top;
  padding: 0.5rem;
  display: flex;
  padding-right: 1rem;
  border-radius: 2rem;
  display: inline-flex;
  transition: background-color 0.3s ease-out;

  &:hover,
  &:focus-within {
    background-color: ${theme("radio.pill.hover")};
  }
`
