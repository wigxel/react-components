import React from "react"
import styled from "styled-components"

import { CardStyle, color } from "../helpers"

const StyledCard = styled(CardStyle({ shadow: true }))`
	header {
		padding: 0 0.5rem 0.5rem;
		margin: -0.5rem -0.5rem .5rem;
		border-bottom: solid 1px ${color("whitesmoke")}
	}
`

export const Card = (props) => {
	return (
		<StyledCard {...props} />
	)
}

const CardHeader = (props) => {
	return <header {...props} />
}

Card.Header = CardHeader

export default Card