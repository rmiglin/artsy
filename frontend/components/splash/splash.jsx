import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { faInstagram, faFacebook, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

class Splash extends React.Component {

    render() {
        return (
            <div>
                <div className="splash-div">
                    <img src={window.banner} alt='etsy banner'/>
                    <div className="centered-text">
                        <h1 className="splash-title">What is Etsy?</h1>
                        <div className="splash-text-div">
                            <div className="splash-paragraph-div">
                                <h2 className="splash-paragraph-title">A one-of-a-kind community</h2>
                                <h3 className="splash-paragraph-text">Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items.</h3>
                            </div>
                            <div className="splash-paragraph-div">
                                <h2 className="splash-paragraph-title">Support independent creators</h2>
                                <h3 className="splash-paragraph-text">There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</h3>
                            </div>
                            <div className="splash-paragraph-div">
                                <h2 className="splash-paragraph-title">Peace of mind</h2>
                                <h3 className="splash-paragraph-text">Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</h3>  
                            </div>
                        </div>
                    </div>

                </div>
                <div className="etsy-footer-div">
                    <img src={window.footer} alt='etsy footer'/>
                    {/* <div className="etsy-icons-div">
                        <FontAwesomeIcon className="instagram-logo" icon={faInstagram} /> 
                        <FontAwesomeIcon className="facebook-logo" icon={faFacebook} /> 
                        <FontAwesomeIcon className="pinterest-logo" icon={faPinterest} /> 
                        <FontAwesomeIcon className="twitter-logo" icon={faTwitter} /> 
                        <FontAwesomeIcon className="youtube-logo" icon={faYoutube} /> 
                    </div> */}
                </div>
            </div> 
        );
    }
}

export default Splash;