import React, { useState } from 'react'
import "./navbar.css"
import img from "../../assets/nav-logo.png"
import NavLink from './NavLink'
import Button from '../Button'

export const links = [
  {
    id: "",
    name: "Home"
  },
  {
    id: "about-us",
    name: "About us"
  },
  {
    id: "learning-science",
    name: "Learning Science"
  },
  {
    id: "learning-vedic-science",
    name: "Learning Vedic Science"
  },
  {
    id: "learning-bespoke",
    name: "Learning Bespoke"
  }
];

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <img src={img} alt="credenza-logo" />
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {links.map((e, index) => (
          <NavLink name={e.name} key={index} link={e.id}/>
        ))}
      </ul>
      <div className='nav-actions'>
        <Button text="Contact Us" />
        <div className='hamburger' onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
