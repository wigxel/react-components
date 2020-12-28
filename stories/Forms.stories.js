import React from "react"
import { storiesOf } from "@storybook/react"
import { H3 } from "../src/components/typography"
import { Stack } from "../src/components/layouts"
import { Theme } from "./styles/StyleComponents"
import { 
	Radio, Radio1, 
	//RadioLabel, 
	Checkbox, 
	Checkbox1, 
	Input 
} from "../src/components/forms"

storiesOf("Form.Regular", module)
	.add("Inputs Fields", () => (
		<Theme>
			<section>
				<H3>Flat Inputs</H3>
				<Input placeholder="E-mail Address: John Doe" style={{
					width: 400
				}}/>
				<Input placeholder="Cup of Coffee" />

				<H3>Large Input</H3>
				<Stack.Flex alignItems="flex-start">
					<Stack>
						<Input placeholder="02" small style={{ width: 50, textIndent: '.5rem' }}/>
						<Input placeholder="02" small style={{ width: 50, textIndent: '.5rem' }}/>
						<Input placeholder="02" small style={{ width: 50, textIndent: '.5rem' }}/>
					</Stack>
					<Input placeholder="First Name" large fullwidth />
				</Stack.Flex>
				
				<H3>Full Width Input</H3>
				<Stack.Flex>
					<Input fullwidth placeholder="Cup of Coffee" />
					<Input fullwidth placeholder="Enter the world" />
					<Input fullwidth text="email" placeholder="someone@domain.co" />
				</Stack.Flex>
			</section>
		</Theme>
	))
	.add("Radio/Checkbox", () => (
		<Theme>
			<H3>Radio</H3>
			<Radio.Pill>
				<Radio name="poor" value="lorem" />
				<span>&nbsp; Style 1</span>
			</Radio.Pill>
			<Radio.Pill>
				<Radio1 name="poor" value="lorem" />
				<span>&nbsp; Style 2</span>
			</Radio.Pill>
			{/** <RadioLabel name="poor" value="ipsum" label="Style 3" fullwidth /> **/}
			<H3>Checkbox</H3>
			<Radio.Pill>
				<Checkbox fullwidth name="rich" value="Antelope" /> Designer
			</Radio.Pill>
			<Radio.Pill>
				<Checkbox1 fullwidth name="rich" value="Antelope" /> Morpheus
			</Radio.Pill>
		</Theme>
	))
