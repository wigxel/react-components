import React, { useEffect, useCallback } from "react"
import t from "prop-types"
import styled from "styled-components"
import { themeOr } from "../../libs/styled.helpers"
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

export const forRules = rules => str => {
	const textRegex = regex => R.test(regex)
	const passedAll = R.compose(
		R.equals(rules.length),
		R.length,
		R.filter(fn => fn(str)),
		R.map(R.compose(textRegex, R.prop("regex")))
	)

	return passedAll(rules)
}

export const PasswordValidator = ({ password, onStatus, rules }) => {
	const testStr = useCallback(forRules(rules), [])
	useEffect(() => {
		if (onStatus) {
			onStatus({ passed: testStr(password) })
		}
	}, [password, onStatus])

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
