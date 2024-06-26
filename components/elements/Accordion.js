import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'

/**
 * Accordion
 * @param {object} props
 * @param {array | number} props.active
 * @param {function} props.setActive
 */
export default function Accordion ({ children, active, setActive }) {
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

/**
 * Accordion.Item
 * @param {object} props
 * @param {number} props.key
 * @param {string} props.className
 * @param {title} props.title
 * @param {array | number} props.active
 * @param {function} props.setActive
 */
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
                <p>{title}</p>
                <i className="accordion__header-toggle fa-sharp fa-solid fa-chevron-down"></i>
            </div>

            <div data-element="accordion__body" className='accordion__body' ref={content} style={getHeight()} >
                <div className="accordion__content">
                    {children}
                </div>
            </div>
        </div>
    )
}

Accordion.Item = Item;