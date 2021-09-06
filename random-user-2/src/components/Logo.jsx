import React from 'react'
import photoDesign from "../assets/design.svg"
import "../App.css"

export default function Logo() {
    return (
        <div id="designContainer">
            <h1>&lt;ed8en/&#62; </h1>
            <img src={photoDesign} alt="#" />
            <h2>design</h2>
        </div>
    )
}
