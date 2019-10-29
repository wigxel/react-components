import React from 'react';
import styled from 'styled-components';
import { onEnter } from '../../libs/helpers';
import Currency from './CurrencyInput';

export const CurrencyInput = Currency;

const SearchStyle = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  flex-flow: column;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 17px 9px 0px rgba(0, 0, 0, 0.1);

  > input {
    height: 50px;
    color: white;
    text-indent: 20px;
    font-size: 16px;
    background: transparent;
    border: solid 1px white;

    &::placeholder {
      color: white;
    }

    &:focus {
      border-width: 2px;
    }
  }

  > .search-base {
    height: 50px;
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;
    font-family: 'Quicksand', sans-serif;
    background-color: white;
    color: ${props => props.theme.primary};

    .tags {
      flex: 1;
      display: flex;
      margin-left: 1rem;
      justify-content: flex-start;
    }

    a {
      padding: 0.5em 0.5em;
      border-radius: 12px;
      transition: all 0.3s ease-out;
      cursor: pointer;

      &:hover {
        background-color: ${props => props.theme.whitesmoke};
      }
    }
  }
`;

export const SearchComponent = props => {
  const handleSubmit = evt => props.onSubmit(evt.target.value);

  return (
    <SearchStyle {...props}>
      <input
        type="text"
        placeholder="Find Vendor..."
        onKeyUp={onEnter(handleSubmit)}
      />
      <div className="search-base">
        <b>Search Tags:</b>
        <div className="tags">
          {['africandishes', 'bouquet', 'glamour'].map(e => (
            <a href={`#${e}`}>#{e}</a>
          ))}
        </div>
      </div>
    </SearchStyle>
  );
};

SearchComponent.defaultProps = {
  onSubmit: () => {}
};

export * from './inputs';
export * from './buttons';
