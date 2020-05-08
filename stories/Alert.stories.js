import React from "react"
import Alert from "../src/components/Alert"
import { Stack } from "../src/components/layouts"
import { storiesOf } from "@storybook/react"
import { Theme, SubHeading } from "./styles/StyleComponents"

storiesOf("Alert", module).add("Default", () => (
	<Theme>
		<Stack.Flex alignItems="start">
			<SubHeading text="DEFAULT" />
			<div>
				<Alert style={{ textAlign: "center" }}>
					<b>Sorry,</b> action not accepted!
				</Alert>
			</div>
			<Alert
				type="success"
				message="Account created successfully."
				style={{ width: "50vw" }}
			/>
			<Alert message="Sorry, action not accepted!" fullwidth />
			<Alert message="Sorry, action not accepted!" style={{ width: "70vw" }} />
			<Alert type="danger" message="Sorry, action not accepted!" />
			<Alert type="warning" message="Sorry, action not accepted!" />
			{/* with icon */}
			<SubHeading text="WITH SHADOW" />
			<Alert
				type="danger"
				shadow
				icon={<Icon />}
				message="Sorry, action not accepted!"
			/>

			<SubHeading text="ICONS" />
			<Alert
				type="danger"
				icon={<Icon />}
				shadow
				message="Sorry, action not accepted!"
			/>

			{/* collapsible */}
			<SubHeading text="COLLAPSIBLE" />
			<Alert
				type="danger"
				icon={<Icon />}
				shadow
				collapsible
				message="Sorry, action not accepted!"
			/>
			<Alert
				type="info"
				icon={<Icon />}
				shadow
				collapsible
				onClose={() => console.log("closing!")}
			>
				<i>Sorry, action not accepted!</i>
			</Alert>
			<SubHeading text="TEXT WRAPPING" />
			<Alert
				type="light"
				shadow
				collapsible
				style={{ width: "40vw" }}
				onClose={() => console.log("closing!")}
			>
				<span style={{ fontSize: ".9em" }}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
					voluptatem nostrum, debitis. Ipsum, adipisci, totam!
				</span>
			</Alert>
			<SubHeading text="CUSTOM &" />
			<Alert
				type="custom"
				icon={<Icon />}
				style={{ width: "40vw" }}
				collapsible
				onClose={() => console.log("closing!")}
			>
				<span style={{ fontSize: ".9em" }}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
					voluptatem nostrum, debitis. Ipsum, adipisci, totam!
				</span>
			</Alert>
		</Stack.Flex>
	</Theme>
))

const Icon = () => {
	return (
		<span
			style={{
				borderRadius: "1rem",
				display: "block",
				width: "30px",
				height: "30px",
				background: "gray",
			}}
		></span>
	)
}
