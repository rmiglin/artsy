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

    render() {
        if(!this.props.cartings){
            return null;
        }
        debugger;
        const {products} = this.props;
        return (
            <div>
                <div className="cart-div">
                    <ul className="cart-list">
                        {
                            //cartings.map((cartedItem) => (<>{products[cartedItem.product_id].product_name}</>))
                            this.props.cartings.map((cartedItem) => (<CartIndexItem 
                                product_name={products[cartedItem.product_id].product_name}
                                picture_url={products[cartedItem.product_id].picture_url}
                                
                                key={cartedItem.id}
                            />))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default CartIndex;