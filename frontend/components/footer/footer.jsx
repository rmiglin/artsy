import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <div className="footer-div">
                <a href="https://github.com/rmiglin">
                    <FontAwesomeIcon className="github-logo" icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/ross-miglin/">
                    <FontAwesomeIcon className="linkedin-logo" icon={faLinkedin} />
                </a>
                </div>
            </footer>
        );
    }
}

export default Footer;