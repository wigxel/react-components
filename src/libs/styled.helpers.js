import { css } from "styled-components"
import { withProp } from "../components/helpers"

export const fullWidth = withProp(
	"fullwidth",
	css`
		display: flex;
		width: 100%;
	`
)
