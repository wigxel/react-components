/** This file contains helpers for the StyledComponent library for ReactJS.
 * Styled components helpers
 * @author Joseph Julius Owonvown
 */
import { isArray } from "lodash"
import camelCase from "lodash/fp/camelCase"
import { pipe, toPairs, map, curry, split, lensPath, view } from "ramda"

export const theme = curry((key, props) => {
	const path = isArray(key) ? key : split(".", key)
	const getPath = view(lensPath(path))

	return getPath(props.theme)
})

export const color = (name) => theme(["colors", name])

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

export const propOr = (prop, defValue) => (props) => props[prop] || defValue

const makeCamel = ([property, defValue]) => {
	const propInCamel = camelCase(property, split("-"))
	return { property, propInCamel, defValue }
}

const conv = (props) => ({ property, propInCamel, defValue }) => {
	const get = propOr(propInCamel, defValue)
	return props[propInCamel] ? `${property}: ${get(props)};` : ""
}

// propsOr :: Map -> String
export const propsOr = (objects) => (props) =>
	pipe(toPairs, map(makeCamel), map(conv(props)))(objects)
