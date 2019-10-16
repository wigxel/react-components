import React from 'react';
import t from 'prop-types';
import styled, { css } from 'styled-components';

import MaterialIcon from 'material-icons-react';
import { filterKeys } from '../../libs/helpers';
import { fullWidth, withProp, color } from '../helpers';

const ButtonStyle = styled.button`
  --theme-color: ${color('accent')};
  background-color: ${color('accent')};
  padding: .7rem 1.8rem;
  white-space: nowrap;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  border: solid 2px transparent;
  box-sizing: border-box;
  color: white;
  display: inline-flex;
  transform: scale(1);
  transition: all .3s cubic-bezier(.08,.82,.17,1);
  font-family: var(--heading-font, 'Quicksand');

  .material-icons {
    margin-right: .5rem;
  }

  &:disabled {
    opacity: .50;  
  }

  &:focus, &:hover:focus {
    transform: scale(.95);
    outline: none;
  }
  
  &:hover {
    box-shadow: 0 3px 8px -4px rgba(0, 0, 0, 0.3);
  }

  ${withProp('primary')(css`
    --theme-color: ${color('primary')};
    background-color: ${color('primary')};
  `)}

  ${withProp('danger')(css`
    --theme-color: ${color('danger')};
    background-color: ${color('danger')};
  `)}

  ${withProp('outline')(css`
    background-color: transparent;
    border: solid 2px var(--theme-color, #888);
    color: var(--theme-color, #888);
  `)}

  ${withProp('large')(css`
    padding: 1rem 2rem;
  `)}

  ${withProp('circle')(css`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding-right: 0;
    padding-left: 0;

    .material-icons {
      margin-right: 0;
      text-align: center;
      flex: 1;
    }
  `)}

  ${fullWidth()}
`;

export const Button = ButtonStyle

const iconProps = props => filterKeys(props, ['color', 'icon']);

export const IconButton = props => {
  return (
    <Button {...props}>
      <MaterialIcon {...iconProps(props)} />
      <span>{props.children}</span>
    </Button>
  );
};

IconButton.propTypes = {
  children: t.node.isRequired,
}

export const CircleButton = props => {
  return (
    <Button circle {...props}>
      <MaterialIcon {...iconProps(props)} />
    </Button>
  );
};

export const BookButton = () => {
  return (
    <IconButton color="white" icon="add">
      BOOK
    </IconButton>
  );
};
