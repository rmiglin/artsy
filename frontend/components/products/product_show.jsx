import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestProduct(this.props.match.params.productId);
    }
// t.string "product_name", null: false
// t.integer "seller_id", null: false
// t.integer "price", null: false
// t.integer "quantity", null: false
// t.text "description", null: false
    render() {
        const { product } = this.props;
        return (
            <div>
                <h1>{this.props.product.product_name}</h1>
                <h1>{this.props.product.seller_id}</h1>
                <h1>{this.props.product.price}</h1>
                <h1>{this.props.product.quantity}</h1>
                <h1>{this.props.product.description}</h1>
                <Link to="/" />
            </div>
        )
    }
}

export default ProductShow;