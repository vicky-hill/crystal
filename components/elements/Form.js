import React, { useState, useEffect, useContext, createContext } from 'react'
import classNames from 'classnames'
import TextInputComponent from './TextInput'
import RadioComponent from './Radio'

// Required props for <Form></Form>
// ---------------------------------
// values, setValues: useState variables
// onSubmit: submit function

// Optional props for <Form></Form>
// ---------------------------------
// validation: yup validation schema
// className: classes to add to form
// onChange: custom onChange function
const Form = ({ children, ...props }) => {

    return (
        <FormProvider>
            <InnerForm {...props}>
                {children}
            </InnerForm>
        </FormProvider>
    )
}

const InnerForm = ({ validation, children, className, values, setValues, onSubmit, onChange }) => {
    const [errors, setErrors] = useState({});

    const { loadInputProps } = useContext(FormContext);

    useEffect(() => {
        loadInputProps({ values, setValues, errors, setErrors, handleChange })
    }, [validation, children, className, values, setValues, onSubmit, onChange, errors])

    // Ability to use a default onChange function within the form component
    // Or use a custom onChange function outside the form compnonent
    // Custom function must handle setting values
    const handleChangeFromInside = (e) => { setValues({ ...values, [e.target.name]: e.target.value }); console.log('inside') }
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

    return (
        <form className={className} onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

const getInputProps = (context, props) => {
    const { errors, setErrors, values, handleChange } = context.inputProps;
    const { name, label, placeholder, onChange } = props

    const getFormGroupClassNames = () => classNames('form__group', {
        'invalid': errors && errors[name]
    });

    const getLabelFromName = (name) => {
        const words = name.match(/[A-Za-z][a-z]*/g) || [];
        return words.map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");
    }

    const getPlaceholderFromName = (name) => {
        const words = name.match(/[A-Za-z][a-z]*/g) || [];
        const placeholder = words.map(word => word.charAt(0).toLowerCase() + word.substring(1)).join(" ");

        return 'Please enter ' + placeholder;
    }

    // If onChange was passed into the component use that
    // Otherwise use handleChange from the Form component
    const handleOnChangeInsideOrOutside = (e) => {
        onChange ? onChange(e) : handleChange(e)
        resetErrors(errors, setErrors, name)
    }

    const resetErrors = (errors, setErrors, name) => {
        if (errors[name]) {
            const updatedErrors = { ...errors };
            delete updatedErrors[name];
            setErrors(updatedErrors);
        }
    }

    return {
        formGroupClassNames: getFormGroupClassNames(),
        onChange: handleOnChangeInsideOrOutside,
        label: label ? label : getLabelFromName(name),
        placeholder: placeholder ? placeholder : label ? getPlaceholderFromName(label) : getPlaceholderFromName(name),
        value: values ? values[name] : '',
        error: errors?.[name],
    }
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


/* ===================================
   Text Input
=================================== */
export const TextInput = (props) => {

    const { name, ...rest } = props;
    const context = useContext(FormContext);
    const { label, placeholder, value, error, onChange } = getInputProps(context, props);

    return (
        <TextInputComponent
            name={name}
            value={value}
            onChange={onChange}
            label={label}
            placeholder={placeholder}
            error={error}
            {...rest}
        />
    )
}


/* ===================================
   Select
=================================== */
export const Select = (props) => {

    const context = useContext(FormContext);
    let { children, placeholder, name, ...rest } = props;
    const { formGroupClassNames, label, value, error, onChange } = getInputProps(context, props);

    return (
        <div className={formGroupClassNames}>
            <label className='form__group-label' htmlFor={name}>{label}</label>

            <select className="form__group-input" value={value} onChange={onChange} name={name} id={name} {...rest}>
                <option value="" defaultValue disabled>{placeholder ? placeholder : `Select a ${label.toLowerCase()}`}</option>
                {children}
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



/* ===================================
   Radio Buttons
=================================== */
const Group = (props) => {
    let { children, placeholder, name, horizontal, disabled, ...rest } = props;
    const context = useContext(FormContext);
    const { formGroupClassNames, label, error, onChange } = getInputProps(context, props);

    const propsForChildren = {
        name,
        horizontal,
        onChange,
        values: context.inputProps.values
    }

    if (disabled) propsForChildren.disabled = disabled;

    children = passPropsToChildren(children, propsForChildren);

    return (
        <RadioComponent.Group name={name} label={label} onChange={onChange} error={error} values={context.inputProps.values} horizontal {...rest}>
            {children}
        </RadioComponent.Group>
    )
}

export const Radio = ({ children, values, onChange, name, value, horizontal, disabled }) => {
    return (
        <RadioComponent onChange={onChange} name={name} value={value} values={values} horizontal={horizontal} disabled={disabled}>
            {children}
        </RadioComponent>
    )
}

Radio.Group = Group;



/* ===================================
   Documentation & HTML Structure
=================================== */

// This section is for documentation purposes only
// It is for describing the components' structure for quick design changes

const TextInputHTML = (
    <div className='form__group'>
        <label className='form__group-label'>Text Input</label>
        <input className="form__group-input" type="text" name="textInput" />
        <div className="form__group-feedback"></div>
    </div>
)

const SelectHTML = (
    <div className='form__group'>
        <label className='form__group-label'>Text Input</label>
        <select className="form__group-input" name="Select">
            <option value="" defaultValue disabled>Select something</option>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
        </select>
        <div className="form__group-feedback"></div>
    </div>
)

const RadioHTML = (
    <label htmlFor="visual" className="form__group-radio">
        <input value="visualstudio" type="radio" name="editor" id="visual" className="form__group-radio-input" />
        <div className="form__group-radio-circle"></div>
        <div className="form__group-radio-label">Visual Studio Code</div>
    </label>
)

const RadioGroupHTML = (
    <div className='form__group'>
        <label htmlFor="iphone" className="form__group-radio">
            <input value="iphone" type="radio" name="phones" id="iphone" className="form__group-radio-input" />
            <div className="form__group-radio-circle"></div>
            <div className="form__group-radio-label">iphone</div>
        </label>
        <label htmlFor="samsung" className="form__group-radio">
            <input value="samsung" type="radio" name="phones" id="samsung" className="form__group-radio-input" />
            <div className="form__group-radio-circle"></div>
            <div className="form__group-radio-label">samsung</div>
        </label>
    </div>
)


// Using simple inputs without the Form component

const SimpleTextInput = (
    <input className="form__group-input" type="text" name="textInput" placeholder='Enter text' />
)

const SimpleSelect = (
    <select className="form__group-input" name="Select">
        <option value="" defaultValue disabled>Select something</option>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
    </select>
)


/* ===================================
   Form Context
=================================== */
const FormContext = createContext();
const FormProvider = ({ children }) => {
    const [inputProps, setInputProps] = useState({});
    const loadInputProps = (props) => setInputProps(props);

    return (
        <FormContext.Provider value={{ inputProps, loadInputProps }}>
            {children}
        </FormContext.Provider>
    )
}

export default Form;