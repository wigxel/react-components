import React from "react"
import { storiesOf } from "@storybook/react"
import { Button  } from "../src/components/buttons"
import { Theme } from "./styles/StyleComponents"
import { Tab } from "../src/components/layouts"

storiesOf("Buttons", module)
	.add("Overview", () => (
		<Theme>
			<Tab style={{ marginBottom: 10 }}>
				<Button small>Get Started</Button>
				<Button small primary>Get Started</Button>
				<Button small danger>Get Started</Button>
				<Button small outline>Get Started</Button>
				<Button small ghost>Stop Now</Button>
			</Tab>

			<Tab style={{ marginBottom: 10 }}>
				<Button>Get Started</Button>
				<Button primary>Get Started</Button>
				<Button danger>Get Started</Button>
				<Button outline>Get Started</Button>
				<Button ghost>Stop Now</Button>
			</Tab>

			<Tab style={{ marginBottom: 10 }}>
				<Button large>Get Started</Button>
				<Button large primary>Get Started</Button>
				<Button large danger>Get Started</Button>
				<Button large outline>Get Started</Button>
				<Button large ghost>Stop Now</Button>
			</Tab>
		</Theme>
	))
