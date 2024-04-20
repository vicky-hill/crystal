import { useState } from 'react'

export default function Dropdown({ title }) {
    return (
        <div className='dropdown'>
            <div className='dropdown__link'>
                <a href="#">{title}</a>
            </div>
            <div className='dropdown__menu'>
                <div className='dropdown__menu-item dropdown__has-children'>
                    <p>Link 1</p>
                    <div className='dropdown__children'>
                        <div className='dropdown__menu-item'>Child 2</div>
                        <div className='dropdown__menu-item'>Child 3</div>
                        <div className='dropdown__menu-item'>Child 4</div>
                    </div>
                </div>
                <div className='dropdown__menu-item dropdown__has-children'>
                    <p>Link 2</p>
                    <div className='dropdown__children'>
                        <div className='dropdown__menu-item'>Child 2</div>
                        <div className='dropdown__menu-item'>Child 3</div>
                        <div className='dropdown__menu-item'>Child 4</div>
                    </div>
                </div>
                <div className='dropdown__menu-item'>Link 3</div>
                <div className='dropdown__menu-item'>Link 4</div>
            </div>
        </div>
    )
}