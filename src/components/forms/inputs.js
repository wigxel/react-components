import React from "react"
import styled, { css } from "styled-components"
import { fullWidth, theme, withProp } from "../../libs/styled.helpers"

const InputStyle = styled.input`
	background-color: ${theme("whitesmoke")};
	border: none;
	height: 38px;
	min-width: 243px;
	border-radius: 6px;
	text-indent: 15px;
	font-size: 13px;
	font-family: var(--heading-font, "Quicksand");
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