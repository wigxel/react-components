import React from "react"
import styled, { css } from "styled-components"
import { color, themeOr, withProp } from "../helpers"

const theme = themeOr({
	card: {
		bgColor: "#fff",
		dividerColor: "whitesmoke",
	},
})

export const CardStyle = (con = {}) => styled.article`
	padding: 18px 20px;
	border-radius: 12px;
	box-sizing: border-box;
	background-color: ${color("bgcolor")};
	transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
	
	${withProp(
		"static",
		css`
			box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.3);
		`,
		con
	)}

	${withProp(
		"clickable",
		css`
			cursor: pointer;
		`,
		con
	)}

	${withProp(
		"shadow",
		css`
			box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.3);
			&:hover {
				box-shadow: 0 3px 12px -5px rgba(0, 0, 0, 0.3);
			}
		`,
		con
	)}

	${withProp(
		"outlineDanger",
		css`
			border: solid 1px ${color("danger")};
			box-shadow: none !important;
		`
	)}
`

const StyledCard = styled(CardStyle({ shadow: true }))`
	background: ${theme("card.bgColor")};

	header {
		padding: 0 0.5rem 0.5rem;
		margin: -0.5rem -0.5rem 0.5rem;
		border-bottom: solid 1px ${theme("card.dividerColor")};
	}
`

export const Card = (props) => {
	return <StyledCard {...props} />
}

const CardHeader = (props) => {
	return <header {...props} />
}

Card.Header = CardHeader

export default Card
