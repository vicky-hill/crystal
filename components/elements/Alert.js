import classNames from 'classnames'

/**
 * @typedef {'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' } Variant
 */

/**
 * Alert
 * @param {object} props
 * @param {string} props.message
 * @param {string} props.className
 * @param {Variant} props.variant
 * @param {function} props.closeAlert
 */
export default function Alert ({ message, variant, closeAlert, className, ...props }) {

    const alertClasses = classNames('py-4 px-5 mb-3 relative rounded-md', {
        [className]: true,
        ['border border-primary-300 text-primary-600 bg-primary-50']: variant === 'primary',
        ['border border-zinc-300 text-zinc-600 bg-zinc-50']: variant === 'secondary',
        ['border border-emerald-300 text-emerald-600 bg-emerald-50']: variant === 'success',
        ['border border-red-300 text-red-600 bg-red-50']: variant === 'error',
        ['border border-cyan-300 text-cyan-600 bg-cyan-50']: variant === 'info',
        ['border border-yellow-300 text-yellow-600 bg-yellow-50']: variant === 'warning',
    });

    return (
        message ? (
            <div data-element="alert" className={alertClasses} {...props}>
                {message}
                <div className='absolute top-0 right-0 py-3 px-5 text-inherit text-4xl cursor-pointer' onClick={closeAlert}>
                    <span>&times;</span>
                </div>
            </div>
        ) : null
    )
}

