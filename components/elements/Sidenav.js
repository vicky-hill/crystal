import { useState } from 'react'
import classNames from 'classnames'
import Button from './Button';

const Sidenav = ({ className }) => {
    const [sidenav, setSidenav] = useState(false);
    const [active, setActive] = useState(0);

    const getClasses = index => classNames('sidenav__link', {
        [className]: className, 
        'active': active === index
      });

    const sidenavLinks = [
        { name: 'Dashboard', icon: 'fa-th-large' },
        { name: 'Projects', icon: 'fa-folder' },
        { name: 'Security', icon: 'fa-lock' },
        { name: 'Profile', icon: 'fa-user-alt' },
    ]

    const openSidenav = () => {
        setSidenav(true);
        document.querySelector('body').classList.add('no-scroll');
    }

    const closeSidenav = () => {
        setSidenav(false)
        document.querySelector('body').classList.remove('no-scroll');
    }

    const activateTab = (e) => {
        e.preventDefault();
        setActive(Number(e.target.id));
    }

    return (
        <>
            <Button className="sidenav__btn" onClick={openSidenav}><i className="fas fa-bars" /></Button>

            <nav className={`sidenav ${sidenav ? 'open' : ''}`} >
                <div className="sidenav__menu">
                    {
                        sidenavLinks.map((link, i) => (
                            <a key={i} href="" id={i} className={getClasses(i)} onClick={activateTab}>
                                <i className={`fas ${link.icon}`}></i>
                                {link.name}
                            </a>
                        ))
                    }
                </div>
                <div className="sidenav__overlay" onClick={closeSidenav}></div>
            </nav>
        </>
    )
}



export default Sidenav;
