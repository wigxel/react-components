import React from "react"
import styled, { css } from "styled-components"
import { withProp } from "../helpers"

const propSizes = [
	["small", ".5rem"],
	["medium", "1.5rem"],
	["large", "2rem"]
]

const StackStyle = styled.div`
	padding: 0.1px 0;
	
	> * + * {
		margin-top: 1rem;
	}
	
	${withProp("noEmpty", css`
		> * + * { margin-top: unset }
		> * + *:not(:empty) {
			margin-top: 1rem;
		}
	`)}

	${withProp("noExtraSpace", css`
		> * {
			margin-top: 0;
			margin-bottom: 0;
		}
	`)}

	${propSizes.map(([prop, size]) =>
		withProp(prop, css`
			> * + * {
				margin-top: ${size};
			}

			${withProp("noEmpty", css`
				> * + * { margin-top: unset }
				> * + *:not(:empty) {
					margin-top: ${size};
				}
			`)}
		`)
	)}
`

export const Stack = props => {
	return <StackStyle {...props} />
}

Stack.Flex = styled(Stack)`
	display: flex;
	flex-grow: 1;
	width: 100%;
	flex-direction: column;
	align-items: flex-start;
`

export default Stack