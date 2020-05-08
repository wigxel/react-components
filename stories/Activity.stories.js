import React from "react"
import { Link } from "react-router-dom"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { Theme } from "./styles/StyleComponents"
import { Activity } from "../src/components/lists/lists"
import { H4 } from "../src/components/typography/type"

const entries = [
	"created a new event",
	"delete an event",
	"Received payment from client `ejowo`.",
	"booked all vendors",
	"change the status of `Roco's Baby Shower` ",
]

storiesOf("List", module)
	.addDecorator(withKnobs)
	.add("Activity List", () => (
		<Theme>
			<div style={{ display: "flex", gap: "1.5rem", flexFlow: "wrap row" }}>
				<section>
					<H4>Activity</H4>
					<Activity entries={entries} hoverable={true} />
				</section>

				<section>
					<H4>Activity List (Custom) </H4>
					<Activity
						entries={entries}
						render={(entry) => (
							<section>
								<b>{entry}</b> <br />
								<Link to="/#">
									<small>
										<i>3 seconds ago</i>
									</small>
								</Link>
							</section>
						)}
					/>
				</section>
			</div>
		</Theme>
	))
