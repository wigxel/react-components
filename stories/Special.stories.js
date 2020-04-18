import React from "react"
import { storiesOf } from "@storybook/react"
import { Theme } from "./styles/StyleComponents"
import Dropdown from "../components/forms/Select"
import SingleForm from "../components/special/SingleForm"

const Fields = [
	{
		name: "username",
		type: "text",
		icon: "mdi-account",
		regex: /(\w)\.(\w)/gi
	},
	{
		name: "email",
		type: "text",
		icon: "mdi-email",
		regex: /^.+@.+\..+$/
	},
	{
		name: "password",
		type: "password",
		icon: "mdi-lock",
		regex: /[A-z0-9_-]+/
	},
]

storiesOf("Special.Form", module)
	.add("Single Signup", () => {
		return <Theme>
			<SingleForm
				form={Fields} onSubmit={console.log}
				message={<span>You&apos;re welcome</span>}/>
		</Theme>
	}).add("Dropdown", () => {
		return <Theme>
			<Dropdown style={{width: "230px"}} options={Dropdown.options(["Male - Category Menu", "Dance", "Cry"])}/>
		</Theme>
	})
