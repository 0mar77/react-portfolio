import React from 'react';
import image from '../images/me.png'

function AboutMe() {
    return (
        <div className='main-container'>
            
            <h2>About Me</h2>
            <img className="profile-pic" src={image} alt="Its me!!"/>
            <p>Hello, My name is Luis and I am from Veracruz, Mexico. I am currently studying to become a full stack developer.
                My studies have mainly focused on the MERN stack. 
            </p>
            
        </div>
    )
}

export default AboutMe;