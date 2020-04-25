import styled, { css } from "styled-components"
import { themeOr, propIs } from "../helpers"

const theme = themeOr({
	toggle: {
		inside: "whitesmoke",
		active: "green",
		inactive: "white"
	}
})

const Base = styled.button`
	--t-height: 30px;
	--t-active: ${theme("toggle.active")};
	--t-inactive: ${theme("toggle.inactive")};
	--sq: calc(var(--t-height) * .7 );
	--sp: calc( calc(var(--t-height) - var(--sq)) / 2 );

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
`
export const Rounded = styled(Base)`
	&:before {
		left: var(--sp);
		top: var(--sp);
		content: "";
		position: relative;
		display: inline-block;
		width: var(--sq);
		height: var(--sq);
		border-radius: var(--t-height) 0 0 var(--t-height);
		transition: all .3s ease-in;
		background-color: var(--t-inactive);
	}

	${propIs("active", x => !!x, css`
		&::before {
			left: calc( var(--t-height) + var(--sp) );
			background-color: var(--t-active);
			border-radius: 0 var(--t-height) var(--t-height) 0;
		}
	`)}
`

export const Circle = styled(Rounded)`
	&:before {
		border-radius: var(--t-height);
	}

	${propIs("active", x => !!x, css`
		&::before {
			border-radius: var(--t-height);
		}
	`)}
`

export const Binary = styled(Rounded)`
  transition: all .2s ease-out .3s;

	&:before {
		background-color: transparent;
		border-radius: var(--t-height);
		border: solid 2px ${theme("bgcolor")};
		box-sizing: border-box;
	}

	${propIs("active", x => !!x, css`
		background-color: var(--t-active);

		&::before {
			background-color: var(--t-inactive);
			border-radius: var(--t-height);
		}
	`)}
`

export const Square = styled(Rounded)`
	border-radius: 0;

	&:before {
		border-radius: 0;
	}

	${propIs("active", x => !!x, css`
		&::before {
			background-color: var(--t-active);
		}
	`)}
`

const Line = styled(Rounded)`
	background-color: transparent;
	
	&:after {
		left: 0; 
		top: 50%;
		right: 0;
		border-radius: 20px;
		content: "";
		display: block;
		height: calc(var(--sp) / 2);
		position: absolute;
		transform: translateY(-50%);
		background-color: var(--t-active);
	}

	&::before {
		z-index: 4;
		border-radius: 3px;
		line-height: var(--sq);
		color: ${theme("toggle.inside")};
		background-color: var(--t-inactive);
		box-shadow: 0 1px 3px rgba(0,0,0,0.16);
		content: "${props => props.label && "off"}";
	}

	${propIs("active", x => !!x, css`
		&::before {
			content: "${props => props.label && "on"}";
			color: var(--t-inactive);
			background-color: var(--t-active);
		}
	`)}
`

export default { 
	Rounded,
	Circle,
	Binary,
	Square,
	Line,
}