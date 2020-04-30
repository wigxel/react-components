import React from "react"
import t from "prop-types"
import * as R from "ramda"
import { propIs } from "../helpers"
import styled, { css } from "styled-components"

const wiggleEffect = propIs(
	"animation",
	x => x == "wiggle", 
	css`
		animation-name: wg-ss_wiggle;
		animation-iteration-count: 1;
		animation-duration: 300ms;
		animation-timing-function: cubic-bezier(0.01, 0.14, 0.56, 1.74);

		@keyframes wg-ss_wiggle {
			0% {
				transform: translateX(0)
			}

			25% {
				transform: translateX(-15px)
			}

			50% {
				transform: translateX(0px)
			}

			75% {
				transform: translateX(15px)
			}

			100% {
				transform: translateX(0)
			}
		}
	`
)

const shakeEffect = propIs(
	"animation", 
	x => x === "wiggle", 
	css`
		animation-name: hr-shaking;
		animation-iteration-count: 1;
		animation-duration: 300ms;
		animation-timing-function: ease-out;

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
	`
)

// CSS VARIABLES
// --ss-bg: white;
// --ss-btn-bg: #333;
// --ss-btn-color: #fff;
// --ss-height: 100px;
// --ss-border-width: 1px;
// --ss-text-color: #333;
// --ss-border-color: gray;
// --ss-icon-bg: whitesmoke;

const StyleWrap = styled.div`
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
	border: solid var(--ss-border-width) var(--ss-border-color, black);
	transition: width .2s cubic-bezier(0.07, 0.27, 0.15, 0.95);

	${wiggleEffect}

	& > input {
		width: 0.1px;
		height: 0.1px;
		opacity: 0;
	}

	.wg-ss__holder {
		width: 100%;
		display: flex;
		position: relative;
		transition-duration: .2s;
		justify-content: space-between;
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
			
			&.hide {
				transform: translateX(100vw) rotateY(180deg);
				opacity: 0;
			}
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
			border: solid var(--ss-border-width) var(--ss-border-color, black);
			background-color: var(--ss-icon-bg, #333);
			transition: all .3s cubic-bezier(0.7, 0.1, 0.27, 0.99);
		}
	}

	@keyframes blink {
		from { opacity: 1 }
		to {opacity: 0}
	}

	.wg-ss__text_holder {
		flex: 0 0 calc( 100% - calc(var(--ss-height) * 2));
		display: grid;
		white-space: nowrap;
		justify-content: start;
		height: var(--ss-height);
		grid-template-column: minmax(40vw, 80vw);
		grid-template-rows:  calc(var(--ss-height) * .3)  calc(var(--ss-height) * .7);

		.dot {
			width: 15px;
			height: 15px;
			margin-right: 3px;
			border-radius: 50px;
			display: inline-block;
			background: var(--ss-text-color);

			&::selection {
				color: pink;
				background-color: blue;
			}
		}
		
		span#enter {
			flex: 1 1 70%;
			padding-left: 5px;
			color: var(--ss-text-color);
			font-size: calc(var(--ss-height) * .5);
		}

		input {
			z-index: 0;
			opacity: 0;
			border: none;
			top: 0; right: 0;
			position: absolute;
			background-color: transparent;

			&:focus {
				outline: none !important;
			}
		}
		
		label {
			color: var(--ss-text-color);
			font-size: 1em;
			display: block;
			text-indent: 10px;
			text-transform: uppercase;
			font-size: calc(var(--ss-height) * .2);
			line-height: calc(var(--ss-height) * .3);
		}
	}

	.submit {
		--arc-space: calc( var(--ss-height) * 0.2);
		--submit-height: calc( var(--ss-height) - var(--arc-space) );

		width: var(--submit-height);
		height: var(--submit-height);
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: var(--submit-height);
		margin-right: calc(var(--arc-space) - calc(var(--ss-height)* 0.1));
		align-self: center;
		border: none;
		display: block;
		box-sizing: border-box;
		text-align: center;
		border-radius: calc(var(--ss-height) / 2);
		background-color: var(--ss-btn-bg);
		color: var(--ss-btn-color);
		transition: .3s;
		animation-delay: 300ms;

		${shakeEffect}
	}

	.submit:focus {
		transform: scale(0.8);
	}

	.wg-ss__finished {
		z-index: 100;
		opacity: 0;
		inset: 0;
		display: flex;
		position: absolute;
		align-items: center;
		pointer-events: none;
		justify-content: center;
		color: var(--ss-text-color);
		font-size: calc(var(--ss-height) * .3);

		@supports not (inset: 0) {
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
		}
	}
	
	&.finishd, 
	.wg-ss__finished {
		transition: all 1s ease-out;
	}

	&.finished {
		.wg-ss__finished {
			opacity: 1;
		}

		.wg-ss__holder {
			opacity: 0;
			transform: translateY(-100%);
		}
	}
`

export const Icons = ({ icons, current }) => {
	const reverse = (idx) => Math.abs(idx - (icons.length - 1))
	return (
		<div className="wg-ss__icon_holder">
			{icons.map((e, idx) => 
				<span key={idx}
					className={"wg-ss__icon ".concat(current > reverse(idx) ? "hide" : "")} 
					style={{ "--index": reverse(idx) - current }}>
					{e}
				</span>)}
		</div>
	)
} 

Icons.propTypes = {
	icons: t.array.isRequired,
	current: t.number.isRequired,
}

function useAnimation(className) {
	const [state, setState] = React.useState({ isAnimating: false, timeout_id: 0 })
	const [animation, setAnimation] = React.useState(className)
	const _setAnimation  = (name, timeout) => {
		clearTimeout(state.timeout_id)
		const t_id = setTimeout(() => {
			setState({ ...state, isAnimating: false })
			setAnimation("")
		}, timeout)
		setState({ ...state, isAnimating: true, timeout_id: t_id })
		setAnimation(name)
	}

	return { animation, isAnimating: state.isAnimating, setAnimation: _setAnimation }
}

const useDots = R.compose(
	arr => arr.map((_, idx) => <span key={"dot/."+idx} className="dot"></span>), 
	R.split(""), 
	String
)

export function SingleForm({ form, onSubmit, message }) {
	const inputRef = React.useRef()
	const spanRef = React.useRef()
	const [fields] = React.useState(form)
	const [current, setCurrent] = React.useState(0)
	const { animation, isAnimating, setAnimation } = useAnimation("shake")
	const [values, setValues] = React.useState({ })

	const currentField = () => fields[current]
	const isLast = () => fields.length - 1 == current
	const calculate = () => spanRef.current ? spanRef.current.offsetWidth : 0
	const setValue = R.curry((field, evt) => {
		const {value} = evt.target
		setValues({ ...values, [field]: value })
	})
	const validate = R.curryN(2, current => {
		if (isAnimating) return 
		const { regex, name } = currentField()

		if (regex.test(values[name] || "")) {
			if (isLast()) {
				setValues({ ...values, finished: true })
				return onSubmit(values)
			}
			inputRef.current.value = ""
			setCurrent(current + 1)
		} else {
			setAnimation("wiggle", 600)
		}
	})

	return (
		<StyleWrap
			animation={animation}
			className={"wg-ss__input". concat(values.finished ? " finished" : "")}
			style={{ width: `calc( ${calculate() + 15}px + calc( var(--ss-height) * 2 ) )` }}
			onClick={() => inputRef.current.focus() }>
			<div className="wg-ss__holder">
				<Icons current={current} icons={fields.map((e, idx) => <span key={idx}>{e.icon[0].toUpperCase()}</span>)} />
				<div className="wg-ss__text_holder">
					<label htmlFor="">{currentField().name}</label>
					<span id="enter" ref={spanRef}>{
						currentField().type === "password" 
							? useDots(values[fields[current].name] || "")
							: values[fields[current].name]
					}</span>
					<input tab="10"
						ref={inputRef}
						onChange={setValue(currentField().name)} 
						onKeyUp={evt => evt.keyCode === 13 && validate(current, evt)} />
				</div>
				<button
					tab="20"
					className="submit"
					onClick={validate(current)}
				> 
					<span style={{fontSize: "2rem"}}> &gt; </span>
				</button>
			</div>
			<div className="wg-ss__finished">{values.finished && message}</div>
		</StyleWrap>
	)
}

const FormProp = t.exact({ 
	name: t.string.isRequired, 
	type: t.oneOf(["password", "text"]).isRequired, 
	icon: t.oneOfType([ t.string, t.node ]).isRequired,
	regex: t.instanceOf(RegExp).isRequired
})

SingleForm.defaultProps = {
	message: "Success!"
}

SingleForm.propTypes = {
	form: t.arrayOf(FormProp),
	onSubmit: t.func.isRequired,
	message: t.node
}


export default SingleForm