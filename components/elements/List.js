import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const List = ({ children, header, horizontal, className }) => {

    const classes = classNames('list-group', {
        [className]: className,
        'list-group-header': header,
        'list-group-horizontal': horizontal
    });

    const renderChildren = () => {
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                ...child.props
            });
        });
    };

    return (
        <ul className={classes}>
            { renderChildren() }
        </ul>
    )
}

const Item = ({ children, badge }) => {

    return (
        <li className="list-group-item">
            {children}
            { badge &&  <span className="badge badge-pill">{badge}</span>}
        </li>
    )
}

List.Item = Item;

List.propTypes = {
    header: PropTypes.bool,
    horizontal: PropTypes.bool,
}

Item.propTypes = {
    badge: PropTypes.number || PropTypes.string
}

export default List;
