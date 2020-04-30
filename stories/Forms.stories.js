import React from "react"
import { storiesOf } from "@storybook/react"
import { H3 } from "../components/typography/heading"
import { Stack } from "../components/layouts"
import { Theme } from "./styles/StyleComponents"
import {
	RadioInput,
	RadioLabel,
	Checkbox,
	Checker,
	Input
} from "../components/forms"

storiesOf("Form.Regular", module)
	.add("Inputs Fields", () => (
		<Theme>
			<section>
				<H3>Flat Inputs</H3>
				<Input placeholder="E-mail Address: John Doe" />
				<Input placeholder="First Name" />
				<Input placeholder="Cup of Coffee" />

				<H3>Full Width Input</H3>
				<Stack.Flex>
					<Input fullwidth placeholder="Cup of Coffee" />
					<Input fullwidth placeholder="Enter the world" />
					<Input fullwidth text="email" placeholder="someone@domain.co" />
				</Stack.Flex>
			</section>
		</Theme>
	))
	.add("Checker", () => (
		<Theme>
			<section style={{ fontSize: "12px" }}>
				<div>
					<Checker
						style={Checker.Styles.Flat}
						buttons={["I Am", "Without", "A Label"]} 
						onChange={val => { console.log(val) }}/>
				</div>
				<div>
					<Checker
						label="Choose Hobby"
						buttons={["Creative", "Modern", "Traditional"]} 
						onChange={val => { console.log(val) }}/>
				</div>
				<Checker
					style={Checker.Styles.Flat} 
					label="Choose Hobby"
					disabled={true}
					buttons={["Design", "Laugh", "Cry", "Joker"]} 
					onChange={val => { console.log(val) }}/>
			</section>
		</Theme>
	))
	.add("Radio/Checkbox", () => (
		<Theme>
			<H3>Radio</H3>
			<RadioInput name="poor" value="Mobbi" /> Male
			<RadioLabel name="poor" value="Antelope" fullwidth />
			<H3>Checkbox</H3>
			<div>
				<Checkbox fullwidth name="rich" value="Antelope" /> Designer
			</div>
			<div>
				<Checkbox fullwidth name="rich" value="Antelope" /> Morpheus
			</div>
		</Theme>
	))