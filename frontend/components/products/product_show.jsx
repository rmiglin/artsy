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
            <div className="product-show-div">
                <img className="product-picture-show" src={product.picture_url} alt={product.product_name} />
                <div className ="product-info-div">
                    {this.props.seller}
                    <h1 className="seller-heading">Seller Id: {this.props.product.seller_id}</h1>
                    <h1 className="product-heading">{this.props.product.product_name}</h1>
                    <div className="price-quantity-div">
                        <h1 className="product-price">${this.props.product.price}</h1>
                        <h1 className="product-quantity">Quantity: {this.props.product.quantity}</h1>
                    </div>
                    <h1>Description:</h1>
                    <h1>{this.props.product.description}</h1>
                    <Link to="/" >Back</Link>
                </div>
            </div>
        )
    }
}

export default ProductShow;