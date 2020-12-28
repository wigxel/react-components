import React from "react"
import styled, { css } from "styled-components"
import { fullWidth, themeOr, withProp } from "../../libs/styled.helpers"

const theme = themeOr({
	font: {
		sans: "Avenir, Ubuntu, Segoe UI, -apple-system, sans-serif",
	},
	input: {
		bgColor: "whitesmoke",
	}
})

const InputStyle = styled.input`
	height: 38px;
	border-radius: 6px;
	text-indent: 1rem;
	font-size: 13px;
	transition: all 0.15s ease-out;
	border: solid 2px transparent; 
	font-family: ${theme("font.sans")};
	caret-color: ${theme("colors.primary")};
	background-color: ${theme("input.bgColor")};
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
		border: solid 2px ${theme("colors.primary")};
	}

	${fullWidth()}
	${withProp("small")(css`
		height: 30px;
		font-size: 1rem;
		border: solid 2px transparent;
	`)}

	${withProp("large")(css`
		height: 50px;
		font-size: 1rem;
		border: solid 2px transparent;
	`)}
`

export const Input = React.forwardRef(function SimpleInput(props, ref) {
	return <InputStyle {...props} ref={ref} />
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
// 		color: ${theme("colors.primary")};

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