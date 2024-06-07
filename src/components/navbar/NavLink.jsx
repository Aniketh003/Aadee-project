import React from 'react'
import "./navbar.css"

const NavLink = ({ name, link }) => {
    return (
        <li>
            <a href="#">{name}</a>
        </li>
    )
}

export default NavLink
