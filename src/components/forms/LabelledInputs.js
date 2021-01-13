import React from "react"
import t from "prop-types"
import * as R from "ramda"
import styled, { css } from "styled-components"
import { fullWidth } from "../../libs/styled.helpers"
import { withProp, color, themeOr, propIs } from "../../libs/styled.helpers"

const theme = themeOr({
	border: {
		active: color("primary"),
		gray: "#e1e1e1",
		width: "2px",
	},
})

const blacklist = ["fullwidth", "icon", "message"]
const removeBacklist = R.pickBy(R.compose(R.not, R.contains(R.__, blacklist), R.nthArg(1)))
const disabled = propIs("disabled", (x) => x == true)
const sharedFocusStyle = css`
	width: 100%;
	border: solid ${theme("border.width")} ${theme("border.gray")};
	background: transparent;
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
		user-select: none;
		pointer-events: none;
		display: inline-block;
		background-color: var(--label-bg, white);
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

	&:focus-within {
		border-color: ${theme("border.active")};		
	}

		${withProp("focused")(css`

			.wg-label {
				font-size: 0.9rem;
				padding: 0 0.5rem;
				color: ${theme("border.active")};
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
			border: solid 1px ${theme("border.active")};
			transform: rotate(45deg) translate(-25%);
			border-color: transparent ${theme("border.active")} ${theme("border.active")} transparent;
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

export const Labelled = () => <span>"Hello"</span>

const canFocus = (props) => !!props.placeholder

export function useInput(initialState, props, ref) {
	const [state, setState] = React.useState({
		focus: canFocus(props),
		...initialState,
	})

	const inputRef = ref ? ref : React.useRef()

	const action = R.curry((fn, originalListener, evt) => {
		setState(fn(evt))
		if (originalListener) originalListener(evt)
	})

	const focus = React.useCallback((state) => () => {
		return { ...state, focus: true }
	}, [])

	const blur = React.useCallback((state) => (evt) => {
		// console.log("[DEBUG] Input Ref", inputRef, evt)
		const value = R.path(["target", "value"], evt)

		if (R.isEmpty(value)) return { ...state, focus: canFocus(props) }

		if (R.is(String, value) && value.trim().length > 0) {
			return { ...state, focus: true }
		}

		return { ...state, focus: true }
	}, [])

	return {
		props: {
			...props,
			onFocus: action(focus, props.onFocus),
			onBlur: action(blur, props.onBlur),
		},
		inputRef,
		state,
		focus,
		blur,
	}
}

const NewWrapper  = ({ children, props, state }) => {
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
				{children}
			</InputStyle>
			{props.message}
		</MainWrapper>
	)
}

const InputTypes = Object.freeze({
	Closed: {},
	AlwaysFocused: { focus: true }
})

Labelled.Input = React.forwardRef(function LabelledInput (props, ref) {
	const { props: _props, inputRef, state } = useInput(InputTypes.Closed, props, ref)

	return (
		<NewWrapper props={_props} state={state}>
			<input
				ref={inputRef}
				{...removeBacklist(_props)}
				placeholder={state.focus ? _props.placeholder : ""}
				onChange={_props.onChange}
			/>
		</NewWrapper>
	)
})

Labelled.Number = React.forwardRef(function LabelledNumber (_props, ref) {
	const { props, inputRef, state } = useInput(InputTypes.Closed, _props, ref)

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
		<NewWrapper props={props} state={state}>
			<input
				{...removeBacklist(props)}
				ref={inputRef}
				type="text"
				placeholder={state.focus ? props.placeholder : ""}
				onKeyDown={sanitize}
				onChange={handleChange}
			/>
		</NewWrapper>
	)
})

Labelled.Message = styled.div`
	font-size: 0.8rem;
`

Labelled.Message.propTypes = {
	children: t.node.isRequired,
}

Labelled.Select = React.forwardRef(function LabelledSelect (_props, ref) {
	const { props, inputRef, state } = useInput(InputTypes.AlwaysFocused, _props, ref)

	return (
		<NewWrapper props={props} state={state}>
			<select {...removeBacklist(props)} ref={inputRef} onChange={props.onChange}>
				{props.children}
			</select>
		</NewWrapper>
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

Labelled.Textarea = React.forwardRef(function LabelledTextarea (_props, ref) {
	const { props, inputRef, state } = useInput(InputTypes.Closed, _props, ref)

	return (
		<div>
			<TextWrapper focused={state.focus} disabled={props.disabled}>
				<span className="wg-label">{props.label}</span>
				<textarea
					ref={inputRef}
					{...removeBacklist(props)}
					onChange={props.onChange}
				/>
			</TextWrapper>
			{props.message}
		</div>
	)
}, {})
