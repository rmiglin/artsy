import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProductIndexItem extends React.Component {
    render() {
        const { product, deleteProduct } = this.props;
        return (
            <div className="products">
                <div className="product-listing">
                    <img className="product-picture" src={product.picture_url} alt={product.product_name}/>
                    <h1>${product.price}</h1>
                    {this.props.currentUser ? <Link to={`/api/products/${product.id}/edit`}>Edit</Link> : ""}
                    {this.props.currentUser ? <button type="submit" onClick={() => deleteProduct(product.id)}>Delete</button> : ""}
                </div>
            </div>
        )
    }
}

export default ProductIndexItem;