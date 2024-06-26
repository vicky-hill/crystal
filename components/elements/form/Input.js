import React from 'react'

/**
 * @typedef { 'regular' | 'floatingLabel' } Variant
 */

/**
 * Input
 * @param {object} props
 * @param {Variant} props.variant
 * @param {boolean} props.number
 */
const Input = ({ variant = 'floatingLabel', number, dollar, name, label, onChange, value, error, placeholder, noLabel, className = '', groupClassName = '', identifier, style, ...rest }) => {

    const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };

    const formatPrice = (price) => {
        const formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
        });
        return formatter.format(parseFloat(price));
    };

    const handleBlur = (e) => {
        let price = e.target.value;

        e.target.value = price.includes('$') ? formatPrice(price.split("").slice(1).join("").trim()) :
            price ? formatPrice(price) : ''
        onChange(e);
    }


    if (number && dollar) {
        throw new Error('Input received both dollar and number props, please pass only numer OR dollar');
    }

    const TextInput = (
        <input
            className={'form__group-input ' + className}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            id={name}
            type="text"
            autocomplete="off"
            {...rest}
        />
    )

    const NumberInput = (
        <input
            className={'form__group-input ' + className}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            id={name}
            type="number"
            onWheel={(e) => e.target.blur()}
            {...rest}
        />
    )

    const DollarInput = (
        <input
            className={'form__group-input ' + className}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            id={name}
            type="number"
            min="0"
            onWheel={(e) => e.target.blur()}
            onKeyDown={preventMinus}
            onBlur={handleBlur}
            {...rest}
        />
    )

    /* ===================================
      Variants
   =================================== */

    const regularInput = (
        <div className={`${groupClassName} form__group ${error ? 'invalid' : ''}`} style={style ? style : {}}>
            {!noLabel && <label className='form__group-label' htmlFor={name}>{label}</label>}
            {
                number ? NumberInput : dollar ? DollarInput : TextInput
            }
            <div className="form__group-feedback">{error}</div>
        </div>
    )

    const floatingLabelInput = (
        <div className={`${groupClassName} form__group floating-label ${error ? 'invalid' : ''}`} style={style ? style : {}}>
            {
                number ? NumberInput : dollar ? DollarInput : TextInput
            }
            {!noLabel && <label className='form__group-label' htmlFor={name}>{label}</label>}
            <div className="form__group-feedback">{error}</div>
        </div>
    )

    const variants = {
        regular: regularInput,
        floatingLabel: floatingLabelInput
    }

    return variants[variant];
}

export default Input;
