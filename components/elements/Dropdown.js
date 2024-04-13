import { useState } from 'react'

export default function Dropdown({ title }) {
    return (
        <div className='dropdown'>
            <li className='dropdown__link'>
                <a href="#">{title}</a>
            </li>
            <div className='dropdown__menu'>
                <p>Link 1</p>
                <p>Link 2</p>
                <p>Link 3</p>
                <p>Link 4</p>
            </div>
        </div>
    )
}