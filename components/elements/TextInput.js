import React from 'react'

const TextInput = ({ name, label, onChange, value, error, placeholder, ...rest }) => {

    return (
        <div className={`form__group ${error ? 'invalid' : ''}`}>
            <label className='form__group-label' htmlFor={name}>{label}</label>
            <input className="form__group-input" value={value} onChange={onChange} placeholder={placeholder} type="text" name={name} id={name} {...rest} />
            <div className="form__group-feedback">{error}</div>
        </div>
    )
}

export default TextInput;
