import styled, { css } from "styled-components"
import { themeOr, color, propIs } from "../../libs/styled.helpers"

const theme = themeOr({
	toggle: {
		inside: "whitesmoke",
		active: "seagreen",
		inactive: "white",
	},
})

const Base = styled.button`
	--t-height: 30px;
	--t-active: ${theme("toggle.active")};
	--t-inactive: ${theme("toggle.inactive")};
	--sq: calc(var(--t-height) * 0.7);
	--sp: calc(calc(var(--t-height) - var(--sq)) / 2);

	border: none;
	cursor: pointer;
	padding: 0;
	position: relative;
	margin: 0;
	display: inline-flex;
	border-radius: 50px;
	vertical-align: middle;
	height: var(--t-height);
	width: calc(var(--t-height) * 2);
	background-color: ${theme("toggle.inside")};

	${propIs("small", x => !!x, css`
		--t-height: 20px;
	`)}
`

const Rounded = styled(Base)`
	&:before {
		left: var(--sp);
		top: var(--sp);
		content: "";
		position: relative;
		display: inline-block;
		width: var(--sq);
		height: var(--sq);
		border-radius: var(--t-height) 0 0 var(--t-height);
		transition: all 0.2s ease-in-out;
		background-color: var(--t-inactive);
	}

	${propIs(
		"active",
		(x) => !!x,
		css`
			background-color: var(--t-active);

			&::before {
				left: calc(var(--t-height) + var(--sp));
				border-radius: 0 var(--t-height) var(--t-height) 0;
			}
		`
	)}
`

const Circle = styled(Rounded)`
	&:before {
		border-radius: var(--t-height);
	}

	${propIs(
		"active",
		(x) => !!x,
		css`
			background-color: ${theme("toggle.active")};

			&::before {
				background-color: white;
				border-radius: var(--t-height);
			}
		`
	)}
`

const Square = styled(Rounded)`
	border-radius: 0;

	&:before {
		border-radius: 0;
	}

	${propIs(
		"active",
		(x) => !!x,
		css`
			background-color: ${theme("toggle.active")};

			&::before {
				background-color: white;
			}
		`
	)}
`

const Line = styled(Rounded)`
	background-color: transparent;
	
	&:after {
		left: 0; 
		top: 50%;
		right: 0;
		border-radius: 999px;
		content: "";
		display: block;
		height: var(--sp);
		position: absolute;
		transform: translateY(-50%);
		background-color: ${theme("toggle.inside")};
	}

	&::before {
		z-index: 4;
		border-radius: 3px;
		box-sizing: border-box;
		line-height: var(--sq);
		color: ${theme("toggle.inside")};
		border: solid var(--sp, 4px) ${theme("toggle.inside")};
		background-color: var(--t-inactive);
	}

	${propIs(
		"active",
		(x) => !!x,
		css`
		&::after {
			background-color: var(--t-active);
		}
		&::before {
			border-color: var(--t-active);
		}
	`
	)}
`

export const Toggle = {
	Rounded,
	Circle,
	Square,
	Line,
}

export default Toggle
