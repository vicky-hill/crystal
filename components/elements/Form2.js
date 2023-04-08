import React, { useState, useContext, createContext } from 'react';
import InputComponent from './Input'
import RadioComponent from './Radio';
import CheckboxComponent from './Checkbox';


const FormContext = createContext();

const Form = ({ children, values, setValues, validation, onSubmit, onChange }) => {
    const [errors, setErrors] = useState({});

    // Ability to use a default onChange function within the form component
    // Or use a custom onChange function outside the form compnonent
    // Custom function must handle setting values
    const handleChangeFromInside = (e) => {
        console.log('inside')
        
        // If checkbox handle array field on change
        if (e.target.type === 'checkbox') {
            const checkboxValue = e.target.value;
            const checkboxName = e.target.name;
            const updatedValues = { ...values }

            if (!Array.isArray(values[checkboxName])) throw new Error(`The values field for the checkbox: ${checkboxName} is not array, please check values and the onChange handler`)

            if (values[checkboxName].includes(checkboxValue)) {
                updatedValues[checkboxName] = updatedValues[checkboxName].filter(value => value !== checkboxValue);
                setValues(updatedValues);
            } else {
                updatedValues[checkboxName] = [...updatedValues[checkboxName], checkboxValue];
                setValues(updatedValues);
            }

            // Handle regular value fields on change
        } else {
            setValues({ ...values, [e.target.name]: e.target.value });
        }
    }

    const handleChangeFromOutside = (e) => onChange(e);

    let handleChange;

    if (onChange) {
        handleChange = handleChangeFromOutside;
    } else {
        handleChange = handleChangeFromInside;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (validation) await validation.validate(values, { abortEarly: false });
            
            onSubmit();

        } catch (err) {
            const createdErrors = {};
            err.inner.forEach(error => createdErrors[error.path] = error.message);
            setErrors(createdErrors);
        }
    }

    // As a rule, handleChange, handleSubmit, etc are always functions generated within the Form component
    // OnChange, OnSubmit, etc are optional functions passed to the Form component, and will be used instead if they are provided

    return (
        <FormContext.Provider value={{ values, setValues, validation, errors, setErrors, handleChange }}>
            <form onSubmit={handleSubmit}>
                {children}
            </form>
        </FormContext.Provider>
    )
}

export default Form;


/* ===================================
   Helper Functions
=================================== */
const getLabel = (name, label) => {
    if (label) return label;

    // Get label from name
    const words = name.match(/[A-Za-z][a-z]*/g) || [];
    return words.map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");
}

const getPlaceholder = (name, placeholder) => {
    if (placeholder) return placeholder;

    // Placeholder from name
    const words = name.match(/[A-Za-z][a-z]*/g) || [];
    const placeholderFromName = words.map(word => word.charAt(0).toLowerCase() + word.substring(1)).join(" ");

    return 'Enter ' + placeholderFromName;
}

const getError = (name, error, errors) => {
    if (error) return error;

    return errors?.[name]
}

const resetErrors = (errors, setErrors, name) => {
    if (errors[name]) {
        const updatedErrors = { ...errors };
        delete updatedErrors[name];
        setErrors(updatedErrors);
    }
}


/* ===================================
   Text Input
=================================== */
export const TextInput = ({ name, label, placeholder, onChange, error, ...rest }) => {
    const { values, handleChange, errors, setErrors } = useContext(FormContext);

    label = getLabel(name, label);
    placeholder = getPlaceholder(name, placeholder);
    error = getError(name, error, errors);

    const getOnChange = (e) => {
        onChange ? onChange(e) : handleChange(e);
        resetErrors(errors, setErrors, name);
    }

    return (
        <InputComponent
            name={name}
            value={values[name]}
            onChange={getOnChange}
            label={label}
            placeholder={placeholder}
            error={error}
            {...rest}
        />
    )
}

/* ===================================
   Dollar Input
=================================== */
export const DollarInput = ({ name, label, placeholder, onChange, error, ...rest }) => {
    const { values, handleChange, errors, setErrors } = useContext(FormContext);

    label = getLabel(name, label);
    placeholder = getPlaceholder(name, placeholder);
    error = getError(name, error, errors);

    const getOnChange = (e) => {
        onChange ? onChange(e) : handleChange(e);
        resetErrors(errors, setErrors, name);
    }

    return (
        <InputComponent
            name={name}
            value={values[name]}
            onChange={getOnChange}
            label={label}
            placeholder={placeholder}
            error={error}
            dollar
            {...rest}
        />
    )
}

/* ===================================
   Radio Buttons
=================================== */
const RadioGroup = ({ children, name, label, placeholder, stacked, disabled, error, onChange, ...rest }) => {
    const { values, handleChange, errors, setErrors } = useContext(FormContext);

    label = getLabel(name, label);
    placeholder = getPlaceholder(name, placeholder);
    error = getError(name, error, errors);

    const getOnChange = (e) => {
        onChange ? onChange(e) : handleChange(e);
        resetErrors(errors, setErrors, name);
    }

    const propsForChildren = { name, stacked, onChange, values }
    if (disabled) propsForChildren.disabled = disabled;

    children = React.Children.toArray(children).map((child) => ({
        ...child,
        props: { ...child.props, ...propsForChildren }
    }))

    return (
        <RadioComponent.Group name={name} label={label} onChange={getOnChange} error={error} values={values} stacked={stacked} {...rest}>
            {children}
        </RadioComponent.Group>
    )
}

export const Radio = ({ children, values, onChange, name, value, stacked, disabled }) => {
    return (
        <RadioComponent onChange={onChange} name={name} value={value} values={values} stacked={stacked} disabled={disabled}>
            {children}
        </RadioComponent>
    )
}

Radio.Group = RadioGroup;


/* ===================================
   Checkboxes
=================================== */
const CheckGroup = ({ children, name, label, placeholder, stacked, disabled, error, onChange, ...rest }) => {
    const { values, handleChange, errors, setErrors } = useContext(FormContext);

    label = getLabel(name, label);
    placeholder = getPlaceholder(name, placeholder);
    error = getError(name, error, errors);

    const getOnChange = (e) => {
        onChange ? onChange(e) : handleChange(e);
        resetErrors(errors, setErrors, name);
    }

    const propsForChildren = {name, stacked, onChange, values }
    if (disabled) propsForChildren.disabled = disabled;

    children = React.Children.toArray(children).map((child) => ({
        ...child,
        props: { ...child.props, ...propsForChildren }
    }))

    return (
        <CheckboxComponent.Group name={name} label={label} onChange={getOnChange} error={error} values={values} stacked={stacked} {...rest}>
            {children}
        </CheckboxComponent.Group>
    )
}

export const Checkbox = ({ children, values, onChange, name, value, stacked, disabled }) => {
    return (
        <CheckboxComponent onChange={onChange} name={name} value={value} values={values} stacked={stacked} disabled={disabled}>
            {children}
        </CheckboxComponent>
    )
}

Checkbox.Group = CheckGroup;