import React, { useState } from "react"
import t from "prop-types"
import styled, { css } from "styled-components"
import {
	curry,
	curryN,
	pickBy,
	__,
	contains,
	nthArg,
	compose,
	not,
} from "ramda"
import { withProp, themeOr, propIs } from "../../libs/styled.helpers"
import { fullWidth } from "../../libs/styled.helpers"

const theme = themeOr({
	border: {
		gray: "#e1e1e1",
		width: "1px",
	},
})

const blacklist = ["fullwidth", "icon"]
const removeBacklist = pickBy(compose(not, contains(__, blacklist), nthArg(1)))
const disabled = propIs("disabled", (x) => x == true)
const sharedFocusStyle = css`
	width: 100%;
	border: solid ${theme("border.width")} ${theme("border.gray")};
	background: #ffffff;
	box-sizing: border-box;
	border-radius: 16px;
	position: relative;
	cursor: text;
	transition: all 0.3s ease-out;

	&,
	input,
	textarea,
	select,
	button {
		font-family: var(--input-font);
		font-size: 1rem;
	}

	.wg-label {
		top: calc(30px / 2);
		left: 10px;
		line-height: 20px;
		padding: 0 0.5rem;
		position: absolute;
		border-radius: 20px;
		display: inline-block;
		background-color: white;
		transition: all 0.3s ease-out;
	}

	${withProp(
		"hasIcon",
		css`
			input,
			textarea {
				text-indent: 15px;
			}
			select {
				text-indent: 5px;
			}
			.wg-label {
				color: black;
				transform: translateX(1.8rem);
			}
		`
	)}

	${withProp("focused")(css`
		border-color: ${theme("primary")};

		.wg-label {
			font-size: 0.9rem;
			padding: 0 0.5rem;
			color: ${theme("primary")};
			transform: translate(0, -120%);
		}
	`)}

	${disabled(css`
		border: none;
		background-color: whitesmoke;

		> .wg-label {
			opacity: 0.5;
			background-color: transparent;
		}
	`)}
`

const MainWrapper = styled.div`
	min-width: 250px;
	display: inline-block;
	flex-direction: column;
	${fullWidth}
`

const InputStyle = styled.label`
	display: flex;
	margin-top: 10px;
	align-items: center;
	padding: 0.5rem 1rem;
	box-sizing: border-box;

	${withProp("options")(css`
		&::after {
			content: "";
			width: 12px;
			height: 12px;
			flex: 0 0 12px;
			right: 15px;
			position: absolute;
			pointer-events: none;
			border: solid 1px ${theme("primary")};
			transform: rotate(45deg) translate(-25%);
			border-color: transparent #308ddb #308ddb transparent;
		}
	`)};

	&,
	& > * {
		transition: all 0.3s ease-out;
	}

	${sharedFocusStyle}

	input, select {
		outline: none !important;
		border: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		width: 100%;
		min-height: 30px;
		align-self: stretch;
		background: transparent;
	}

	input[type="number"] {
		text-align: right;
	}

	.icn {
		flex: 1 0 0;
		max-width: 30px;
	}
`

export const TextWrapper = styled.div`
	flex: 1;
	width: auto;

	${sharedFocusStyle}
	${withProp("focused")(css`
		.wg-label {
			font-size: 0.9rem;
		}
	`)}

  textarea {
		max-width: 100%;
		resize: vertical;
		border: none;
		width: 100%;
		outline: none;
		box-sizing: border-box;
		min-width: 240px;
		padding: 1rem 1.5rem;
		background: transparent;
	}
`

export const Labelled = {}

const canFocus = (props) => props.placeholder

export const createInput = curry((fn, initialState) => {
	return React.forwardRef(function InputWrapper(props, ref) {
		const [state, setState] = useState({
			focus: canFocus(props),
			...initialState,
		})

		const inputRef = ref ? ref : React.useRef()

		const action = curryN(2, (fn) => {
			setState(fn)
		})

		const focus = (state) => {
			return { ...state, focus: true }
		}

		const blur = (state) => {
			if (!inputRef.current || !inputRef.current.value) {
				return { ...state, focus: canFocus(props) }
			}
			return state
		}

		const _props = {
			onFocus: action(focus),
			onBlur: action(blur),
			...props,
		}

		return fn({
			props: _props,
			inputRef,
			state,
			focus,
			blur,
		})
	})
})

const styleWrapper = curry((initialState, component) => {
	return createInput((args) => {
		const { props, state } = args

		return (
			<MainWrapper fullwidth={props.fullwidth}>
				<InputStyle
					htmlFor={props.name}
					focused={state.focus}
					hasIcon={!!props.icon}
					options={props.children}
					disabled={props.disabled}
				>
					{props.icon && <span className="icn">{props.icon}</span>}
					<span className="wg-label">{props.label}</span>
					{component(args)}
				</InputStyle>
				{props.message}
			</MainWrapper>
		)
	}, initialState)
})

export const closedInput = styleWrapper({})

export const makeAlwaysFocused = styleWrapper({ focus: true })

Labelled.Input = closedInput(({ props, inputRef, state }) => {
	return (
		<input
			{...removeBacklist(props)}
			ref={inputRef}
			placeholder={state.focus ? props.placeholder : ""}
			onChange={props.onChange}
		/>
	)
})

Labelled.Number = closedInput(({ state, props, inputRef }) => {
	const sanitize = (evt) => {
		const isAlpha = /^[A-Za-z]$/gi.test(evt.key)
		const isKeyComb = evt.metaKey || evt.ctrlKey
		if (isAlpha && !isKeyComb) {
			evt.preventDefault()
		}
	}

	const handleChange = (evt) => {
		if (props.onChange) props.onChange(evt)
	}

	return (
		<input
			{...removeBacklist(props)}
			ref={inputRef}
			type="text"
			placeholder={state.focus ? props.placeholder : ""}
			onKeyDown={sanitize}
			onChange={handleChange}
		/>
	)
})

Labelled.Message = styled.div`
	font-size: 0.8rem;
`

Labelled.Message.propTypes = {
	children: t.node.isRequired,
}

Labelled.Select = makeAlwaysFocused(({ props, inputRef }) => {
	return (
		<select {...removeBacklist(props)} ref={inputRef} onChange={props.onChange}>
			{props.children}
		</select>
	)
})

function Select_Option({ value, text }) {
	return <option value={value || text}>{text}</option>
}

Select_Option.propTypes = {
	text: t.string.isRequired,
	value: t.string.isRequired,
}
Labelled.Select.Option = Select_Option
Labelled.Select.propTypes = {
	children: t.node.isRequired,
}

Labelled.Textarea = createInput(({ props, inputRef, state }) => {
	return (
		<div>
			<TextWrapper focused={state.focus} disabled={props.disabled}>
				<span className="wg-label">{props.label}</span>
				<textarea
					{...removeBacklist(props)}
					ref={inputRef}
					onChange={props.onChange}
				/>
			</TextWrapper>
			{props.message}
		</div>
	)
}, {})
