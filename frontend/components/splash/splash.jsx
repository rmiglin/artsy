import React from 'react';
import { Link } from 'react-router-dom';
//import EtsyBanner from '../../../app/assets/images/etsy-banner.png';
//import EtsyFooter from '../../../app/assets/images/etsy-footer.png';

class Splash extends React.Component {

    render() {
        return (
            <div className="splash-div">
                <img src={window.banner} alt='etsy banner'/>
                <div className="centered-text">
                    <h1>What is Etsy?</h1>
                    <div className="splash-text-div">
                        <div className="splash-paragraph-div">
                            <h2>A one-of-a-kind community</h2>
                            <h3>Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items.</h3>
                        </div>
                        <div className="splash-paragraph-div">
                            <h2>Support independent creators</h2>
                            <h3>There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</h3>
                        </div>
                        <div className="splash-paragraph-div">
                            <h2>Peace of mind</h2>
                            <h3>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</h3>  
                        </div>
                    </div>
                </div>
                <img src={window.footer} alt='etsy footer'/>
            </div>
        );
    }
}

export default Splash;