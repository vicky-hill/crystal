import { useState } from 'react'
import classNames from 'classnames'

/* eslint-disable */
const BottomNav = ({ className }) => {
    const [active, setActive] = useState(0);

    const navLinks = [
        { icon: 'fa-th-large', text: 'Dashboard' },
        { icon: 'fa-folder', text: 'Projects' },
        { icon: 'fa-lock', text: 'Security' },
        { icon: 'fa-user-alt', text: 'Profile' },
    ]

    const getClasses = index => classNames('bottom-nav-link', {
      [className]: className, 
      'active': active === index
    });


    const activateTab = (e, i) => {
        e.preventDefault();
        setActive(i);
    }

    return (
        <nav className="bottom-nav">
            {
                navLinks.map((link, i) => (
                    <a key={i} href="" className={getClasses(i)} onClick={(e) => activateTab(e, i)}>
                        <i className={`fas ${link.icon}`}></i>
                        <span className="bottom-nav-text">{ link.text }</span>
                    </a>
                ))
            }
        </nav>
    )
}

export default BottomNav;


