import React, { useRef, useEffect } from 'react'

const Collapsed = ({ children, collapsed }) => {
    const content = useRef(null);
    
    useEffect(() => {
        if (collapsed) {
            content.current.style.maxHeight = null
        } else {
            content.current.style.maxHeight = content.current.scrollHeight + "px";
        }
    }, [collapsed])



    function collapse() {
        content.current.style.maxHeight ? 
            content.current.style.maxHeight = null : 
            content.current.style.maxHeight = content.current.scrollHeight + "px";
    }

    return (
        <div className="collapse" ref={content}>
            { children }
        </div>
    )
}

export default Collapsed;
