import styled, { css } from "styled-components"
import { fullWidth } from "../../libs/styled.helpers"
import { withProp, theme } from "../../libs/styled.helpers"

const ButtonStyle = styled.button`
  --theme-color: ${theme("colors.gray")};
  background-color: #444;
  padding: .7rem 1.8rem;
  line-height: 1.6;
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
  font-family: var(--button-font, 'Quicksand');

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

  ${withProp("small")(css`
		padding: .4rem 1rem;
		border-radius: 8px;
	`)}

	${withProp("primary")(css`
		--theme-color: ${theme("colors.primary")};
		background-color: ${theme("colors.primary")};
	`)}

  ${withProp("danger")(css`
		--theme-color: ${theme("colors.danger")};
		background-color: ${theme("colors.danger")};
	`)}

  ${withProp("outline")(css`
		background-color: transparent;
		border: solid 2px var(--theme-color, #888);
		color: var(--theme-color, #888);
	`)}

  ${withProp("ghost")(css`
		color: var(--theme-color);
		background-color: transparent;
	`)}

  ${withProp("large")(css`
		padding: .8rem 2rem;
		font-size: 1.2rem;
	`)}

  ${withProp("circle")(css`
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
`

export const Button = ButtonStyle
