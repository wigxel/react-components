import React from "react"
import { storiesOf } from "@storybook/react"
import { H3 } from "../components/typography/heading"
import { Stack } from "../components/layouts"
import { Theme } from "./styles/StyleComponents"
import {
	IconInput,
	RadioInput,
	RadioLabel,
	CurrencyInput,
	Checkbox,
	Input
} from "../components/forms"
import Checker from "../components/forms/Checker"
import { log, trace } from "../libs/helpers"

storiesOf("Form.Regular", module)
	.add("Inputs Fields", () => (
		<Theme>
			<section>
				<H3>Input with Icons</H3>
				<IconInput icon="home">
					<Input placeholder="Cup of Coffee" />
				</IconInput>
				<IconInput icon="search" placeholder="Enter the world" />

				<H3>Flat Inputs</H3>
				<Input placeholder="E-mail Address: John Doe" />
				<Input placeholder="First Name" />
				<Input placeholder="Cup of Coffee" />

				<H3>Full Width Input</H3>
				<Stack>
					<Input fullwidth placeholder="Cup of Coffee" />
					<Input fullwidth placeholder="Enter the world" />
					<Input fullwidth text="email" placeholder="someone@domain.co" />
				</Stack>
			</section>
		</Theme>
	))
	.add("Radio", () => (
		<Theme>
			<H3>Checkbox</H3>
			<Checker
				label="Choose Hobby"
				buttons={["Creative", "Modern", "Traditional"]} 
				onChange={val => { console.log(val) }}/>
			<Checker
				style={Checker.Styles.Flat} 
				label="Choose Hobby"
				buttons={["Design", "Laugh", "Cry", "Joker"]} 
				onChange={val => { console.log(val) }}/>
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
	.add("Number Input", () => (
		<Theme>
			<h1>Currency Input</h1>
			<p>Enter a number</p>
			<CurrencyInput onChange={e => log(e.target.value)} /> <br />
			<br />
			<p>Large</p>
			<CurrencyInput large />
			<p>Large & Fullwidth</p>
			<CurrencyInput fullwidth large isInvalid={trace("Message")} />
		</Theme>
	))
