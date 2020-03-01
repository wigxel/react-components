import React from "react"
import { storiesOf } from "@storybook/react"
import { H1 } from "../components/typography/heading"
import { Stack } from "../components/layouts"
import { Theme } from "./styles/StyleComponents"
import { Type } from "../components/typography"

storiesOf("Type", module)
	.add("Inputs Fields", () => {
		return <Theme>
			<Stack small noExtraSpace>
				<H1 light>
					<span>We build products in the <br/> best</span>
					<Type
						speed={200}
						style={{fontFamily: "Didot", fontSize: "1.4em", color: "blue" }} 
						values={["Walking", "Dancing","Smiling"]} />
					<span><br/> Way Possible.</span>
				</H1>
			</Stack>
		</Theme>
	})
