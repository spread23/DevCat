import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'


import './footer.css'
import logo from '../../assets/logo.png'

export const Footer = () => {
    return (
            <footer className='footer'>
                <div className='footer-container'>
                    <div className='footer-logo'>
                        <img className='logo-footer' src={ logo } alt="logo" />
                        <h6>&copy; DevCat Todos los derechos reservados 2024</h6>
                    </div>
                    <div className='sections-footer'>
                        <h6>Home</h6>
                        <h6>About</h6>
                        <h6>Services</h6>
                        <h6>Contact</h6>
                    </div>
                    <div className='social-networks'>
                        <h5>Síguenos en nuestras redes</h5>
                        <a href='https://www.facebook.com/esteban.rojasm.3' target='_blank'><FaFacebook className='item-footer' /></a>
                        <a href='https://github.com/spread23' target='_blank'><FaGithub className='item-footer' /></a>
                        <a href='https://www.instagram.com/devcat23/' target='_blank'><FaInstagram className='item-footer' /></a>
                        <a href='https://www.linkedin.com/in/julian-esteban-rojas-marin-849052a1/' target='_blank'><FaLinkedin className='item-footer' /></a>
                    </div>
                </div>
            </footer>
    )
}