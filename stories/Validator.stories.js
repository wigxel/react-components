import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { H3, P } from "../src/components/typography/type"
import { Stack, Cluster } from "../src/components/layouts/layout"
import { PasswordValidator, Labelled } from "../src/components/forms/form"
import { Theme, SubHeading } from "./styles/StyleComponents"

const { Input } = Labelled

storiesOf("Validators", module)
	.addDecorator(withKnobs)
	.add("PasswordValidator", () => {
		const knobPass = text("Password", "")
		const [password, setPassword] = useState("")

		return (
			<Theme>
				<Cluster small>
					<Stack.Flex large noExtraSpace>
						<Stack small noExtraSpace>
							<H3>Password Validator</H3>
							<SubHeading text="PROPS" />
							<P>
								<code>Password : String</code> <br />
								<code>Rules : {"{message, regex}"} []</code>
							</P>
						</Stack>
						<Stack.Flex small>
							<SubHeading text="EXAMPLE" />
							<Input
								type="password"
								label="Enter Password"
								onChange={({ target }) => setPassword(target.value)}
							/>
							<PasswordValidator password={password || knobPass} />
						</Stack.Flex>
					</Stack.Flex>
				</Cluster>
			</Theme>
		)
	})
