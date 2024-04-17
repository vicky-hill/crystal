import React from 'react'
import { HiOutlineSelector } from "react-icons/hi"

/**
 * @typedef { 'regular' | 'floatingLabel' } Variant
 */

/**
 * Input
 * @param {object} props
 * @param {Variant} props.variant
 */
const Select = ({ variant = 'floatingLabel', children, onChange, error, label, noLabel, name, value, setValue, disabled, placeholder, className = '', groupClassName = '', identifier, ...rest }) => {

    value = value ? value : "";
    placeholder = placeholder ? placeholder : name ? `Select a ${name.toLowerCase()}` : 'Make a selection';
    onChange = onChange ? onChange : setValue ? (e) => setValue(e.target.value) : console.warn("Select: no onChange handler was specified");


    /* ===================================
       Variantes
    =================================== */

    const regularSelect = (
        <div className={`form__group ${error ? 'invalid' : ''} ${groupClassName}` + className}>
            {!noLabel && label && <label className='form__group-label' htmlFor={name}>{label}</label>}

            <select className="form__group-input" value={value} onChange={onChange} name={name} id={name} disabled={disabled} {...rest}>
                <option value="" defaultValue disabled>{placeholder}</option>
                {children}
            </select>
            <HiOutlineSelector className='form__group-caret' />

            <div className="form__group-feedback">{error}</div>
        </div>
    )

    const floatingLabelSelect = (
        <div className={`form__group floating-label ${error ? 'invalid' : ''} ${groupClassName}` + className}>
            <select className="form__group-input" value={value} onChange={onChange} name={name} id={name} disabled={disabled} {...rest}>
                <option value="" defaultValue disabled>{placeholder}</option>
                {children}
            </select>
            <HiOutlineSelector className='form__group-caret' />
            {!noLabel && <label className='form__group-label' htmlFor={name}>{label}</label>}
            <div className="form__group-feedback">{error}</div>
        </div>
    )

    const variants = {
        regular: regularSelect,
        floatingLabel: floatingLabelSelect
    }

    return variants[variant];
}

export const Option = ({ children, value, disabled }) => {
    return (
        <option disabled={disabled} value={value ? value : children}>{children}</option>
    )
}

export default Select;
