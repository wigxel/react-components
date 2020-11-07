import React from "react"
import styled, { css } from "styled-components"
import t from "prop-types"
import { themeOr, withProp } from "../../libs/styled.helpers"

const theme = themeOr({
	timeline: {
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
  border-left: solid 1px ${theme("timeline.borderColor")};


  .a-item {
    display: block;
    position: relative;
    padding: .5rem 0 .5rem 1.5rem;

    .msg {

    }

    .timestamp {
        opacity: 0.7;
        font-size: smaller;
        font-style: italic;
    }


    ${withProp("hoverable")(css`
        &:hover {
            &:before {
                background-color: ${theme("timeline.hoverColor")};
            }
        }
    `)}

    &::before {
        content: "";
        width: 23px;
        height: 23px;
        top: 50%; left: 0;
        position: absolute;
        border-radius: 50%;
        background-color: white;
        transform: translate3d(-50%, -50%, 0);
        box-shadow: 0 0 0 3px ${theme("timeline.bgColor")};
        border: solid 1px ${theme("timeline.borderColor")};
    }
  }
`

export const Activity = (props) => {
	return (
		<ActivityStyle {...props}>
			{props.entries.map((e, index) => (
				<li key={index} className="a-item">
					{props.render ? props.render(e) : <article>
						<div className="msg">{e}</div>
						<span className="timestamp">2 days ago</span>
					</article>
					}
				</li>
			))}
		</ActivityStyle>
	)
}

Activity.propTypes = {
	entries: t.array,
	render: t.func,
	hoverable: t.bool,
}

export default Activity
