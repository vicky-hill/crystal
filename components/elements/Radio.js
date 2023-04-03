import React from 'react'
import { PropTypes } from 'prop-types'


const Radio = ({ children, onChange, name, value, values, horizontal, disabled }) => {

    // For handling radios in forms
    let radioWithValues = values && (
        <label htmlFor={value} className="form__group-radio">
            <input className="form__group-radio-input" disabled={disabled} checked={values[name] === value} value={value} onChange={onChange} type="radio" name={name} id={value} />
            <div className="form__group-radio-circle"></div>
            <div className="form__group-radio-label"> {children} </div>
        </label>
    )

    // For handling radios outside forms
    let radioWithoutValues = (
        <label htmlFor={value} className="form__group-radio">
            <input className="form__group-radio-input" disabled={disabled} value={value} onChange={onChange} type="radio" name={name} id={value} />
            <div className="form__group-radio-circle"></div>
            <div className="form__group-radio-label">{children} </div>
        </label>
    )

    // Wrap all radios in a div for vertical layout
    if (!horizontal && !values) radioWithoutValues = (<div>{radioWithoutValues}</div>)
    if (!horizontal && values) radioWithValues = (<div>{radioWithValues}</div>)

    return (
        values ? radioWithValues : radioWithoutValues
    )
}

const Group = ({ children, name, label, onChange, error, values, setValues, horizontal, disabled }) => {    
    const propsForChildren = { name, onChange, values, horizontal };
    if (disabled) propsForChildren.disabled = true;
    if (!onChange && setValues) propsForChildren.onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value })
    children = passPropsToChildren(children, propsForChildren);

    return (
        <div className={`form__group ${error ? 'invalid' : ''}`}>
            <label className='form__group-label' htmlFor={name}>{label}</label>
            <div className='form__group-radios'>
                {
                    children
                }
            </div>
            <div className="form__group-feedback">{error}</div>
        </div>
    )
}

const passPropsToChildren = (children, props) => {
    if (children) {
        if (Array.isArray(children)) {
            children = children.map((child) => ({
                ...child,
                props: { ...child.props, ...props }
            }))
        } else {
            children = {
                ...children,
                props: { ...children.props, ...props }
            }
        }
    }

    return children;
}

Radio.Group = Group

Radio.propTypes = {
    children: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    value: PropTypes.any.isRequired,
    values: PropTypes.Object, 
    horizontal: PropTypes.bool,
    disabled: PropTypes.bool
}

Group.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,

}

export default Radio;




