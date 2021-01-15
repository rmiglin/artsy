import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from './search_container';

class Nav extends React.Component {
    userStatus() {
        // TODO: indentation? what are these <>
        return this.props.loggedIn ? 
        <>
        <FontAwesomeIcon className="user-circle" icon={faUserCircle} /> 
        <button className="signin-submit" onClick={ this.props.logout }>Log out</button>
        </>: 
        this.props.sessionModal; 
    }

    componentDidUpdate(prevProps) {
        if (prevProps.loggedIn !== this.props.loggedIn) {
            this.userStatus();
        }
    }

    render() {
        // TODO: remove console log, don't wrap everything in an empty div if you don't have to (or use a more "semantic HTML" element for a search bar)
        // Make those <li>s into <a>s, even if they don't go anywhere, it's closer to the real thing and they'd look better
        console.log(`nav + ${this.props.test}`);
        return(
            <div>
                <div className="nav-div">
                    <div className="nav-container">
                        <Link to="/" className="header-link">
                            <h1>Artsy</h1>
                        </Link>
                        {/* <SearchContainer test={this.props.test}/> */}
                        <div className="nav-controls">
                            {this.userStatus()}
                            <Link to="/api/session/carts">
                                <FontAwesomeIcon className="shopping-cart" icon={faShoppingCart}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="dropdown-div">
                    <ul>
                        <li><a>Everyday Finds</a></li>
                        <li><a>Jewelry &amp; Accessories</a></li>
                        <li><a>Clothing &amp; Shoes</a></li>
                        <li><a>Home &amp; Living</a></li>
                        <li><a>Wedding &amp; Party</a></li>
                        <li><a>Toys &amp; Entertainment</a></li>
                        <li><a>Art &amp; Collectibles</a></li>
                        <li><a>Craft Supplies</a></li>
                        <li><a><FontAwesomeIcon className="gift" icon={faGift} />Gifts</a></li>
                    </ul>
                    <hr></hr>
                </div>
            </div>
        );
    }
}

export default Nav;