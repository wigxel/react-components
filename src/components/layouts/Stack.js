import React from "react"
import styled, { css } from "styled-components"
import { withProp, propsOr } from "../../libs/styled.helpers"

const propSizes = [
	["small", ".5rem"],
	["medium", "1.5rem"],
	["large", "2rem"]
]

const StackStyle = styled.div`
	padding: 0.1px 0;
	
	/** DO NO MOVE 'noExtraSpace' FROM HERE **/
	${withProp(
		"noExtraSpace",
		css`
      > * {
        margin-top: 0;
        margin-bottom: 0;
      }
    `
	)}

	> * + * {
		margin-top: 1rem;
	}
	
	${withProp(
		"noEmpty",
		css`
      > * + * {
        margin-top: unset;
      }
      > * + *:not(:empty) {
        margin-top: 1rem;
      }
    `
	)}
	
	${propSizes.map(([prop, size]) =>
		withProp(
			prop,
			css`
        > * + * {
          margin-top: ${size};
        }

        ${withProp(
		"noEmpty",
		css`
            > * + * {
              margin-top: unset;
            }
            > * + *:not(:empty) {
              margin-top: ${size};
            }
          `
	)}
      `
		)
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
  ${propsOr({
		"align-items": "flex-start",
		"justify-content": "flex-start",
		"align-content": "flex-end"
	})}
`

export default Stack
