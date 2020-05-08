import React from "react"
import t from "prop-types"
import styled, { css } from "styled-components"
import { themeOr, withProp, fullWidth } from "../libs/styled.helpers"

const theme = themeOr({
	alert: {
		radius: "12px",
		dark: { bg: "#334", text: "#9acdff" },
		light: { bg: "#fff", text: "dodgerblue" },
		info: { bg: "#9acdff", text: "#004c97" },
		success: { bg: "#a6ffa6", text: "#3b883b" },
		warning: { bg: "#ffe86e", text: "#7b6f2e" },
		danger: { bg: "#fdc0c0", text: "#ac0728" },
	},
})

const StyledAlert = styled.div`
	font-size: 1em;
	display: inline-flex;
	align-items: center;
	padding: 0.8rem 1.5rem;
	box-sizing: border-box;
	border-radius: ${theme("alert.radius")};
	background-color: ${(props) => theme(["alert", props.type, "bg"])(props)};
	color: ${(props) => theme(["alert", props.type, "text"])(props) || "white"};

	${fullWidth}
	${withProp(
		"shadow",
		css`
			box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.16);
		`
	)}
	
	picture {
		margin-left: -0.5rem;
		margin-right: 0.5rem;
		min-width: 0.5rem;
		flex-shrink: 0;
	}

	span {
		flex-grow: 1;
	}

	${withProp(
		"collapsible",
		css`
			button[role="close"] {
				font-family: ;
				width: 30px;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 30px;
				border: none;
				opacity: 0.25;
				margin-left: 0.5rem;
				margin-right: -0.5rem;
				border-radius: 0.4rem;
				flex-shrink: 0;
				font-size: 1em;
				background-color: transparent;
				transition: 0.15s ease-in;
				outline: none;
				transition-property: background, opacity;

				svg {
					width: 20px;
					height: 20px;
				}

				&:hover {
					opacity: 0.75;
					cursor: pointer;
					color: currentColor;
					background-color: #8080803b;
					background-blend-mode: difference;
				}
			}
		`
	)}
`

export const Alert = (props) => {
	const children = props.message || props.children
	return (
		<StyledAlert {...props}>
			{props.icon && <picture>{props.icon}</picture>}
			{React.Children.only(<span>{children}</span>)}
			{props.collapsible && (
				<button type="button" role="close" onClick={props.onClose}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.84 71.84">
						<line
							stroke="currentColor"
							strokeLinecap="round"
							strokeMiterlimit="10"
							strokeWidth="8px"
							className="cls-2"
							x1="57.02"
							y1="14.82"
							x2="14.82"
							y2="57.02"
						/>
						<line
							stroke="currentColor"
							strokeLinecap="round"
							strokeMiterlimit="10"
							strokeWidth="8px"
							className="cls-2"
							x1="14.82"
							y1="14.82"
							x2="57.02"
							y2="57.02"
						/>
					</svg>
				</button>
			)}
		</StyledAlert>
	)
}

Alert.defaultProps = {
	type: "info",
	shadow: false,
}

Alert.propTypes = {
	icon: t.node,
	type: t.string,
	message: t.string,
	shadow: t.bool,
	onClose: t.func,
	collapsible: t.bool,
	children: t.node,
}

export default Alert
