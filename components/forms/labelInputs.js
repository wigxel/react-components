import React, { useState, useRef, useImperativeHandle } from "react";
import styled, { css } from "styled-components";
import { produce } from "immer";
import { curry } from "ramda";
import { withProp, theme, fullwidth } from "../helpers";
import { trace } from '../../libs/helpers'
import { pickBy  } from "ramda";
import t from "prop-types";

const ValidInputProps = [
  "placeholder",
  "name",
  "type",
  "min",
  "max",
  "maxLength",
  "minLength",
  "value",
  "id",
  "className",
  "style"
];

const attributesAndListeners = (val, key) => {
  return ValidInputProps.includes(key) || /^on[A-Z]/.test(key);
};

const filterProps = props => pickBy(attributesAndListeners, props);

const sharedFocusStyle = css`
  border: solid ${theme('border.width')} ${theme('border.gray')};
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 16px;
  position: relative;
  cursor: text;
  transition: all 0.3s ease-out;

  &, input, textarea, select, button {
  	font-family: var(--input-font);
  	font-size: 1rem;
  }

 	span.wg-label {
    top: calc((52px / 2) / 2);
    left: 10px;
    line-height: 20px;
    padding: 0 0.5rem;
    position: absolute;
    border-radius: 20px;
    display: inline-block;
	  background-color: white;
    transition: all 0.3s ease-out;
  }

	${withProp('hasIcon', css`
		input, textarea { text-indent: 15px; }
		select { text-indent: 5px }
	  span.wg-label {
	    color: black;
	    transform: translateX(1.8rem);
	  }
	`)}

  ${withProp("focused")(css`
    border-color: ${theme('primary')}

    span.wg-label {
      font-size: 0.9rem;
      padding: 0 0.5rem;
      color: ${theme('primary')};
      transform: translate(0, -120%);
    }
  `)}
`;

const InputStyle = styled.div`
	width: 100%;
	max-width: 300px;
  margin-top: 15px;
  box-sizing: border-box;
  display: flex;
  padding: .5rem 1rem;
  align-items: center
	
	${fullwidth}
  ${withProp("options")(css`
    &::after {
      content: "";
      width: 12px;
      height: 12px;
      flex: 0 0 12px;
      right: 15px;
      pointer-events: none;
      position: absolute;
      border: solid 1px ${theme('primary')};
      border-color: transparent #308ddb #308ddb transparent;
      transform: rotate(45deg) translate(-25%);
    }
  `)}

  &,
  & > * {
    transition: all 0.3s ease-out;
  }

  ${sharedFocusStyle}

  input, select {
    outline: none;
    border: none;
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
	  min-height: 30px;
    background: transparent;
  }

  input[type="number"] {
    text-align: right;
  }
`;

export const TextWrapper = styled.div`
  width: auto;

  ${sharedFocusStyle}
  ${withProp("focused")(css`
    span.wg-label {
      font-size: 0.9rem;
    }
  `)}

  textarea {
    border: none;
    width: 100%; 
    outline: none;
    box-sizing: border-box;
    min-width: 240px;
    padding: 1rem 1.5rem;
    background: transparent;
  }
`;

export const Input = props => <input {...props} />;

const createInput = curry((fn, initialState) => {
  const InputWrapper = (props, ref) => {
    const [state, _setState] = useState({
      focus: false,
      ...initialState
    });

    // please don't take out the event it's important
    // eslint-disable-next-line
    const setState = curry((fn, event) => {
      _setState(produce(state, fn));
    });

    const inputRef = useRef(null);
    useImperativeHandle(ref, () => inputRef.current);

    const focus = state => {
      state.focus = true;
    };

    const blur = state => {
      if (!inputRef.current.value) {
        state.focus = false;
      }
    };

    const _props = {
      onFocus: setState(focus),
      onBlur: setState(blur),
      ...props
    };

    return fn({
      props: _props,
      inputRef,
      state,
      setState,
      focus,
      blur
    });
  };
  return React.forwardRef(InputWrapper);
});

const styleWrapper = curry((initialState, fn) => {
  return createInput(args => {
    const { props, state, inputRef } = args;

    return (
      <div>
        <InputStyle
        	hasIcon={!!props.icon}
          focused={state.focus}
          options={props.children}
          onClick={() => inputRef.current.focus()}
        >
          {props.icon}
          <span className="wg-label">{props.label}</span>
          {fn(args)}
        </InputStyle>
        {props.message}
      </div>
    );
  }, initialState);
});

const closedInput = styleWrapper({});

const makeAlwaysFocused = styleWrapper({ focus: true });

Input.Label = closedInput(({ props, inputRef, state }) => {
  return (
    <input
      {...filterProps(props)}
      ref={inputRef}
      placeholder={state.focus ? props.placeholder : ""}
      onChange={props.onChange}
    />
  );
});

Input.Number = closedInput(({ state, props, inputRef }) => {
  const sanitize = evt => {
    const isAlpha = /^[A-Za-z]$/gi.test(evt.key);
    const isKeyComb = evt.metaKey || evt.ctrlKey;
    if (isAlpha && !isKeyComb) {
      evt.preventDefault();
    }
  };

  const handleChange = evt => {
    if (props.onChange) props.onChange(evt);
  };

  return (
    <input
      {...filterProps(props)}
      ref={inputRef}
      type="text"
      placeholder={state.focus ? props.placeholder : ""}
      className="w-4/5 c-black"
      onKeyDown={sanitize}
      onChange={handleChange}
    />
  );
});

Input.Message = styled.div`
  font-size: 0.8rem;
`;

Input.Message.propTypes = {
  children: t.node.isRequired
};

export const Select = makeAlwaysFocused(({ props, inputRef }) => {
  return (
    <select
      {...filterProps(props)}
      ref={inputRef}
      className="w-4/5 c-black appearance-none"
      onChange={props.onChange}
    >
    {props.children}
    </select>
  );
});

Select.Option = function Select_Option ({ value, text, selected }) {
	return (
		 <option selected={selected} value={value}>{text}</option>
	)
};

Select.propTypes = {
	children: t.array.isRequired,
};

export const Textarea = createInput(({ props, inputRef, state }) => {
  return (
    <TextWrapper focused={state.focus} className="flex-1">
      <span className="wg-label rounded-full">{props.label}</span>
      <textarea
        {...filterProps(props)}
        ref={inputRef}
        onChange={props.onChange}
      />
    </TextWrapper>
  );
}, {});

export function SelectButtons(props) {
  const [state, setIndex] = useState(-1);

  const isActive = index => {
    return index == state;
  };

  return (
    <div className="wg-multi-select rac-2 w-full my-2 flex flex-col md:flex-row items-center">
      <label>{props.label}</label>
      {props.buttons.map((text, idx) => {
        return (
          <button
            type="button"
            key={idx}
            className={isActive(idx) ? "active" : ""}
            onClick={() => {
              setIndex(idx);
              if (props.onChange) props.onChange(props.buttons[idx], idx);
            }}
          >
            <span>{text}</span>
          </button>
        );
      })}
      {props.debug && (
        <button type="button" onClick={() => props.onChange("", -1)}>
          CLEAR
        </button>
      )}
    </div>
  );
}

SelectButtons.defaultProps = {
  debug: false
};

SelectButtons.propTypes = {
  onChange: t.func.isRequired,
  label: t.string.isRequired,
  buttons: t.array.isRequired,
  debug: t.bool
};
