import React from 'react';
import styled from '../theme-provider';
import { css } from 'styled-components';
import t from 'prop-types';
import { color, withProp } from '../helpers';

const ActivityStyle = styled.ul `
  padding: 0;
  display: flex;
  flex: 1;
  flex-flow: column ;
  box-sizing: border-box;
  margin-left: ${23 / 2}px;
  border-left: solid 1px ${color('greylight')};


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


    ${withProp('hoverable')(css`
        &:hover {
            &:before {
                background-color: ${color('whitesmoke')};
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
        box-shadow: 0 0 0 3px ${color('bgcolor')};
        border: solid 1px ${color('greylight')};
    }
  }
`;

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
    children: t.array,
    entries: t.array,
    render: t.func,
    hoverable: t.bool,
}

export default Activity;
