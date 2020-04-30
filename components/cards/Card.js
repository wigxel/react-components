import React from "react"
import styled from "styled-components"

import { CardStyle, themeOr } from "../helpers"

const theme = themeOr({
	card: {
		bgColor: "#fff",
		dividerColor: "whitesmoke",
	},
})

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
