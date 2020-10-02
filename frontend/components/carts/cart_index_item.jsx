import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CartIndexItem extends React.Component {
    render() {
        //debugger;
        return (
            <div className="product-listing">
                <div className="edit-delete-div">
                    <h1>{this.props.product_name}</h1>
                    
                </div>
            </div>
        )
    }
}

export default CartIndexItem;