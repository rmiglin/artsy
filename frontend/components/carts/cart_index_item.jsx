import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CartIndexItem extends React.Component {
    render() {
        //debugger;
        //debugger;
        return (
            <div className="product-listing">
                <div className="carted-item-div">

                    <h1>{this.props.product_name}</h1>
                    {/* <Link to={`/products/${product.id}`}><img className="product-picture" src={this.props.picture_url} alt={this.props..product_name} /></Link> */}
                    <Link to={`/products/${this.props.product_id}`}><img className="product-picture" src={this.props.picture_url}/></Link>
                    <h2>${this.props.price}.00</h2>
                </div>
            </div>
        )
    }
}

export default CartIndexItem;