import React from "react"
import t from "prop-types"
import styled from "styled-components"
import { color } from "../helpers"
import Stack from "./Stack"

export * from "./Tab"
export * from "./Stack"
export * from "./Cluster"

const JumbotronStyle = styled.div`
  min-height: calc(100vh - 80px);
  background-color: ${props => props.theme.primary};
`

export const Jumbotron = props => {
	return <JumbotronStyle {...props}>{props.children}</JumbotronStyle>
}

export const Container = props => {
	return <div className="container mx-auto">{props.children}</div>
}

const SidebarStyle = styled.div`
  background-color: ${color("navbar")};
  min-height: calc(100vh - 60px);
  position: sticky;
  top: 60px;
`

export const Sidebar = props => {
	return <SidebarStyle>{props.children}</SidebarStyle>
}

export * from "./Grids"
export * from "./imageHolders"
export * from "./Outline"
export * from "./Pager"
