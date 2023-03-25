import React from 'react'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'

const Button = ({ children, variant, size, outline, round, loading, block, className, ...props }) => {

    const classes = classNames('btn', {
        [className]: className,
        'btn--loading': loading,
        'btn--round': round,
        'btn--block': block,
        [`btn-${variant}`]: variant,
        [`btn-${variant}-outline`]: outline,
        [`btn--${size}`]: size && size !== 'regular'
    });

    return (
        <button className={classes} {...props} >
            <span className="btn-text">
                {children}
            </span>
        </button>
    )
}

Button.defaultProps = {
    variant: 'teal',
    size: 'regular'
}

Button.propTypes = {
    variant: PropTypes.oneOf(['teal', 'grey']),
    outline: PropTypes.bool,
    round: PropTypes.bool,
    loading: PropTypes.bool,
    block: PropTypes.bool,
    size: PropTypes.oneOf(['regular', 'small', 'big'])
}

export default Button;
