/** This file contains helpers for the StyledComponent library for ReactJS.
 * Styled components helpers
 * @author Joseph Julius Owonvown
 */
import * as R from "ramda"
import { isArray } from "lodash"
import camelCase from "lodash/fp/camelCase"
import styled, { css } from "styled-components"
import { curry, split, lensPath, view } from "ramda"

export const theme = curry((key, props) => {
	const path = isArray(key) ? key : split(".", key)
	const getPath = view(lensPath(path))

	return getPath(props.theme)
})

export const color = name => theme(["colors", name])

export const themeOr = curry((fallback, key, props) => {
	const keyFrom = theme(key)
	return keyFrom(props) || keyFrom({ theme: fallback })
})

export const withProp = curry((key, style, props) => {
	return props[key] && style
})

export const propIs = curry(
	(prop, functor, style, props) => functor(props[prop]) && style
)

export const propOr = (prop, defValue) => props => props[prop] || defValue

const makeCamel = ([property, defValue]) => {
	const propInCamel = camelCase(property, R.split("-"))
	return { property, propInCamel, defValue }
}

const conv = props => ({ property, propInCamel, defValue }) => {
	const get = propOr(propInCamel, defValue)
	return props[propInCamel] ? `${property}: ${get(props)};` : ""
}

// propsOr :: Map -> String
export const propsOr = objects => props =>
	R.pipe(R.toPairs, R.map(makeCamel), R.map(conv(props)))(objects)

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

export const fullWidth = withProp(
	"fullwidth",
	css`
    display: flex;
    width: 100%;
  `
)

