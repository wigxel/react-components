import React from "react"
import t from "prop-types"
import { curry, prop, omit, not, mergeLeft } from "ramda"

const modalCtx = React.createContext()

export const useModal = () => React.useContext(modalCtx)

export const ModalProvider = ({ children }) => {
	const [state, setState] = React.useState({})
	const nameParamMap = React.useRef(new Map()).current

	const _setTo = curry((newState, name) => {
		setState(mergeLeft({ [name]: newState }))
	})

	const addOrRemoveParams = (toggleState, name, params = {}) =>
		toggleState ? nameParamMap.set(name, params) : nameParamMap.delete(name)

	const show = (name, params) => {
		addOrRemoveParams(true, name, params)
		_setTo(true, name)
	}

	const hide = (name) => {
		addOrRemoveParams(false, name)
		_setTo(false, name)
	}

	const detach = (name) => setState(omit([name], state)) 

	const toggle = (name, params) => {
		const newState = not(prop(name, state))
		newState ? show(name, params) : hide(name)
	}

	return (
		<modalCtx.Provider
			value={{
				store: state,
				modalParams: nameParamMap,
				detach,
				show,
				hide,
				attach: hide,
				toggle,
			}}
		>
			{children}
		</modalCtx.Provider>
	)
}

export const ModalConsumer = modalCtx.Consumer

ModalProvider.propTypes = {
	children: t.node.isRequired,
}
