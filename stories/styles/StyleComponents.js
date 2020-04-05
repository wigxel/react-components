import React from "react"
import t from "prop-types"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { Light } from "./Theme"

const GlobalStyle = createGlobalStyle`
	:root {
		--heading-font: 'Poppins';
    --input-font: "Poppins";

		--ss-bg: white;
		--ss-btn-bg: #333;
		--ss-btn-color: #fff;
		--ss-height: 100px;
		--ss-border-width: 1px;
		--ss-text-color: #333;
		--ss-border-color: gray;
		--ss-icon-bg: whitesmoke;
	}

  body {
    font-family: PT Sans, Lato, "Segoe UI", sans-serif;
  }
`


export const SubHeading = ({ text }) => {
	return <span style={{ fontSize: "0.8em", display: "inline-block", opacity: "0.75", padding: ".2rem .4rem", border: "solid 1px gray", letterSpacing: "2px" }}>
		{text}
	</span>
}
SubHeading.propTypes = { text: t.string.isRequired }

export const Theme = props => (
	<ThemeProvider theme={Light}>
		<Router>
			{/* eslint-disable-next-line */}
			{props.children}
			<GlobalStyle />
		</Router>
	</ThemeProvider>
)
