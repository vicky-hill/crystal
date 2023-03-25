import React from 'react';
import { PropTypes } from 'prop-types';
import { getClassName } from '../../../utils/getClassName';

const Button = ({ children, variant, size, outline, rounded, loading, block, className, ...props }) => {

    const variations = {
        variant: variant && `btn-${variant}`,
        outline: outline && `btn-${variant}-outline`,
        loading: loading && 'btn--loading',
        rounded: rounded && 'btn--round',
        block: block && 'btn--block',
        size: size && size !== 'regular' && `btn--${size}`
    }

    return (
        <button className={getClassName('btn', className, variations)} {...props} >
            <span className="btn-text">
                {children}
            </span>
        </button>
    )
}

Button.defaultProps = {
    variant: 'primary',
    size: 'regular'
}

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary']),
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    loading: PropTypes.bool,
    block: PropTypes.bool,
    size: PropTypes.oneOf(['regular', 'small', 'big']),
    children: PropTypes.element
}

export default Button;
