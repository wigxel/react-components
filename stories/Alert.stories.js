import React from "react"
import { storiesOf } from "@storybook/react"
import { Stack } from "../components/layouts"
import { Theme, SubHeading } from "./styles/StyleComponents"
import Alert from "../components/Alert"

storiesOf("Alert", module)
	.add("Default", () => (
		<Theme>
			<Stack.Flex alignItems="start">
				<SubHeading text="DEFAULT" />
				<div>
					<Alert style={{ textAlign: "center" }}>
						<b>Sorry,</b> action not accepted!
					</Alert>
				</div>
				<Alert type="success" shadow={false} message="Account created successfully." style={{ width: "50vw" }}/>
				<Alert message="Sorry, action not accepted!" shadow={false}  fullwidth />
				<Alert message="Sorry, action not accepted!" shadow={false} style={{ width: "70vw" }} />
				<Alert type="danger" shadow={false} message="Sorry, action not accepted!" />
				<Alert type="warning" shadow={false} message="Sorry, action not accepted!" />
				{/* with icon */}
				<SubHeading text="ICONS" />
				<Alert type="danger" icon={<Icon />} shadow message="Sorry, action not accepted!" />

				{/* collapsible */}
				<SubHeading text="COLLAPSIBLE" />
				<Alert type="danger"
					icon={<Icon />} 
					shadow 
					collapsible
					message="Sorry, action not accepted!" />
				<Alert type="info" 
					icon={<Icon />} 
					shadow
					collapsible
					onClose={() => console.log("closing!")}>
					<i>Sorry, action not accepted!</i>
				</Alert>
				<SubHeading text="CUSTOM & TEXT WRAPPING" />
				<Alert type="custom" 
					icon={<Icon />} 
					shadow
					style={{ width: "40vw" }}
					collapsible
					onClose={() => console.log("closing!")}>
					<span style={{fontSize: ".8em" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis voluptatem nostrum, debitis. Ipsum, adipisci, totam!</span>
				</Alert>
			</Stack.Flex>
		</Theme>
	))


const Icon = () => {
	return <span style={{ 
		borderRadius: "1rem", display: "block", width: "30px", height: "30px", background: "gray"}}>
	</span>
}