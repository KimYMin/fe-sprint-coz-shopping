import React from 'react'
import './Header.css'
import { useState } from 'react'
import { Link } from "react-router-dom";
import Menu from './side/Menu';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleSide = () => {
        setIsOpen(!isOpen)
    }

    return(
        <header className='header-container'>
            <div className='logo-title'>
                <Link to='/'>
                    <img src="headerlogo1.png" alt="logo" className='logo'/>
                </Link>
                <span className='logo-title'>COZ Shopping</span>
            </div>
            <div className='hamburger' onClick={toggleSide}>
                <img src="hamburger.png" alt="hamburger menu"/>
                {isOpen && <Menu/>}
            </div>
            
        </header>
    );
}
