import React from 'react'
import styled from 'styled-components';
import { Route } from 'react-router'


const NavBarStyle = styled.div`
    justify-self: stretch;
    background-color: #35424A;
    display: flex;
    align-items: center;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    border-bottom: solid #A9508B 2px;
`

const  ClaruswayLogo = styled.h1`
    justify-self: flex-start;
    margin-right: auto;
    margin-left: 15px;
    color: white;
`

export default function Navbar() {


    return (
        <NavBarStyle>
            <ClaruswayLogo><span style={{color: "#A9508B"}}>Clarusway</span> Web Design</ClaruswayLogo>
        </NavBarStyle>
    )
}
