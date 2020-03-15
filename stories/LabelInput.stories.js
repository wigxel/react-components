import React from "react"
import { storiesOf } from "@storybook/react"
import { H3 } from "../components/typography/heading"
import { Stack } from "../components/layouts"
import { Theme, SubHeading } from "./styles/StyleComponents"
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
				<Stack>
					<SubHeading text="FULL-WIDTH INPUT" />
					<Input.Label type="text" label="Interests" fullwidth />
					<Textarea label="Biography" />
				</Stack>
				<Stack small>
					<SubHeading text="DISABLED" /> <br/>
					<Input.Label label="Surname" disabled={true} type="text" 
						icon={<HashIcon />} 
						style={{width: "350px" }} />
					<Textarea label="About You" disabled={true}/>
				</Stack>
				<Stack small>
					<SubHeading text="INPUT WITH MESSAGE" /> <br/>
					<Input.Label
						label="Dreams"
						type="text"
						icon={<HashIcon />}
						message={<Message />}
					/>
					<Textarea label="Description" message={<Message />} placeholder="How to get this started?" />
				</Stack>
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