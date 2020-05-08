import React from "react"

import { storiesOf } from "@storybook/react"
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { H2, P } from "../src/components/typography/type"

storiesOf("Welcome", module).add("to Storybook", () => (
	<div>
		<H2>The Design Lab for Project UI components</H2>
		<P>It all begins from the first component.</P>
	</div>
))
