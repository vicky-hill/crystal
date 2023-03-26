import React from 'react'

const Form = ({ children, className, values, onChange, onSubmit }) => {
    children = children.map((child, i) => ({
        ...child,
        props: {
            ...child.props,
            values,
            onChange
        }
    }))

    return (
        <form className={className} onSubmit={onSubmit}>
            {children}
        </form>
    )
}

/* ===================================
   Text Input
=================================== */
export const TextInput = ({ values, onChange, name, label, placeholder }) => {

    return (
        <div className='form__group'>
            <label className='form__group-label' htmlFor={name} > { label }</label>

            <input
                className="form__group-input"
                value={values[name]}
                onChange={onChange}
                type="text"
                name={name}
                id={name}
                placeholder={placeholder ? placeholder : `Enter ${label.toLowerCase()}`}
            />

            <div className="form__group-feedback"></div>
        </div>
    )
}

export const Select = ({ children, values, onChange, name, placeholder, label }) => {

    return (
        <div className='form__group'>
            <label className='form__group-label' htmlFor={name}>{label}</label>

            <select name={name} id={name} value={values[name]} className="form__group-input" onChange={onChange}>
                <option value="" defaultValue disabled>{placeholder ? placeholder : `Select a ${label.toLowerCase()}`}</option>
                {children}
            </select>

            <div className="form__group-feedback"></div>
        </div>
    )
}

const Option = ({ value, name }) => {
    return (
        <option value={value}>{name}</option>
    )
}

Select.Option = Option;

export default Form;