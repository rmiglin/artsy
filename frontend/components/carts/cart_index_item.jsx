import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CartIndexItem extends React.Component {
    render() {
        //debugger;
        debugger;
        return (
            <div className="product-listing">
                <div className="edit-delete-div">

                    <h1>{this.props.product_name}</h1>
                    {/* <Link to={`/products/${product.id}`}><img className="product-picture" src={this.props.picture_url} alt={this.props..product_name} /></Link> */}
                    <img className="product-picture" src={this.props.picture_url}/>

                </div>
            </div>
        )
    }
}

export default CartIndexItem;