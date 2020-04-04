import React from "react"
import t from "prop-types"
import styled from "styled-components"
// import { log } from "../../libs/helpers"
// const delay = (duration) => new Promise((res) => setTimeout(res, duration))

// const Identity = (x) => {
// 	return {
// 		map: (fun) => {
// 			return Identity(fun(x))
// 		},
// 		delay: async (duration) => {
// 			await delay(duration)
// 			return Identity(x)
// 		},
// 		bounceOut: () => {
// 			x.style.left = 0
// 			return Identity(x)
// 		}
// 	}
// }

// const IconAnimation = Object.freeze({
// 	hide: (el) => {
// 		el.style.visibility = "hidden"
// 		return el
// 	},
// 	bounceOut: (el) => {
// 		el.style.left = 0
// 		el.style.opacity = 1
// 		return el
// 	},
// 	slideRight: (offset) => (el) => {
// 		el.style.transform = `translateX(${offset}px) rotateY(180deg)`
// 		el.style.opacity = 0
// 		return el
// 	}
// })

// const IconHolder = () => {
// 	let left = 0
// 	const holder = document.querySelector(".wg-ss__icon_holder")
// 	let icons = [].slice.call(holder.children).map(x => Identity(x))

// 	return {
// 		init() {
// 			icons.map((e, index) => {
// 				e.map((x) => {
// 					x.style.left = `${left}px`
// 					if (index > 0) {
// 						x.style.borderColor = "#FFFFFF"
// 						x.style.opacity = "0.1"
// 					}
// 					left += 5
// 				})
// 				return e
// 			}).reverse().map((e, index) => {
// 				e.map(x => {
// 					x.style.zIndex = index
// 				})
// 			})
// 		},
// 		fetchIcon(index) {
// 			if (typeof index === "number") {
// 				return icons[+index]
// 			} else {
// 				throw Error("invalid index arguemnt, excepted a Number got " + typeof index)
// 			}
// 		}
// 	}
// }

// function FormError(message, code) {
// 	this.message = message
// 	this.code = code
// 	this.name = "Form Error"
// }

// const fakeFields = {
// 	"full name": {
// 		value: "",
// 		icon: "mdi-account",
// 		regexp: /.+/
// 	},
// 	email: {
// 		value: "",
// 		icon: "mdi-email",
// 		regexp: /^.+@.+\..+$/
// 	},
// 	password: {
// 		value: "",
// 		icon: "mdi-lock",
// 		regexp: /[A-z0-9_-]+/
// 	},
// }

// const SS = (obj) => {
// 	const ssInput = document.querySelector(".wg-ss__input"),
// 		span = document.querySelector("#enter"),
// 		input = document.createElement("input")
// 	icon = ssInput.querySelector(".wg-ss__icon"),
// 	label = ssInput.querySelector(".wg-ss__text_holder > label"),
// 	submitButton = ssInput.querySelector(".wg-ss__submit"),
// 	iconHolder = IconHolder(),
// 	fields = obj || fakeFields
		
// 	let counter = 0
// 	const EVENTS = {}
// 	const getOffset = () => Math.abs(ssInput.clientWidth)
// 	const current = () => Object.keys(fields)[counter]
// 	const getRegExp = () => {
// 		const input = fields[current()]
// 		return input.regexp.test(input.value)
// 	}
// 	const isFinished = () => counter > (Object.keys(fields).length - 1)
// 	const changeLabel = () => label.innerText = current()
// 	const hideLabel = () => label.style.display = "none"
// 	const makeDots = () => "<span class=\"dots\"></span>"
// 	const updateWidth = (width) => {
// 		let holder = document.querySelector(".wg-ss__text_holder")
// 		ssInput.style.width = typeof width !== "undefined" ? width : `${(holder.clientWidth + 100)}px`
// 	}

// 	const shakeButton = () => {
// 		ssInput.classList.add("wiggle")
// 		submitButton.classList.add("shake")

// 		setTimeout(() => {
// 			ssInput.classList.remove("wiggle")
// 			submitButton.classList.remove("shake")
// 		}, 600)
// 	}

// 	const animateCurrentIcon = () => {
// 		iconHolder
// 			.fetchIcon(counter)
// 			.map(IconAnimation.slideRight(getOffset()))
// 			.delay(1000).then((icon) => {
// 				icon.map(IconAnimation.hide).delay(300)
// 					.then(icon => icon.map(resizeInput))
// 			})
// 	}

// 	const animateNexIcon = () => {
// 		const next = counter
// 		isFinished() ||
// 						iconHolder.fetchIcon(next).delay(300)
// 							.then(icon => icon.map(IconAnimation.bounceOut))
// 	}

// 	const submit = () => {
// 		if (!isFinished()) {
// 			animateCurrentIcon();
// 			(counter += 1)
// 			animateNexIcon()
// 		}
// 		if (isFinished())
// 			throw new FormError("Field fields Finished!", 54)
// 	}

// 	const resizeInput = () => {
// 		updateWidth()
// 		Promise.resolve().then(delay(1000))
// 			.then(() => updateWidth("auto"))
// 	}

// 	const clearText = () => {
// 		input.value = ""
// 		span.innerText = ""
// 	}

// 	const playFinalAnimation = () => {
// 		clearText()
// 		resizeInput()
// 		hideLabel()
// 	}

// 	return {
// 		init() {
// 			changeLabel()
// 			iconHolder.init()
// 			ssInput.appendChild(input)

// 			ssInput.addEventListener("click", this.focusIn.bind(this))
// 			submitButton.addEventListener("click", this.send.bind(this))
// 			input.addEventListener("blur", () => ssInput.classList.remove("focused"))
// 			window.requestAnimationFrame(this.typeIn)
// 			return this
// 		},
// 		focusIn() {
// 			input.focus()
// 			ssInput.classList.add("focused")
// 			input.addEventListener("keyup", this.typeIn.bind(this))
// 		},
// 		typeIn(event) {
// 			if (event.keyCode === 13) {
// 				this.send.bind(this)()
// 				return
// 			}
// 			const currentField = fields[current()]

// 			if (current() === "password") {
// 				currentField.value = [].slice.call(input.value).join("")
// 				span.innerHTML = currentField.value.split("").map(makeDots).join("")
// 			} else {
// 				span.innerHTML = currentField.value = [].slice.call(input.value).join("").replace(" ", "&nbsp;")
// 			}
// 			updateWidth()
// 		},
// 		send() {
// 			(isFinished()) ||
// 						this.validate()
// 							.then(submit)
// 							.then(delay(120))
// 							.then(changeLabel)
// 							.then(clearText)
// 							.catch(err => {
// 								if (err.code === 54) {
// 									this.destruct()
// 								} else {
// 									shakeButton()
// 								}
// 								this.fireEvent("error", err)
// 							})
// 		},
// 		async validate() {
// 			if (getRegExp()) return ""
// 			throw Error("Validation Failed for field: " + current())
// 		},
// 		on(action, callback) {
// 			EVENTS[action] = callback
// 			return this
// 		},
// 		fireEvent(eventname, ...args) {
// 			if (Object.keys(EVENTS).includes(eventname))
// 				switch (eventname) {
// 				case "complete":
// 					args = [fields]
// 				default:
// 					EVENTS[eventname].apply(this, [...args])
// 				}
// 		},
// 		destruct() {
// 			Promise.resolve().then(playFinalAnimation).then(delay(300))
// 				.then(() => {
// 					ssInput.classList.remove("focused")
// 					ssInput.classList.add("finished")
// 				})
// 			ssInput.removeEventListener("click", this.focusIn.bind(this))
// 			submitButton.removeEventListener("click", this.send.bind(this))
// 			input.outerHTML = ""
// 			submitButton.outerHTML = ""
// 			this.fireEvent("complete")
// 		}
// 	}
// }

const StyleWrap = styled.div`
	--ss-height: 150px;
	--w-ss-background: white;
	--ss-border-width: 2px;

	font-family: "Sen";
	position: relative;
	overflow: hidden;
	align-items: center;
	display: inline-flex;
	animation-delay: 300ms;
	box-sizing: border-box;
	height: var(--ss-height);
	min-width:  calc(var(--ss-height) * 5);
	border-radius: calc( var(--ss-height) / 2);
	border: solid var(--ss-border-width) black;
	transition: width .3s cubic-bezier(0.07, 0.27, 0.15, 0.95);

	* {
		// outline: solid 1px red;
	}

	& > input {
		width: 0.1px;
		height: 0.1px;
		opacity: 0;
	}

	.wg-ss__holder {
		width: 100%;
		display: flex;
	}

	.wg-ss__icon_holder {
		z-index: 3;
		position: relative;
		flex: 0 0 var(--ss-height);

		& > .wg-ss__icon {
			position: absolute !important;
			top: 0;
			left: 0;
			z-index: 0;
		}

		.wg-ss__icon {
			width: var(--ss-height);
			height: var(--ss-height);
			z-index: 4;
			display: block;
			box-sizing: border-box;
			text-align: center;
			flex: 0 0 var(--ss-height);
			line-height: var(--ss-height);
			border-radius: calc( var(--ss-height) / 2);
			left: calc(var(--index) * 5px);
			opacity: calc(1 / var(--index));
			border: solid var(--ss-border-width) black;
			background-color: var(--w-ss-background, #333);
			transition: all .3s cubic-bezier(0.7, 0.1, 0.27, 0.99);
		}
	}

	@keyframes blink {
		from { opacity: 1 }
		to {opacity: 0}
	}

	.wg-ss__text_holder {
		flex: 1 0;
		display: grid;
		white-space: nowrap;
		justify-content: start;
		height: var(--ss-height);
		grid-template-column: minmax(40vw, 80vw);
		grid-template-rows:  calc(var(--ss-height) * .3)  calc(var(--ss-height) * .7);

		input[type=password] {
			width: 15px;
			height:
			background: white;
			display: inline-block;
			margin-right: 3px;
			border-radius: 50px;

			&::selection {
				color: pink;
				background-color: blue;
			}
		}
		
		span#enter {
			padding-left: 5px;
			font-size: 5rem;
			flex: 1 1 70%;
		}

		input {
			z-index: 0;
			border: none;
			position: absolute;
			opacity: 0;
			top: 0; right: 0;
			background-color: transparent;

			&:focus {
				outline: none !important;
			}
		}
		
		label {
			display: block;
			color: #333;
			text-transform: uppercase;
			font-size: 1em;
			text-indent: 10px;
			margin-top: -5px;
			height: calc(var(--ss-height) * .3);
			line-height: calc(var(--ss-height) * .3);
		}
	}

	.wg-ss__submit {
		--arc-space: calc( var(--ss-height) * 0.2);
		--submit-height: calc( var(--ss-height) - var(--arc-space) );
		width: var(--submit-height);
		height: var(--submit-height);
		flex: 0 0 var(--submit-height);
		margin-right: calc(var(--arc-space) - calc(var(--ss-height)* 0.1));
		align-self: center;
		border: none;
		display: block;
		box-sizing: border-box;
		text-align: center;
		border-radius: calc(var(--ss-height) / 2);
		background-color: blue;
		transition: .3s;
		animation-delay: 300ms;
	}

	.wg-ss__submit:focus {
		transform: scale(0.8);
	}

	.shake {
		animation-name: hr-shaking;
		animation-iteration-count: 1;
		animation-duration: 300ms;
		animation-timing-function: ease-out;
	}

	&.wiggle {
		animation-name: wg-ss_wiggle;
		animation-iteration-count: 1;
		animation-duration: 300ms;
		animation-timing-function: cubic-bezier(0.01, 0.14, 0.56, 1.74);
	}

	@keyframes hr-shaking {
		0% {
			transform: rotate(0)
		}

		50% {
			transform: rotate(-35deg)
		}

		100% {
			transform: rotate(0deg)
		}
	}

	@keyframes wg-ss_wiggle {
		0% {
			transform: scale(2.5) translateX(0)
		}

		25% {
			transform: scale(2.5) translateX(-15px)
		}

		50% {
			transform: scale(2.5) translateX(0px)
		}

		75% {
			transform: scale(2.5) translateX(15px)
		}

		100% {
			transform: scale(2.5) translateX(0)
		}
	}

	& .wg-ss__finished {
		color: black;
		position: absolute;
		z-index: 100;
		opacity: 0;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		pointer-events: none;
	}
	&.finishd, 
	.wg-ss__finished {
		transition: all 1s ease-out;
	}

	&.finished {
		border-width: 0;
	}

	&.finished .wg-ss__finished {
		opacity: 1;
	}
`

const transform = (form ) => Object.entries(form)
	.map(([key, e]) => { 
		return { name: key, ...e }
	})


export const Icons = ({ icons }) => {
	return (
		<div className="wg-ss__icon_holder">
			{icons.map((e, idx) => 
				<span key={idx} className="wg-ss__icon" style={{ "--index": Math.abs(idx - (icons.length - 1)) }}>
					{e}
				</span>)}
		</div>
	)
} 

Icons.propTypes = {
	icons: t.array.isRequired
}

export function SingleSignup({ form }) {
	const [fields] = React.useState(transform(form))
	const [current] = React.useState(0)
	const [values, setValues] = React.useState({ })
	const [focused, setFocus] = React.useState(false)
	const inputRef = React.useRef()
	const spanRef = React.useRef()

	const calculate = () => {
		return spanRef.current ? spanRef.current.offsetWidth : 0
	}

	const setValue = field => (evt) => {
		const {value} = evt.target
		console.log("input value", value)
		setValues({ ...values, [field]: value })
	}
	console.log(calculate())

	return (
		<StyleWrap focused={focused} 
			className="wg-ss__input wg-light-theme" onClick={() => {
				setFocus(true)
				inputRef.current.focus()
			}}>
			<div className="wg-ss__holder">
				<Icons icons={fields.map((e, idx) => <span key={idx}>{e.icon[0].toUpperCase()}</span>)} />
				<div className="wg-ss__text_holder">
					<label htmlFor="">{fields[current].name}</label>
					<span id="enter" ref={spanRef}>{values[fields[current].name]}</span>
					<input ref={inputRef} 
						type={fields[current].type}
						value={values[fields[current].name]}
						onChange={setValue(fields[current].name)} 
						onBlur={() => setFocus(false)}/>
				</div>
				<button
					className="wg-ss__submit"
				>
					<embed src="assets/submit-icon.svg" style={{width: 40}}/>
				</button>
			</div>
			<div className="wg-ss__finished">Thanks</div>
		</StyleWrap>
	)
}

SingleSignup.propTypes = {
	form: t.array.isRequired
}

export default SingleSignup