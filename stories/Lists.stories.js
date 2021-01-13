import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { Theme } from "./styles/StyleComponents"
import { Collapsible } from "../src/components/lists"
import { H4, P } from "../src/components/typography"
import { Stack } from "../src/components/layouts"

const stories = storiesOf("List", module).addDecorator(withKnobs)

stories
	.add("Collapsible", () => {
		return (
			<Theme>
				<Stack>
					<H4>Collapsible</H4>
					<Collapsible expand={boolean("Toggle One", false)}>
						<P>Lorem Morgan</P>
						<P>Lorem Morgan</P>
						<P>John Carter</P>
						<P>Emily Richards</P>
					</Collapsible>
				</Stack>
			</Theme>
		)
	})
