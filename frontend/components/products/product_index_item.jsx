import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProductIndexItem extends React.Component {
    render() {
        const { product, deleteProduct } = this.props;
        debugger;
        return (
                <div className="product-listing">
                    <Link to={`/products/${product.id}`}><img className="product-picture" src={product.picture_url} alt={product.product_name} /></Link>
                    <h1>${product.price}.00</h1>
                    {this.props.currentUser ? <Link to={`/products/${product.id}/edit`}>Edit</Link> : ""}
                    {this.props.currentUser ? <button type="submit" onClick={() => deleteProduct(product.id)}>Delete</button> : ""}
                </div>
        )
    }
}

export default ProductIndexItem;