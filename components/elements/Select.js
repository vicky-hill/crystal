import React from 'react'

const Select = ({ children, onChange, error, label, name, value, disabled, placeholder, ...rest }) => {

    return (
        <div className={`form__group ${error ? 'invalid' : ''}`}>
            <label className='form__group-label' htmlFor={name}>{label}</label>

            <select className="form__group-input" value={value} onChange={onChange} name={name} id={name} disabled={disabled} {...rest}>
                <option value="" defaultValue disabled>{placeholder ? placeholder : `Select a ${label.toLowerCase()}`}</option>
                { children }
            </select>

            <div className="form__group-feedback">{error}</div>
        </div>
    )
}

export const Option = ({ children, value }) => {
    return (
        <option value={value}>{children}</option>
    )
}

export default Select;
