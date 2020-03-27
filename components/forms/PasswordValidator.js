import React, { useState, useCallback } from "react"
import t from "prop-types"
import styled from "styled-components"
import { themeOr } from "../helpers"
import * as R from "ramda"

const theme = themeOr({
	danger: "crimson",
	primary: "#4a6dd2",
})

const Progress = styled.div`
	width: 100%;
	font-size: 1em;

	* {
		transition: all 1s ease-out;
	}

	.assertion {
		position: relative;
		padding-left: 2em;

		&::before {
			content: "";
			left: 0;
			height: 10px;
			will-change: right;
			position: absolute;
			border-radius: 13px;
			top: calc(50% - 5px);
			background-color: ${theme("danger")};
			right: calc(100% - 10px);
			transition: left 0.3s ease-out, right 0.3s ease-out;
		}
	}

	.-stroke {
		.assertion {
			color: ${theme("primary")};

			&::before {
				left: 1.5rem;
				right: 0;
				opacity: 0.5;
				background: ${theme("primary")};
			}
		}
	}

	.red {
		color: ${theme("danger")};
	}
`

const assert = pwd => e => R.test(e, pwd)
const testRegex = pwd => R.compose(assert(pwd), R.prop("regex"))
const setPassword = pwd =>
	R.compose(
		length => length == 0,
		R.length,
		R.filter(result => result == false),
		R.map(testRegex(pwd))
	)

export const PasswordValidator = ({ password, onStatus, rules }) => {
	const [lock, setLock] = useState(false)
	const passedAll = useCallback(setPassword(password), [])

	if (!lock) {
		if (passedAll(rules)) {
			if (onStatus) onStatus({ passed: true })
			setLock(true)
		}
	}

	return (
		<Progress>
			<b>Password must contain:</b>
			<div style={{ padding: ".2rem 0" }}>
				{rules.map(({ message, regex }, idx) => (
					<div
						key={idx}
						className={R.test(regex, password || "") ? "-stroke" : ""}
					>
						<span className="assertion">{message}</span>
					</div>
				))}
			</div>
		</Progress>
	)
}

PasswordValidator.defaultProps = {
	rules: [
		{
			message: "at leaset one Capital Letter (A - Z)",
			regex: /[A-Z]{1}/
		},
		{
			message: "a minimum of 6 characters",
			regex: /\S{6,}/i
		},
		{ message: "at least a digit number", regex: /\d{1}/ }
	]
}

PasswordValidator.propTypes = {
	rules: t.array,
	onStatus: t.func,
	password: t.string.isRequired
}

export default PasswordValidator
