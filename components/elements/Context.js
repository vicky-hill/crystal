import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

const Context = ({ children }) => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [display, setDisplay] = useState('none');

    const contextMenu = useRef(null);

    const showContextMenu = (e, show = true) => {
        e.preventDefault();

        show ? setDisplay('block') : setDisplay('none');

        const updateX = e.nativeEvent.x + contextMenu.current.offsetWidth > window.innerWidth ? window.innerWidth - contextMenu.current.offsetWidth : e.nativeEvent.x + window.pageXOffset;
        const updateY = e.nativeEvent.y + contextMenu.current.offsetHeight > window.innerHeight ? window.innerHeight - contextMenu.current.offsetHeight : e.nativeEvent.y + window.pageYOffset;

        setX(updateX);
        setY(updateY);
    }

    window.addEventListener('click', () => {
        setDisplay('none');
    })

    return (
        <>
             { React.cloneElement( children, { onContextMenu: (e) => showContextMenu(e) } ) }
            
            <div className="context-menu" style={{ top: y, left: x, display }} ref={contextMenu}>
                <div className="context-menu__item">Item #1</div>
                <div className="context-menu__item">Item #2</div>
                <div className="context-menu__item">Item #3</div>
                <div className="context-menu__divider"></div>
                <div className="context-menu__item">Item #4</div>
            </div>
        </>
    )
}

Context.propTypes = {
    children: PropTypes.elementType
}

export default Context;
