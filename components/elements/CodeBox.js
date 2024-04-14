import React, { useState, useRef, useEffect } from 'react'
import { Code as Cd } from 'react-feather'
import Prism from 'prismjs'

const CodeBox = ({ children, codeTabs }) => {

    const [icon, setIcon] = useState(false)
    const [active, setActive] = useState(0)

    const openTab = (e) => {
        setActive(Number(e.target.id))
    }

    useEffect(() => {
        Prism.highlightAll();
    }, [])

    const content = useRef(null)

    function collapse() {
        content.current.style.maxHeight ?
            content.current.style.maxHeight = null :
            content.current.style.maxHeight = content.current.scrollHeight + "px"
    }

    return (
        <div onMouseEnter={() => setIcon(true)} onMouseLeave={() => setIcon(false)}>
            {children}
            {icon && <Cd style={{ cursor: 'pointer' }} className='ml-2' size={15} color={'gainsboro'} onClick={collapse} />}

            {
                codeTabs && (
                    <div className="collapse" ref={content}>
                        <div className="card">
                            <div className="card-body">

                                <div className="tabs" onClick={openTab}>
                                    {
                                        codeTabs.map((item, i) => (
                                            <div id={i} key={i} className={`tabs-item ${active === i ? 'active' : ''}`}>{item.title}</div>
                                        ))
                                    }
                                </div>

                                <div className="tab-content">
                                    {
                                        codeTabs.map((item, i) => (
                                            <div key={i} id={`tab-${i}`} className={`tab-pane fade-in ${active === i ? 'show active' : ''}`}>
                                                <pre>
                                                    <code className={`language-${item.lang}`}>
                                                        {item.code}
                                                    </code>
                                                </pre>
                                            </div>
                                        ))
                                    }


                                    <div className="tab-pane fade" id="second">

                                    </div>
                                    <div className="tab-pane fade" id="third">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CodeBox;
