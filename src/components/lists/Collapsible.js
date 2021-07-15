import React, { useRef, useLayoutEffect, useState } from "react"
import t from "prop-types"
import styled from "styled-components"

const CollapseStyle = styled.div`
  height: 0;
  padding: 0 0;
  overflow: hidden;
  grid-column: 1 / 3;
  transition: all 0.3s ease-out;

  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    display: block;
  }
`

const makeObserver = (onChange) =>
	new MutationObserver(function (mutationsList) {
		for (let mutation of mutationsList) {
			// console.log("Mutation", mutation)
			onChange(mutation.type)
		}
	})

export const Collapsible = (props) => {
	const container = useRef()
	const [height, setHeight] = useState(0)
	const getHeight = (el) => el.getBoundingClientRect().height

	useLayoutEffect(() => {
		const observer = makeObserver(() =>
			setHeight(getHeight(container.current))
		)
		if (props.morph === true) {
			observer.observe(container.current, { childList: true, subtree: true })
		}

		return () => observer.disconnect()
	}, [props.morph])

	useLayoutEffect(() => {
		setHeight(props.expand ? getHeight(container.current) : 0)
	}, [props.expand])

	return (
		<CollapseStyle {...props} style={{ height }}>
			<div ref={container}>{props.children}</div>
		</CollapseStyle>
	)
}

Collapsible.defaultProps = {
	morph: false,
}

Collapsible.propTypes = {
	expand: t.bool,
	morph: t.bool.isRequired,
	children: t.node.isRequired,
}

export default Collapsible
