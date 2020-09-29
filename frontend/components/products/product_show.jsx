import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestProduct(this.props.match.params.productId);
    }
    render() {
        const { product } = this.props;
        return (
            <div>
                <h1>{this.props.product.product_name}</h1>
                <img className="product-picture" src={product.picture_url} alt={product.product_name} />
                <h1>Seller Id:</h1>
                <h1>{this.props.product.seller_id}</h1>
                <h1>Price:</h1>
                <h1>${this.props.product.price}</h1>
                <h1>Quantity:</h1>
                <h1>{this.props.product.quantity}</h1>
                <h1>Description:</h1>
                <h1>{this.props.product.description}</h1>
                <Link to="/" >Back</Link>
            </div>
        )
    }
}

export default ProductShow;