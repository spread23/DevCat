import React from 'react'

import './footer.css'
import logo from '../../assets/logo.png'

export const Footer = () => {
    return (
            <footer className='footer'>
                <div className='footer-container'>
                    <div className='footer-logo'>
                        <img className='logo-footer' src={ logo } alt="logo" />
                    </div>
                    <div className='social-networks'>

                    </div>
                </div>
            </footer>
    )
}