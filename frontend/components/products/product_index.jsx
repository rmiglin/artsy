import React from 'react';
import { Link } from 'react-router-dom';

import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {

    componentDidMount() {
        this.props.requestProducts();
    }

    render() {
        const { products, deleteProduct, currentUser, users } = this.props;
        return (
            <div>    
                {currentUser ? <h2 className="header-name">Welcome back, {currentUser.first_name}!</h2>: ""}    
            <div className="products">
                <ul className="product-list">
                    {
                        products.map((product) => (<ProductIndexItem currentUser = {currentUser} 
                            product={product} 
                            deleteProduct={deleteProduct} 
                            seller={users[product.seller_id]} 
                            key={product.id} 
                            />))
                    }
                </ul>
            </div>
                <h1 className="create-product-button">{this.props.currentUser ? <Link to="api/products/new">Create Product Listing</Link> : ""}</h1>
            </div>
        )
    }
}

export default ProductIndex;