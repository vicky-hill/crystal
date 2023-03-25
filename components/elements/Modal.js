import React, { useEffect } from 'react'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'

const Modal = ({ open, close, title, shouldCloseOnOutsideClick, children }) => {

    const classes = classNames('modal', {
       'open': open
    });

    useEffect(() => {
        const body = document.querySelector('body').classList;
        open ? body.add('no-scroll') : body.remove('no-scroll');
    }, [open])

    const closeOnOutsideClick = (e) => {
        if (shouldCloseOnOutsideClick && e.target.classList[0] === 'modal') {
            close()
        }
    }

    return (
        <div className={classes} onClick={(e) => closeOnOutsideClick(e)}>
            <div className="modal__content">

                {/* Header */}
                {title && (
                    <div className="modal__header">
                        <p className="modal__header-title">{title}</p>
                        <span className="modal__header-close" onClick={close}>&times;</span>
                    </div>
                )}

                {/* Body */}
                <div className="modal__body">
                    {children}
                </div>

                {/* Footer */}
                <div className="modal__footer">
                    <button className="btn btn-grey" onClick={close}>Close</button>
                    <button className="btn btn-teal">Save changes</button>
                </div>
            </div>
        </div>
    )
}

Modal.defaultProps = {
    shouldCloseOnOutsideClick: true
}

Modal.propTypes = {
    open: PropTypes.bool,
    close: PropTypes.func,
    shouldCloseOnOutsideClick: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.element
}

export default Modal;
