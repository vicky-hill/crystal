'use client'

import { useState } from 'react'
import { RiCloseLargeLine, RiApps2Line } from '@remixicon/react'

export default function Header({ }) {
    const [showMenu, setShowMenu] = useState('');

    return (
        <header class="bedim__header">
            <nav class="bedim__nav bedim__container">
                <a href="" class="bedim__nav__logo">CRYSTAL</a>
                <div class={`bedim__nav__menu ${showMenu}`} id="nav-menu">
                    <ul class="bedim__nav__list">
                        <li> <a href="#home" class="bedim__nav__link">Home</a> </li>
                        <li> <a href="#favorites" class="bedim__nav__link">Favorites</a> </li>
                        <li> <a href="#care" class="bedim__nav__link">Care</a> </li>
                        <li> <a href="#products" class="bedim__nav__link">Products</a> </li>
                        <li> <a href="#contact" class="bedim__nav__link">Contact</a> </li>
                    </ul>
                    <RiCloseLargeLine onClick={() => setShowMenu('')} class="bedim__nav__close" id="nav-close" />
                </div>
                <RiApps2Line onClick={() => setShowMenu('show-menu')} class="bedim__nav__toggle" id="nav-toggle" />
            </nav>
        </header>
    )
}