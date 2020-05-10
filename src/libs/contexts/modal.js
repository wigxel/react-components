import React from "react"
import t from "prop-types"
import { curry, prop, omit, not } from "ramda"

const modalCtx = React.createContext()

export const useModal = () => React.useContext(modalCtx)

export const ModalProvider = ({ children }) => {
	const [state, setState] = React.useState({})
	const _setTo = curry((newState, name) => {
		setState({ ...state, [name]: newState })
	})
	const show = _setTo(true)
	const hide = _setTo(false)
	const detach = (name) => setState(omit([name], state))
	const toggle = (name) => _setTo(not(prop(name, state)), name)

	return (
		<modalCtx.Provider
			value={{ store: state, detach, show, hide, attach: hide, toggle }}
		>
			{children}
		</modalCtx.Provider>
	)
}

ModalProvider.propTypes = {
	children: t.node.isRequired,
}
