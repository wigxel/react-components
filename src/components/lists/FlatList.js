import React from "react"
import t from "prop-types"
import styled from "styled-components"
import { color } from "../../libs/styled.helpers"

const FlatListStyle = styled.ul`
  width: 100%;
  padding: 0;
  box-sizing: border-box;

  .list-item {
    padding: 0.5rem 1rem;
    & + .list-item {
      border-top: solid 1px ${color("whitesmoke")};
    }
  }

  li {
    display: block;

    a {
      display: block;
      text-decoration: none;
      border: 0 solid 5px;
      padding: 1rem 1.5rem;
      color: ${color("grey")};
      transition: border 0.3s cubic-bezier(0.74, 1.26, 0.99, 0.97);

      &.active {
        color: ${color("primary")};
        background-color: ${color("whitesmoke")};
        border-left: solid 5px ${color("primary")};
      }
    }
  }
`

export const FlatList = props => {
	return <FlatListStyle>{props.children}</FlatListStyle>
}

const FlatListItem = props => {
	return <li className="list-item" {...props} />
}

FlatList.Item = FlatListItem

FlatList.propTypes = {
	children: t.node.isRequired
}

export default FlatList
