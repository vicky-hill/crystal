import React from 'react'
import { PropTypes } from 'prop-types'


const Radio = ({ children, onChange, name, value, values, stacked, disabled }) => {

    // For handling radios in forms
    let radioWithValues = values && (
        <label htmlFor={value} className="form__group-radio">
            <input className="form__group-radio-input" disabled={disabled} checked={values[name] === value} value={value ? value : children} onChange={onChange} type="radio" name={name} id={value} />
            <div className="form__group-radio-circle"></div>
            <div className="form__group-radio-label"> {children} </div>
        </label>
    )

    // For handling radios outside forms
    let radioWithoutValues = (
        <label htmlFor={value} className="form__group-radio">
            <input className="form__group-radio-input" disabled={disabled} value={value ? value : children} onChange={onChange} type="radio" name={name} id={value} />
            <div className="form__group-radio-circle"></div>
            <div className="form__group-radio-label">{children} </div>
        </label>
    )

    // Wrap all radios in a div for stacked layout
    if (stacked && !values) radioWithoutValues = (<div>{radioWithoutValues}</div>)
    if (stacked && values) radioWithValues = (<div>{radioWithValues}</div>)

    return (
        values ? radioWithValues : radioWithoutValues
    )
}

const Group = ({ children, name, label, noLabel, onChange, error, values, setValues, stacked, disabled }) => {
    const propsForChildren = { name, onChange, values, stacked };
    if (disabled) propsForChildren.disabled = true;
    if (!onChange && setValues) propsForChildren.onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value })

    const renderChildren = () => {
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                ...child.props,
                ...propsForChildren
            });
        });
    };

    return (
        <div className={`form__group ${error ? 'invalid' : ''}`}>
            {!noLabel && <label className='form__group-label' htmlFor={name}>{label}</label>}
            <div className='form__group-radios'>
                {renderChildren()}
            </div>
            <div className="form__group-feedback">{error}</div>
        </div>
    )
}

Radio.Group = Group

Radio.propTypes = {
    children: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    value: PropTypes.any.isRequired,
    values: PropTypes.object,
    stacked: PropTypes.bool,
    disabled: PropTypes.bool,
}

Group.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    error: PropTypes.string,
    values: PropTypes.object,
    setValues: PropTypes.func,
    stacked: PropTypes.bool,
    disabled: PropTypes.bool
}

export default Radio;




