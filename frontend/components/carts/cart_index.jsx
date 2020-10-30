import React from 'react';
import { Link } from 'react-router-dom';

import CartIndexItem from './cart_index_item';

class CartIndex extends React.Component {

    componentDidMount() {
        this.props.requestCartedItems();
    }

    // componentWillUpdate() {
    //     this.props.requestCartedItems();
    // }
    totalPrice(){
        //debugger;
        let cart_total = 0;
        this.props.cartings.forEach((cartedItem) => cart_total += this.props.products[cartedItem.product_id].price)
        return cart_total
    }

    render() {
        if(!this.props.cartings){
            return null;
        }
        //debugger;
        const {products} = this.props;
        return (
            <div className="user-cart-div">
                <div className="cart-div">
                    <ul className="cart-list">
                        {
                            this.props.cartings.map((cartedItem) => (<CartIndexItem 
                                product_name={products[cartedItem.product_id].product_name}
                                product_id={cartedItem.product_id}
                                picture_url={products[cartedItem.product_id].picture_url}
                                price={products[cartedItem.product_id].price}
                                key={cartedItem.id}
                            />))
                        }
                    </ul>
                    <h1>Total: {this.totalPrice()}</h1>
                </div>
            </div>
        )
    }
}

export default CartIndex;