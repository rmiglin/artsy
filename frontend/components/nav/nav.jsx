import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {Link} from 'react-router-dom';
import {ClickDropdown} from '../dropdown/dropdown';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    userStatus (){
        return this.props.loggedIn ? <FontAwesomeIcon className="user-circle" icon={faUserCircle} /> : this.props.sessionModal; 
    }

    componentDidUpdate(prevProps){
        if(prevProps.loggedIn !== this.props.loggedIn){
            this.userStatus();
        }
    }


    render () {
        return(
            <div>
                <div className="nav-div">
                    <Link to="/" className="header-link">
                        <h1>Artsy</h1>
                    </Link>
                    <input type="search" className="search-bar" placeholder="Search for items or shops" results="0"/>
                    {this.userStatus()}
                    <FontAwesomeIcon className="shopping-cart" icon={faShoppingCart}/>

                </div>
                <div className="dropdown-div">
                    <ul>
                        <li>Everyday Finds</li>
                        <li>Jewelry &amp; Accessories</li>
                        <li>Clothing &amp; Shoes</li>
                        <li>Home &amp; Living</li>
                        <li>Wedding &amp; Party</li>
                        <li>Toys &amp; Entertainment</li>
                        <li>Art &amp; Collectibles</li>
                        <li>Craft Supplies</li>
                        <li><FontAwesomeIcon className="gift" icon={faGift} />Gifts</li>
                    </ul>
                    <hr></hr>
                </div>
            </div>
        );
    }
}

export default Nav;