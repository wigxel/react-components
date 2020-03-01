import React, { useState, useEffect } from "react"
import t from "prop-types"

const delay = (number) => new Promise((res) => 
	setTimeout(res, number))

const next = (index, entries) => {
	if (index < (entries.length - 1)) {
		return (index + 1)
	}
	return 0
}

export const Type = ({ values, ...props }) => {
	const [index, setIndex] = useState(0)
	const [value, setValue] = useState("")
	const [current, setCurrent] = useState(values[index])

	useEffect(() => {
		const moveFirstChar = (word, value) => {
			const wordArr = word.substr(1)
			return [wordArr, value + word[0]]
		}
		var intId = setInterval(() => {
			if (current === "" && value === "") { 
				const idx = next(index, values)
				setIndex(idx)
				return setCurrent(values[idx])
			}
			if (current == "") {
				if (value === values[index]) {
					delay(500).then(() => {
						setValue(value.substr(0, value.length - 1))
					})
				} else {
					setValue(value.substr(0, value.length - 1))
				}
				return clearInterval(intId)
			}
			const [_current, _value] = moveFirstChar(current, value)
			setCurrent(_current)
			setValue(_value)
		}, props.speed || 200)

		return () => clearInterval(intId)
	})

	return <span {...props}> {value}| </span>
}

Type.propTypes = {
	values: t.array.isRequired,
	speed: t.number,
}
