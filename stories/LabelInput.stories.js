import React from "react"
import { storiesOf } from "@storybook/react"
import { H3, H4 } from "../components/typography/heading"
import { Stack } from "../components/layouts"
import { Theme } from "./styles/StyleComponents"
import { Input, Select, Textarea } from "../components/forms/labelInputs"
// import { log, trace } from '../libs/helpers';

const HashIcon = () => (
	<span style={{ lineHeight: "30px", fontWeight: "500", color: "orange" }}>
    #
	</span>
)

const Message = () => (
	<div style={{ color: "indianred", fontSize: "0.8rem" }}>
    Please enter your name
	</div>
)

storiesOf("Form.InputLabel", module)
	.add("Label Input", () => (
		<Theme>
			<Stack large noExtraSpace>
				<Input.Label type="text" label="Interests" fullwidth />
				<Input.Label label="Surname" type="text" icon={<HashIcon />} />
				<Input.Label
					label="Dreams"
					type="text"
					icon={<HashIcon />}
					message={<Message />}
				/>
			</Stack>
		</Theme>
	))
	.add("Select", () => (
		<Theme>
			<H3>Select and Options</H3>
			<Select
				label="Choose Lifestyle"
				icon={<HashIcon />}
				onChange={val => {
					console.log("New Value", val.target.value)
				}}
			>
				{["Fun", "Blank", "Creative"].map(val => (
					<Select.Option value={val} text={val} selected={val === "Blank"} />
				))}
			</Select>
		</Theme>
	))
	.add("Textarea", () => (
		<Theme>
			<H3>Textarea</H3>
			<Textarea label="About You" />
		</Theme>
	))