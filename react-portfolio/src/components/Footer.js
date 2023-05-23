import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer>
            <ul className='footer-ul'>
                <li>
                    <a href='https://github.com/0mar77'> <FontAwesomeIcon icon={faGithub} size='7x'/> </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/luis-duran-2939ab277/'> <FontAwesomeIcon icon={faLinkedin} size='7x'/> </a>
                </li>
                <li>
                    <a href='https://stackoverflow.com/users/19542329/0mar77'><FontAwesomeIcon icon={faStackOverflow} size='7x'/></a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;