import React from "react"
import styled, { css } from "styled-components"
import t from "prop-types"
import { themeOr, withProp, propOr } from "../../libs/styled.helpers"

const theme = themeOr({
	activity: {
		borderColor: "#848484",
		bgColor: "#fff",
		hoverColor: "whitesmoke",
	}
})

const ActivityStyle = styled.ul `
  flex: 1;
  padding: 0;
  display: flex;
  flex-flow: column ;
  box-sizing: border-box;
  margin-left: ${23 / 2}px;

  .list {
    display: block;
    position: relative;
    padding: 0 0 .5rem 1.5rem;
    margin-top: .5rem;

    .msg {

    }

    .timestamp {
        opacity: 0.7;
        font-size: smaller;
        font-style: italic;
    }


    ${withProp("hoverable")(css`
        &:hover {
        		cursor: default;

            &:before {
                background-color: ${theme("activity.hoverColor")};
            }
        }
    `)}

    &:not(:last-child)::after {
    	display: block;
    	content: "";
    	top: ${propOr("size", "1rem")};
    	z-index: 10;
    	left: 0;
    	bottom: calc(-${propOr("size", "1rem")} / 2);
    	background-color: green;
    	position: absolute;
    	border-left: solid 1px ${theme("activity.borderColor")};
    }

    &::before {
        content: "";
        width: ${propOr("size", "1rem")};
        height: ${propOr("size", "1rem")};
        left: 0;
        position: absolute;
      	z-index: 20;
      	border-radius: 50%;
        ${withProp("bulletCurve", css`
        	border-radius: ${e => e.bulletCurve};
        `)};
        background-color: ${theme("point.color")};
        transform: translate3d(-50%, 0, 0);
        box-shadow: 0 0 0 3px ${theme("activity.bgColor")};
        border: solid 1px ${theme("activity.borderColor")};
    }
  }
`

export const Activity = (props) => {
	return (
		<ActivityStyle {...props}>
			{props.entries.map((e, index) => (
				<li 
					key={index}
					className="list" 
					style={{ minHeight: `calc(${props.size} + 5px)` }}>
					{props.render ? props.render(e) : <article>
						<div className="msg">{e.text}</div>
					</article>
					}
				</li>
			))}
		</ActivityStyle>
	)
}

Activity.defaultProps = {
	size: "15px"
}

Activity.propTypes = {
	entries: t.arrayOf(t.shape({ 
		text: t.string.isRequired
	})),
	size: t.string,
	render: t.func,
	hoverable: t.bool,
}

export default Activity
