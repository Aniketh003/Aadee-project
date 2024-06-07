import React from 'react'
import './footer.css'
import NavLink from '../navbar/NavLink'
import { links } from '../navbar/Navbar'
import img from "../../assets/logo-white.png"

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="logo-nav">
                <img src={img} alt="logo" />
                <ul>
                    {links.map((e, index) => (
                        <NavLink name={e.name} key={index} link={e.id} />
                    ))}
                </ul>
            </div>
            <div className="line">
                <hr />
            </div>
            <div className="last">
                <p>2023 © Copyright by The Credenza | Developed by ValueThoughtz</p>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms</li>
                    <li>Cookies</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
