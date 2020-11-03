import React from 'react';
import { Link } from 'react-router-dom';
//import EtsyBanner from '../../../app/assets/images/etsy-banner.png';
//import EtsyFooter from '../../../app/assets/images/etsy-footer.png';

class Splash extends React.Component {

    render() {
        return (
            <div className="splash-div">
                <img src={window.banner} alt='etsy banner'/>
                <div className="centered-text">Welcome to Etsy</div>
                <img src={window.footer} alt='etsy footer'/>
            </div>
        );
    }
}

export default Splash;