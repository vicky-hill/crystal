/* eslint-disable */
import React from 'react'
import { PropTypes } from 'prop-types'

const Loader = ({ type }) => {

    const spinner = (
        <div className="loading-spinner"></div>
    )

    const dots = (
        <div className="loading-dots">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    )

    return type === 'spinner' ? spinner : dots
}

Loader.defaultProps = {
    type: 'spinner',
}

Loader.propTypes = {
    type: PropTypes.oneOf(['spinner', 'dots']),
}

export default Loader