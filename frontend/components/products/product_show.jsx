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
        debugger;
        const { product, users } = this.props;
        return (
            <div className="product-show-div">
                <img className="product-picture-show" src={product.picture_url} alt={product.product_name} />
                <div className ="product-info-div">
                    <h1 className="seller-heading">{users[product.seller_id].first_name}</h1>
                    <h1 className="product-heading">{this.props.product.product_name}</h1>
                    <div className="price-quantity-div">
                        <h1 className="product-price">${this.props.product.price}</h1>
                        <label className="in-stock-label"> &#10003; In stock</label>
                    </div>
                        <form className="quantity-selector">
                            <label className="quantity-label">Quantity</label>
                            <select className="quantity-options-select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </form>
                    <button className="buy-now-submit">Buy it now</button>
                    <button className="add-cart-submit">Add to cart</button>   
                    <div className="description-div">
                        <h1 className="description-heading">Description:</h1>
                        <h1 className="description"> &#10058; {this.props.product.description} &#10058;</h1>
                    </div>
                    {/* <Link to="/" >Back</Link> */}
                </div>
            </div>
        )
    }
}

export default ProductShow;