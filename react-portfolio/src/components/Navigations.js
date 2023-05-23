import React from "react";

function Navigation({changeState}) {

    return (
        <nav className='nav'>
            <ul className="nav-ul">
                <li>
                    <a href='.body' onClick={(e) => {e.preventDefault(); changeState("AboutMe");}}>About Me</a>
                </li>
                <li>
                    <a href='.body' onClick={(e) => {e.preventDefault(); changeState("Portfolio");}}>Portfolio</a>
                </li>
                <li>
                    <a href='.body' onClick={(e) => {e.preventDefault(); changeState("Contact");}}>Contact</a>
                </li>
                <li>    
                    <a href='.body' onClick={(e) => {e.preventDefault(); changeState("Resume");}}>Resume</a>
                </li>
            </ul>

        </nav>
    )
}

export default Navigation;