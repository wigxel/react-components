import React from "react"
import styled, { css } from "styled-components"
import { withProp } from "../helpers"

const propSizes = [
	["small", ".25rem"],
	["medium", "1.2rem"],
	["large", "1.5rem"]
]

const TabStyle = styled.div`
  > * + * {
    margin-left:  0.5rem;
  }

  ${propSizes.map(([prop, size]) => withProp(prop)(css`
    > * + * {
      margin-left: ${size};
    }
  `))}
`

export const Tab = props => {
	return <TabStyle {...props} />
}

export default Tab
