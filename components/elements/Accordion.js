import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { PropTypes } from 'prop-types'

const Accordion = ({ children, active, setActive }) => {
    children = React.Children.toArray(children).map((child, i) => ({
        ...child,
        props: { ...child.props, active, setActive, key: i }
    }))

    return (
        <div className="accordion">
            {children}
        </div>
    )
}

const Item = ({ children, active, setActive, key, className, title }) => {
    const [height, setHeight] = useState(0);
    const content = useRef();

    useEffect(() => {
        open();
    }, [active])

    const getClasses = index => classNames('accordion__item', {
        [className]: className,
        'active': active === index || (Array.isArray(active) && active.includes(index))
    });

    const open = () => {
        if (Array.isArray(active)) {
            // Handle multiple active tabs
            active.includes(key) ? setHeight(content.current.scrollHeight + "px") : setHeight(0);

        } else {
            // Handle one active tab
            active === key ? setHeight(content.current.scrollHeight + "px") : setHeight(0);
        }
    }

    const toggle = () => {
        if (Array.isArray(active)) {
            // Handle multiple active tabs
            active.includes(key) ? setActive(active => active.filter(a => a !== key)) : setActive(active => [...active, key])

        } else {
            // Handle one active tab
            key === active ? setActive(null) : setActive(key);
        }
    }

    const getHeight = () => {
        if (Array.isArray(active)) {
            // Handle multiple active tabs
            return { maxHeight: `${!active.includes(key) ? 0 : height}` }

        } else {
            // Handle one active tab
            return { maxHeight: `${active !== key ? 0 : height}` }
        }
    }

    return (
        <div className={getClasses(key)} >
            <div className='accordion__header' onClick={toggle}>
                <p className='accordion__header-title'>{title}</p>
                <i className="accordion__header-toggle fa-sharp fa-solid fa-chevron-down"></i>
            </div>

            <div className='accordion__body' ref={content} style={getHeight()} >
                <div className="accordion__content">
                    {children}
                </div>
            </div>
        </div>
    )
}

Accordion.Item = Item;

Accordion.propTypes = {
    active: PropTypes.array || PropTypes.number || null,
    setActive: PropTypes.func
}

Item.propTypes = {
    active: PropTypes.array || PropTypes.number || null,
    setActive: PropTypes.func,
    key: PropTypes.number,
    title: PropTypes.string,
    className: PropTypes.string
}

export default Accordion;