import React, {useState} from 'react'
import { Router } from 'react-router';
import { Hamburger, Logo, Menu, MenuLink, Nav } from './styleNavbar';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        
        <Nav>
            <Logo to="/">
                <i>{"<CLRSWY/>"} <span>recipe</span></i>
            </Logo>

            <Hamburger onClick={()=>{setIsOpen(!isOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </Hamburger>

            <Menu isOpen={isOpen}>
                <MenuLink to='/about'>About</MenuLink>
                <MenuLink to={{pathname: 'https://github.com/orgs/clarusway/dashboard'}}
                target="_blank" rel="noopener noreferrer">GitHub</MenuLink>
                <MenuLink to='login'>Logout</MenuLink>
            </Menu>
        </Nav>
    )
}
