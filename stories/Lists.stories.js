import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { Theme } from "./styles/StyleComponents"
import { FlatList, Collapsible } from "../src/components/lists"
import { H4, P } from "../src/components/typography"
import { Stack } from "../src/components/layouts"

const stories = storiesOf("List", module).addDecorator(withKnobs)

stories
	.add("Collapsible", () => {
		return (
			<Theme>
				<Stack>
					<H4>Collapsible</H4>
					<Collapsible open={boolean("Toggle One", false)}>
						<P>Lorem Morgan</P>
						<P>Lorem Morgan</P>
						<P>John Carter</P>
						<P>Emily Richards</P>
					</Collapsible>

					<Collapsible open={boolean("Toggle Two", true)}>
						<FlatList>
							<FlatList.Item>Lorem Morgan</FlatList.Item>
							<FlatList.Item>Lorem Morgan</FlatList.Item>
							<FlatList.Item>John Carter</FlatList.Item>
							<FlatList.Item>Emily Richards</FlatList.Item>
						</FlatList>
					</Collapsible>
				</Stack>
			</Theme>
		)
	})
	.add("FlatList", () => {
		return (
			<Theme>
				<div>
					<H4>Flat List</H4>
					<FlatList>
						<FlatList.Item>Lorem Morgan</FlatList.Item>
						<FlatList.Item>Lorem Morgan</FlatList.Item>
						<FlatList.Item>John Carter</FlatList.Item>
						<FlatList.Item>Emily Richards</FlatList.Item>
					</FlatList>
				</div>
			</Theme>
		)
	})
