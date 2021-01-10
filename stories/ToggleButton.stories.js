import React from "react"
import styled from "styled-components"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { Theme } from "./styles/StyleComponents"
import { Toggle } from "../src/components/buttons"
import { Stack } from "../src/components/layouts"

const Sp = styled.div`
	display: flex;
	justify-content: space-between;
	width: min(500px, 50vw);
`

storiesOf("Buttons", module)
	.addDecorator(withKnobs)
	.add("Toggles/Switch", () => {
		const state = boolean("Toggle")
		return (
			<Theme>
				<Stack>
					<Sp>
						Set Online Status <Toggle.Rounded small active={state} />
					</Sp>
					<Sp>
						Auto-Sync Contacts <Toggle.Circle small active={state} invert={true} />
					</Sp>
					<Sp>
						Delay after Download <Toggle.Square small active={state} invert={true} />
					</Sp>
					<Sp>
						Search History <Toggle.Line small active={state} label={true} />
					</Sp>
				</Stack>
			</Theme>
		)
	})
