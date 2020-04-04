import React from "react"
import { storiesOf } from "@storybook/react"
import SingleSignup from "../components/special/SingleForm"

const Fields = {
	"full name": {
		value: "",
		type: "text",
		icon: "mdi-account",
		regexp: /.+/
	},
	email: {
		value: "",
		type: "text",
		icon: "mdi-email",
		regexp: /^.+@.+\..+$/
	},
	password: {
		value: "",
		type: "password",
		icon: "mdi-lock",
		regexp: /[A-z0-9_-]+/
	},
}

storiesOf("Special.Form", module)
	.add("Single Signup", () => {
		return <div>
			<SingleSignup form={Fields} />
		</div>
	})
