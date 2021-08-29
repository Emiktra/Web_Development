import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <h1>React Router Dom Class</h1>
            <ul className="nav">
    {/* Link tags do not refresh/reset the opened page */}
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/profile">Profile</Link>


    {/* a tags do refresh/reset the page every time*/}
                    {/* <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/profile">Profile</a> */}
                    
            </ul>
        </div>
    )
}
