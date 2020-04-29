import React from "react"
import { storiesOf } from "@storybook/react"
import { H3 } from "../components/typography/heading"
import { Stack } from "../components/layouts"
import { Theme, SubHeading } from "./styles/StyleComponents"
import { Labelled } from "../components/forms"

const { Input, Select, Textarea } = Labelled

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

storiesOf("Form.Labelled", module)
	.add("Label Input", () => {
		const formRef = React.useRef()
		console.log("FormRef", formRef)

		return <Theme>
			<Stack large noExtraSpace>
				<Stack>
					<SubHeading text="FULL-WIDTH INPUT" />
					<Input ref={formRef} type="text" label="Enter Email" icon={<span style={{ fontSize: "1rem" }}>@</span>} fullwidth />
					<Input type="text" label="Interests" fullwidth />
					<Textarea label="Biography" />
				</Stack>
				<Stack small>
					<SubHeading text="DISABLED" /> <br/>
					<Input label="Surname" disabled={true} type="text" 
						icon={<HashIcon />} 
						style={{width: "350px" }} />
					<Textarea label="About You" disabled={true}/>
				</Stack>
				<Stack small>
					<SubHeading text="INPUT WITH MESSAGE" /> <br/>
					<Input
						label="Dreams"
						type="text"
						icon={<HashIcon />}
						message={<Message />}
					/>
					<Textarea label="Description" message={<Message />} placeholder="How to get this started?" />
				</Stack>
			</Stack>
		</Theme>
	})
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
				{["Fun", "Blank", "Creative"].map((val, idx) => (
					<Select.Option
						key={idx}
						fullwidth
						value={val} text={val} 
						selected={val === "Blank"} />
				))}
			</Select>
		</Theme>
	))