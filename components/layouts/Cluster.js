import t from "prop-types"
import styled, { css } from "styled-components"
import { withProp } from "../helpers"

const addProps = (fn) => {
	fn.propTypes = {
		horizontal: t.bool,
		vertical: t.bool,
		x: t.bool,
		y: t.bool,
		children: t.node.isRequired,
	}

	return fn
}

const withProps = (props) => (style) => ($props) =>
	props.map((prop) => withProp(prop)(style)($props))

const LargeS = styled.span`
	display: inline-block;
	box-sizing: border-box;
	width: 100%;
	padding: 5rem;

	${withProps(["vertical", "y"])(css`
		padding-left: 0 !important;
		padding-right: 0 !important;
	`)}

	${withProps(["horizontal", "x"])(css`
		padding-top: 0 !important;
		padding-bottom: 0 !important;
	`)}
`
const SmallS = styled(LargeS)`
	padding: 1rem;
`
const MediumS = styled(LargeS)`
	padding: 2.5rem;
`

export const Cluster = addProps(MediumS)
const Small = addProps(SmallS)
const Large = addProps(LargeS)

Cluster.Large = Large
Cluster.Small = Small

export default Cluster
