import React from 'react'
import { PropTypes } from 'prop-types'

const Checkbox = ({ children, onChange, name, value, values, stacked, disabled }) => {

    handleWarnings(children, onChange, name, value, values, stacked, disabled)

    // Handling checkboxes in forms with values, setValues
    let boxWithValues = values && (
        <label htmlFor={value} className="form__group-checkbox">
            <input className="form__group-checkbox-input" onChange={onChange} checked={values[name].includes(value)} value={value ? value : children} type="checkbox" disabled={disabled} name={name} id={value} />
            <div className="form__group-checkbox-box"></div>
            <div className="form__group-checkbox-label">{children}</div>
        </label>
    )

    // Handling non-form checkboxes
    let boxWithoutValues = (
        <label htmlFor={value} className="form__group-checkbox">
            <input className="form__group-checkbox-input" onChange={onChange} type="checkbox" disabled={disabled} name={name} id={value} />
            <div className="form__group-checkbox-box"></div>
            <div className="form__group-checkbox-label">{children}</div>
        </label>
    )

    // Wrap all radios in a div for stacked layout
    if (stacked && !values) boxWithoutValues = (<div>{boxWithoutValues}</div>)
    if (stacked && values) boxWithValues = (<div>{boxWithValues}</div>)

    return (
        values ? boxWithValues : boxWithoutValues
    )
}

const Group = ({ children, name, label, onChange, error, values, setValues, stacked, disabled }) => {
    const propsForChildren = { name, onChange, values, stacked };
    if (disabled) propsForChildren.disabled = true;
    if (!onChange && setValues) propsForChildren.onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value })
    children = passPropsToChildren(children, propsForChildren);

    return (
        <div className={`form__group ${error ? 'invalid' : ''}`}>
            <label className='form__group-label' htmlFor={name}>{label}</label>
            <div className='form__group-checkboxes'>
                {
                    children
                }
            </div>
            <div className="form__group-feedback">{error}</div>
        </div>
    )
}

const passPropsToChildren = (children, props) => {
    return React.Children.toArray(children).map((child) => ({
        ...child,
        props: { ...child.props, ...props }
    }))
}

const handleWarnings = (children, onChange, name, value, values, stacked, disabled) => {

    // Values don't include the checkbox name
    if (values && !values[name]) {
        throw new Error('The checkbox group name does not exist in values')
    }

    // Values field has to be an array
    if (values && !Array.isArray(values[name])) {
        throw new Error(`The values field for checkboxes has to be an array but was passed a ${typeof values[name]}: ${values[name]}. Please check values and onChange handler`);
    }
}

Checkbox.Group = Group;

Checkbox.propTypes = {
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

export default Checkbox;
