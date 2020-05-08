import React from "react"
import { storiesOf } from "@storybook/react"
import { Stack } from "../src/components/layouts"
import { Theme } from "./styles/StyleComponents"
import { H1, H2, H3, H4, Type } from "../src/components/typography"

storiesOf("Type", module)
	.add("Headings", () => (
		<Theme>
			<H1>The Movement</H1>
			<H2>The Movement</H2>
			<H3>The Movement</H3>
			<H4>The Movement</H4>
		</Theme>
	))
	.add("Auto Typing", () => {
		return (
			<Theme>
				<Stack small noExtraSpace>
					<H1 light>
						<span>
							We build products in the <br /> best
						</span>
						<Type
							speed={200}
							style={{ fontFamily: "Didot", fontSize: "1.4em", color: "blue" }}
							values={["Walking", "Dancing", "Smiling"]}
						/>
						<span>
							<br /> Way Possible.
						</span>
					</H1>
				</Stack>
			</Theme>
		)
	})
