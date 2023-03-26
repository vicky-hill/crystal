import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Tabs = ({ children, active, setActive }) => {
    children = children.map((child, i) => ({
        ...child,
        props: { ...child.props, active, key: i }
    }))

    const getClasses = index => classNames('tabs__item', {
        'active': active === index
    });

    const openTab = (e) => setActive(Number(e.target.id));
    
    return (
        <div className="tabs">
            <div className="tabs__header" onClick={openTab}>
                {
                    children.map((child, i) => (
                        <div key={i} id={i} className={getClasses(i)}>{ child.props.title }</div>
                    ))
                }
            </div>

            <div className="tabs__content">
                { children }
            </div>
        </div>
    )
}

const Item = ({ children, active, key }) => {
    const getClasses = index => classNames('tab-pane fade-in', {
        'show active': active === index
    })

    return (
        <div className={getClasses(key)}>
            { children }
        </div>
    )
}

Tabs.Item = Item;

Tabs.propTypes = {
    active: PropTypes.number,
    setActive: PropTypes.func
}

Item.propTypes = {
    active: PropTypes.number,
    key: PropTypes.number
}

export default Tabs;