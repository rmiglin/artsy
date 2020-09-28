import React from 'react';
import { Link } from 'react-router-dom';

import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {

    componentDidMount() {
        this.props.requestProducts();
    }

    render() {
        const { products, deleteProduct, currentUser } = this.props;
        return (
            <div>
                <ul>
                    {
                        products.map((product) => (<ProductIndexItem currentUser = {currentUser} product={product} deleteProduct={deleteProduct} key={product.id} />))
                    }
                </ul>
                {this.props.currentUser ? <Link to="api/products/new">New Product</Link> : ""}
            </div>
        )
    }
}

export default ProductIndex;