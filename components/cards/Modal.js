import React from "react"
import t from "prop-types"
import styled, { css } from "styled-components"
import { propIs } from "../helpers"
import Card from "./Card"

const ModalSize = {
	small: e => e === "sm",
	large: e => e === "lg",
}

const DialogStyle = styled.section`
    top: 0;
    left: 0;
    right: 0;
    margin: 0 !important; 
    bottom: 0;
    z-index: 999;
    display: flex;
    visibility: hidden;
    position: fixed;
    justify-content: center;
    
    &, .wg-dialog, .wg-modal-content, .wg-backdrop {
        transition: all .3s cubic-bezier(.17, .84, .44, 1);
    }

    .wg-dialog {
        opacity: 0;
        width: 100%;
        display: flex;
        padding-top: 10vh;
        overflow-y: scroll;
        justify-content: center;
        align-items: flex-start;
    }

    .wg-backdrop {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        position: absolute;
        background: rgba(0, 0, 0, 0.47); 
    }

    .wg-modal-content {
        width: 100%;
        max-width: 800px;
        transform: translate(0, -50%);

        ${propIs("size")(ModalSize.small)(css`
            max-width: 400px;        
        `)}

        ${propIs("size")(ModalSize.large)(css`
            max-width: 1000px;
        `)}
    }

    ${propIs("show")(show => show === true)(css`
        visibility: visible;

        .wg-dialog {
            opacity: 1;

            .wg-modal-content {
                transform: translate(0, 0);
            }
        }
        .wg-backdrop {
            opacity: 1;
        }
    `)}

`

export const Modal = (props) => {
	if (props.show) {
		document.body.style.overflow = "hidden"
		document.body.style.height = "100vh"
	} else {
		document.body.style.overflow = ""
		document.body.style.height = ""
	}

	return <DialogStyle {...props}>
		<div className="wg-backdrop" onClick={props.onClose}></div>
		<div className="wg-dialog">
			<Card className="wg-modal-content">
				{props.children}
			</Card>
		</div>
	</DialogStyle>
}

Modal.defaultProps = {
	show: false,
	size: "",
	onClose: a => a,
}

Modal.propTypes = {
	onClose: t.func,
	show: t.bool.isRequired,
	size: t.string.isRequired,
	children: t.node.isRequired,
}

export default Modal