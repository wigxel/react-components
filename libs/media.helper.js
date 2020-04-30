import { css } from "styled-components"

const sizes = {
	bigDestktop: 1800, // 1800 above
	macScreen: 1440,
	tabletLand: 1200,
	tabletPort: 900,
	phone: 600
}

const makeMediaQuery = (property, size) => (...args) => css`
  @media screen and (${property}: ${size / 16}em) {
    ${css(...args)}
  }
`

// Iterate through the sizes and create a media template
export const media = (property = "min-width") => {
	const mediaQueries = {}
	for (const [screen, viewWidth] of Object.entries(sizes)) {
		mediaQueries[screen] = makeMediaQuery(property, viewWidth)
	}
	return mediaQueries
}

media.min = media("min-width")
media.max = media("max-width")
