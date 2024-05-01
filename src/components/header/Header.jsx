import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './header.css'
import logo from '../../assets/logo.png'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <header className='header'>
                <div className='nav-container'>
                    <div className='logo-header'>
                        <img className='logo' src={ logo } alt="logo" />
                    </div>
                    <div className={`toggle ${ isOpen && 'open' }`} onClick={() => setIsOpen(!isOpen)}>
                        <span></span><span></span><span></span>
                    </div>
                    <nav className='nav'>
                        <ul className={`menu-items ${ isOpen && 'open' }`}>
                            <li><NavLink onClick={() => setIsOpen(!isOpen)} className={(({isActive}) => isActive ? 'active' : '')} to='/home'>Home</NavLink></li>
                            <li><NavLink onClick={() => setIsOpen(!isOpen)} className={(({isActive}) => isActive ? 'active' : '')} to='/about'>Acerca de</NavLink></li>
                            <li><NavLink onClick={() => setIsOpen(!isOpen)} className={(({isActive}) => isActive ? 'active' : '')} to='services'>Servicios</NavLink></li>
                            <li><NavLink onClick={() => setIsOpen(!isOpen)} className={(({isActive}) => isActive ? 'active' : '')} to='contact'>Contacto</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className='image-header'>
                    <img className='header-image' src={ logo } alt="image-header" />
                </div>
            </header>
        </>
    )
}