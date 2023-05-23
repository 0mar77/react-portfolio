import React from 'react';
import pitch from '../images/pitch.png'
import localeats from '../images/localeats.png'
import jsQuiz from '../images/js-quiz.png'
import passwordGenerator from '../images/password-generator.png'
import scheduler from '../images/scheduler.png'
import weatherDashboard from '../images/weather-dashboard.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Portfolio() {
    return (
        <div className="main-container">

            <h2>Portfolio</h2>
            <div className="portfolio-flex">

                <div className='project-card'>
                    <img src={pitch} className='project-pics' alt="Project" />
                    <div className='card-info'>
                        <a href="https://andyanza.github.io/pitch/"> <h3>Pitch</h3> </a>
                        <a href='https://github.com/AndyAnza/pitch'> <FontAwesomeIcon icon={faGithub} size='3x'/> </a> <br></br>
                        <span>JavaScript, CSS, HTML, Poke Api</span>
                    </div>
                </div>

                <div className='project-card'>
                    <img src={localeats} className='project-pics' alt="Project"/>
                    <div className='card-info'>
                        <a href="https://localeats.herokuapp.com/"> <h3>Local Eats</h3> </a>
                        <a href='https://github.com/AndyAnza/localeats'> <FontAwesomeIcon icon={faGithub} size='3x'/> </a><br></br>
                        <span>JS, Express, Handlebars, Tailwind, MySql</span>
                    </div>
                </div>

                <div className='project-card'>
                    <img src={jsQuiz} className='project-pics' alt="Project"/>
                    <div className='card-info'>
                        <a href="https://0mar77.github.io/wet-bottle/"> <h3>JavaScript Quiz</h3> </a>
                        <a href='https://github.com/0mar77/wet-bottle'> <FontAwesomeIcon icon={faGithub} size='3x'/> </a><br></br>
                        <span>JavaScript, CSS, HTML</span>
                    </div>
                </div>
                    
                <div className='project-card'>
                    <img src={passwordGenerator} className='project-pics' alt="Project"/>
                    <div className='card-info'>
                        <a href="https://0mar77.github.io/covert-byway/"><h3>Password Generator</h3></a>
                        <a href='https://github.com/0mar77/covert-byway'> <FontAwesomeIcon icon={faGithub} size='3x'/> </a><br></br>
                        <span>JavaScript, CSS, HTML</span>
                    </div>
                </div>

                <div className='project-card'>
                    <img src={scheduler} className='project-pics' alt="Project"/>
                    <div className='card-info'>
                        <a href="https://0mar77.github.io/work-day-schedule/"><h3>Work Day Scheduler</h3></a>
                        <a href='https://github.com/0mar77/work-day-schedule'> <FontAwesomeIcon icon={faGithub} size='3x'/> </a><br></br>
                        <span>JavaScript, CSS, HTML, DayJS, JQuery</span>
                    </div>
                </div>

                <div className='project-card'>
                    <img src={weatherDashboard} className='project-pics' alt="Project"/>
                    <div className='card-info'>
                        <a href="https://0mar77.github.io/weather-dashboard/"><h3>Weather Dashboard</h3></a>
                        <a href='https://github.com/0mar77/weather-dashboard'> <FontAwesomeIcon icon={faGithub} size='3x'/> </a><br></br>
                        <span>JavaScript, CSS, HTML, Open Weather Api</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Portfolio;