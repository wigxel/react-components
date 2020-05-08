/* eslint-disable */ 
import React, { useState, useCallback } from "react"
import styled, { css } from "styled-components"
import { map } from "ramda"

const Options = styled.div`
	background-color: transparent;
	padding: .5rem 1rem;
	font-size: 1em;
	display: inline-block;
	border-radius: 5px;
	min-width: 100px;
	white-space: nowrap;
	position: relative;
	cursor: pointer;
	border: solid 1px #c3c3c3;

	> label {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		&::after {
			content: "";
			display: inline-block;
			width: 10px;
			height: 10px;
			margin-left: 3px;
			background: currentColor;
		}
	}
	
	.dp-options {
		position: absolute;
		top: 40px;
		z-index: 59;
		box-shadow: 0 2px 3px rgba(0,0,0,.16);
		left: 0; right: 0;
	}

	.dp-option {
		display: block;
		padding: .5rem;
		background: white;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		border-bottom: solid 1px #e3e3e3;
		&:last-child {
			border-bottom: 0;
		}
	}

	${props => props.noBorder && css`
		border-color: transparent;
		padding-left: 0;
		padding-right: 0;
	`}

	${props => props.withBg && css`
		background-color: #007bff;
		border: 0;

		label {
			color: white;
			&::after {
				background-color: white;
			}	
		}
	`}
`

export default function Select (props) {
	const [current, setCurrent] = useState(props.label || props.options[0])
	const [open, setOpen] = useState(false)
	const makeClassName = useCallback((e) => {
		const activeClass = (e.value === current.value ? "text-green-500 bg-green-100" : "")
		return `dp-option ${activeClass}`
	}, [current])

	return <Options {...props} onClick={() => setOpen(!open)}>
		<label>
			{current.text} &nbsp;
			{props.canEdit && <span className="text-green-500 underline">Can Edit</span>}
		</label>
		{open && <div className="dp-options">
			{props.options.map(e => (
				<div className={makeClassName(e)} onClick={() => {
					setCurrent(e)
					props.onChange(e)
				}}>
					<span className="flex items-center">
						{e.icon &&<span className="-ml-1 mr-2 flex-shrink-0">{e.icon}</span>}
						<span>{e.text}</span>
					</span>
				</div>
			))}
		</div>}
	</Options>
}

Select.Icon = (props) => {
	return <img {...props} alt={props.alt} width={10}/>
}

Select.option = (text, options) => {
	const optionObject = Object.create({
		selected: false,
		text: "Option",
		value: "option"
	})

	return Object.assign(optionObject, {
		...(options || { value: text.toLowerCase() }),
		text
	})
}

Select.options = (arr) => map(text => Select.option(text), arr)
