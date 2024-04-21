'use client'

import { useEffect } from 'react'

export default function Header({ }) {
    useEffect(() => {
        const shadowHeader = () => {
            const header = document.getElementById('header')

            window.scrollY >= 50 ? header.classList.add('header--shadow')
                : header.classList.remove('header--shadow')
        };

        window.addEventListener('scroll', shadowHeader);

        return () => {
            window.removeEventListener('scroll', shadowHeader);
        };
    }, []);

    return (
        <header className='header'>
            <div className='h-full flex justify-center items-center'>
                Navbar 
            </div>
        </header>
    )
}