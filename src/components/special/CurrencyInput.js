import React, { useState } from "react"
import t from "prop-types"
import styled, { css } from "styled-components"
import { replace, compose } from "ramda"
import Naira from "../../assets/svgs/naira_symbol.svg"
import { color } from "../../libs/styled.helpers"
import { fullWidth } from "../../libs/styled.helpers"
import { numberFormat } from "../../libs/numbers/currency.js"

const InputStyle = styled.div`
  height: 40px;
  min-width: 250px;
  box-sizing: border-box;
  padding: 0 1rem;
  align-items: center;
  border-radius: 12px;
  display: inline-flex;
  background-color: white;
  border: solid 1px transparent;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  img {
    width: 30px;
    height: 30px;
  }

  > input {
    margin: 0;
    flex: 1 0;
    max-width: calc(100% - 30px);
    font-size: 1.2rem;
    text-align: right;
    line-height: 30px;
    outline: none;
    appearance: none;
    border: none;
    font-family: var(--input-font);
  }

  ${(props) =>
		props.focus &&
		css`
			border: solid 1px ${color("primary")};
		`}
  ${fullWidth()}

  ${(props) =>
		props.large &&
		css`
			height: 50px;
			img {
				height: 40px;
			}
			input {
				font-size: 1.7rem;
			}
		`}
`

const INVALID_MESSAGE = "Invalid Number provided"
const validateInput = (evt) => {
	const char = parseInt(evt.key)
	const allowedCodes = [8, 9, 190, 37, 38, 39, 40]
	// log(evt.keyCode);
	if (allowedCodes.includes(evt.keyCode) || !Object.is(NaN, +char)) return
	// log('I prevented');
	evt.preventDefault()
}

const handleNaN = (fn) => (value) => {
	if (value !== "NaN") return value
	fn()
	return 0
}
export const clean = replace(/,/gm, "")

export const CurrencyInput = React.forwardRef((props, ref) => {
	const [prop, setProp] = useState({
		value: "",
	})
	const [focus, setFocus] = useState(false)

	const allProps = { ...props, focus }
	const formatValue = compose(
		// trace('returning to zero(0)'),
		handleNaN(() => props.isInvalid(INVALID_MESSAGE)),
		numberFormat,
		clean
	)

	return (
		<InputStyle {...allProps}>
			<img src={Naira} alt="cur" title="currency" />
			<input
				type="text"
				ref={ref}
				name={props.name}
				placeholder="0.0"
				value={prop.value}
				onKeyDown={(evt) => {
					evt.keyCode === 13 ? evt.target.blur() : validateInput(evt)
				}}
				onChange={({ target }) =>
					setProp({
						value: clean(target.value),
					})
				}
				onFocus={({ target }) => {
					setFocus(true)
					setProp({
						value: clean(target.value),
					})
				}}
				onBlur={({ target }) => {
					setFocus(false)
					setProp({
						value: formatValue(target.value),
					})
				}}
			/>
		</InputStyle>
	)
})

CurrencyInput.defaultProps = {
	isInvalid: (message) => {
		throw Error(message)
	},
	large: false,
	name: "wg-input",
	fullWidth: false,
}

CurrencyInput.propTypes = {
	isInvalid: t.func,
	name: t.string.isRequired,
}

export default CurrencyInput
