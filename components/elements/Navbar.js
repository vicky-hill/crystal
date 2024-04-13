/* eslint-disable */
import React, { useState } from 'react'
import Button from './Button';
import Input from './form/Input';
import Dropdown from './Dropdown';

const Navbar = ({ }) => {

    const [active, setActive] = useState(0);

    const navLinks = ["Home", "Elements", "Styles"]

    const mobileMenu = (e) => {
        const clicked = Array.from(e.target.classList)[0];
        const navToggle = document.querySelector('.nav-toggle');
        const searchToggle = document.querySelector('.search-toggle');

        if (clicked === 'nav-toggle') {
            searchToggle.checked = false;
        } else {
            navToggle.checked = false;
        }
    }


    return (
        <nav className="nav-container mb-5">
            <img src="" className="nav-logo" loading="lazy"></img>
            <a className="nav-brand" href="#">Crystal</a>

            <input type="checkbox" className="nav-toggle" name="" id="nav-toggle" onClick={mobileMenu} />
            <input type="checkbox" className="search-toggle" name="" id="search-toggle" onClick={mobileMenu} />

            <div className="navbar">
                <ul>

                    {
                        navLinks.map((link, i) => (
                            <li key={i} className={`${active === i ? 'active' : ''}`} onClick={() => setActive(i)}>
                                <a href="#">{link}</a>
                            </li>
                        ))
                    }

                    <Dropdown title="Flyers" />
                    <Dropdown title="Sticker" />
                    <Dropdown title="Sale" />
                    <Dropdown title="Ecommerce" />

                </ul>

                <div className='flex justify-center items-center'>
                    <Input type="search" placeholder="Search" className='h-full' noLabel groupClassName='mr-5' />
                    <Button className="m-0 h-full">Search</Button>
                </div>
            </div>

            <label htmlFor="nav-toggle" className="nav-toggle-label"><span></span></label>
            <label htmlFor="search-toggle" className="search-toggle-label"><span><i className="fas fa-search"></i></span></label>
        </nav>
    )
}


export default Navbar;
