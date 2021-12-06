import React from 'react'
import logo from '../images/cloverleaflogo.png'
import Button from './Button.jsx'
import menuIcon from '../images/menu-icon.svg'
import closeMenuIcon from '../images/close-menu-icon.svg'

const Header = () => {
    return (
        <header>
            <div className="header-left">
                <img src={logo} alt="Cloverleaf Audio Logo" className="logo"/>
            </div>
            <div className="header-right">
                <Button className="header-btns" text="BOOK ONLINE" />
                <Button className="header-btns" text="CONTACT" />
                <Button className="header-btns" text="REPORT AN ISSUE" />
                <img className="mobileOnly menu-btn" src={menuIcon} alt="menu button"/>
                <img className="mobileOnly close-menu-btn" src={closeMenuIcon} alt="menu button"/>

            </div>
        </header>
    )
}

export default Header