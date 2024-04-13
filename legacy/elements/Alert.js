import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Alert = ({ message, variant, closeAlert, className, ...props }) => {

    const classes = classNames('alert', {
        [className]: true,
        [`alert-${variant}`]: variant
    });

    return (
        message ? (
            <div className={classes} {...props}>
                {message}
                <button className='alert__close' onClick={closeAlert}>
                    <span>&times;</span>
                </button>
            </div>
        ) : null
    )
}

Alert.defaultProps = {
    variant: 'primary'
}

Alert.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning']),
    message: PropTypes.string,
    closeAlert: PropTypes.func
}

export default Alert;
