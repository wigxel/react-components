import React from "react"
import { storiesOf } from "@storybook/react"
import { Theme } from "./styles/StyleComponents"
import Dropdown from "../src/components/forms/Select"
import { log, trace } from "../src/libs/helpers"
import { CurrencyInput, SingleForm } from "../src/components/special/special"

const Fields = [
	{
		name: "username",
		type: "text",
		icon: "mdi-account",
		regex: /(\w)\.(\w)/gi,
	},
	{
		name: "email",
		type: "text",
		icon: "mdi-email",
		regex: /^.+@.+\..+$/,
	},
	{
		name: "password",
		type: "password",
		icon: "mdi-lock",
		regex: /[A-z0-9_-]+/,
	},
]

storiesOf("Special.Form", module)
	.add("Single Signup", () => {
		return (
			<Theme>
				<SingleForm
					form={Fields}
					onSubmit={console.log}
					message={<span>You&apos;re welcome</span>}
				/>
			</Theme>
		)
	})
	.add("Dropdown", () => {
		return (
			<Theme>
				<Dropdown
					style={{ width: "230px" }}
					options={Dropdown.options(["Male - Category Menu", "Dance", "Cry"])}
				/>
			</Theme>
		)
	})
	.add("Number Input", () => (
		<Theme>
			<h1>Currency Input</h1>
			<p>Enter a number</p>
			<CurrencyInput onChange={(e) => log(e.target.value)} /> <br />
			<br />
			<p>Large</p>
			<CurrencyInput large />
			<p>Large & Fullwidth</p>
			<CurrencyInput fullwidth large isInvalid={trace("Message")} />
		</Theme>
	))
