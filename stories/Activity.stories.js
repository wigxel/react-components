import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { Theme } from "./styles/StyleComponents"
import { Activity } from "../src/components/lists"

const entries = [
	{ text: "Delete an event", dateString: "2days ago" },
	{ text: "Booked all vendors", dateString: "3days ago" },
	{ text: "Created a new event", dateString: "2hours ago" },
	{ text: "Received payment from client `ejowo`.", dateString: "12 minutes ago" },
	{ text: "Changed the status of `Roco's Baby Shower` ", dateString: "now" },
]

storiesOf("Activity", module)
	.addDecorator(withKnobs)
	.add("Default", () => (
		<Theme>
			<Activity 
				size={text("Size", "1.2rem")}
				entries={entries} hoverable={true} />
		</Theme>
	))
	.add("Square", () => (
		<Theme>
			<Activity
				size={text("Size", "1.2rem")}
				entries={entries}
				bulletCurve={text("bulletCurve", "3px")}
			/>
		</Theme>
	))
	.add("Custom", () => (
		<Activity
			hoverable
			size={text("Size", "1.2rem")}
			entries={entries}
			render={(entry) => (
				<section style={{ WebkitUserSelect: "none", display: "inline-block" }}>
					<b style={{ backgroundColor: "white", display: "inline-block", border: "solid 1px #bbb", padding: 10, borderRadius: 6 }}>{entry.text}</b> <br />
					<div style={{ textAlign: "right" }}>
						<small style={{ opacity: ".5", paddingRight: "1rem" }}>
							<i>{entry.dateString}</i>
						</small>
					</div>
				</section>
			)}
		/>))