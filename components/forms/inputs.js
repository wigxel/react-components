import React from "react"
import { fullWidth, theme, withProp } from "../helpers"
import styled, { css } from "styled-components"

const InputStyle = styled.input`
	background-color: ${theme("whitesmoke")};
	border: none;
	height: 38px;
	min-width: 243px;
	border-radius: 6px;
	text-indent: 15px;
	font-size: 13px;
	font-family: var(--heading-font, 'Quicksand');
	transition: all 0.3s ease-out;
	border-color: ${theme("primary")};
	caret-color: ${theme("primary")};
	outline: none;

	&::placeholder {
		color: #a0a0a0;
	}

	&:hover,
	&:focus {
		background-color: #fff;
		box-shadow: 0 3px 6px rgba(112, 93, 245, 0.16);
	}

	&:focus {
		border: solid 1px ${theme("primary")};
		${withProp("large")(css`
				border: solid 2px ${theme("primary")};
		`)}
	}

	${fullWidth()}
	${withProp("large")(css`
			height: 50px;
			font-size: 16px;
			border-radius: 12px;
			border: solid 2px transparent;
		`)}
`

export const Input = React.forwardRef(function SimpleInput(props, ref) {
	return (<InputStyle {...props} ref={ref} />)
})


// const IconInputStyle = styled.div`
// 	--input-mb: 0;
// 	display: flex;
// 	position: relative;
// 	margin-bottom: 1rem;
// 	${fullWidth()}

// 	span {
// 		position: absolute;
// 		display: inline-flex;
// 		justify-content: center;
// 		align-items: center;
// 		background-color: white;
// 		border-radius: 6px;
// 		margin: 6px;
// 		width: 28px;
// 		height: 28px;
// 		color: ${theme("primary")};

// 		${props =>
// 		props.large &&
// 			css`
// 				height: 38px;
// 				width: 38px;
// 			`}
// 	}
// 	span + input {
// 		text-indent: 44px;
// 		${props =>
// 		props.large &&
// 			css`
// 				text-indent: 54px;
// 			`}
// 	}
// `

// export const IconInput = props => <div>Change This</div>

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
		border: solid 1px ${theme("primary")};
	}

	input:checked + span {
		background-color: ${theme("primary")};
	}
`

export const RadioInput = React.forwardRef(
	function RadioInput(props, ref) {  
		return (
			<RadioStyle>
				<input
					ref={ref}
					type="radio"
					{...props}
				/>
				<span />
			</RadioStyle>
		)
	}
)

const RadioLabelStyle = styled.div`
	display: inline-flex;
	align-items: center;
	padding-right: 5px;

	${fullWidth()}

	> span {
		margin-left: 1rem;
		line-height: 20px;
		display: inline-block;
		${"" /* border: solid 1px black; */}
	}
`

export const RadioLabel = props => {
	return (
		<RadioLabelStyle {...props}>
			<RadioInput {...props} />
			<span>{props.label}</span>
		</RadioLabelStyle>
	)
}

RadioLabel.defaultProps = {
	label: "Something"
}

const CheckboxStyle = styled(RadioStyle)`
	margin-right: 5px;
	cursor: pointer;

	> input + span {
		border-radius: 2px;
	}
`

export const Checkbox = props => {
	return (
		<CheckboxStyle>
			<input type="checkbox" {...props} />
			<span />
		</CheckboxStyle>
	)
}
