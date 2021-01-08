import React from 'react';
import { Link } from 'react-router-dom';

import ProductIndexItem from './product_index_item';
import Splash from '../splash/splash';
import Search from '../nav/search';

class ProductIndex extends React.Component {

    constructor(props){
        super(props);
        //debugger;
        console.log(props);
        // let products = (title == "" || title == undefined)  ? Object.values(state.entities.products) : Object.values(state.entities.products).filter((products) => products.product_name.includes(title));
        this.handleChange = this.handleChange.bind(this);
        //this.testSearch.bind(this);
        this.state = {filtered : props.products};
        
    }
    
    
    handleChange(e){
        debugger;
        const { products } = this.props;
        let currentList = [];
        if (e.target.value !== ""){
            //if != "" filter based on search criteria for product name
            // set searched to true
            // Object.values(state.entities.products).filter((products) => products.product_name.includes(title));
            //this.setState({filtered : products.filter((products) => products.product_name.includes(e.target.value))});
            currentList = products.filter((products) => (products.product_name.includes(e.target.value)));
            debugger;
            this.setState({searched : true});
            debugger;
        } else {
            //if == ""
            // set searched to false
            // current search = this.props.products
            currentList = products;
            this.setState({searched : false});
        }
        this.setState({filtered : currentList});
        debugger;
    }
    
    componentDidMount() {
        //debugger;
        this.props.requestProducts();
        this.setState({searched : false, filtered : this.props.products });
        // debugger;
    }

    componentDidUpdate(prevProps) {
        if(prevProps.products.length != this.props.products.length){
            this.props.requestProducts();
            this.setState({searched : false, filtered : this.props.products });         
        }
    }

    render() {
        const { products, deleteProduct, currentUser, users } = this.props;
        let list = this.state.filtered.length == 0 ? products : this.state.filtered;
        return (
            <div>
            <div>
                <input
                    type="text"
                    placeholder="test search"
                    onChange={this.handleChange}
                >
                    
                </input>
            </div>    
                {currentUser ? <h2 className="header-name">Welcome back, {currentUser.first_name}!</h2>: ""}    
                <div className="products">
                    <ul className="product-list">
                        {/* {this.testSearch()} */}
                        {
                            list.map((product) => (<ProductIndexItem currentUser = {currentUser} 
                                product={product} 
                                deleteProduct={deleteProduct} 
                                seller={users[product.seller_id]} 
                                key={product.id} 
                                newProducts={this.state.filtered}
                                />))
                        }
                    </ul>
                </div>
                <h1 className="create-product-button">{this.props.currentUser ? <Link to="api/products/new">Create Product Listing</Link> : ""}</h1>
                <Splash/>
            </div>
        )
    }
}

export default ProductIndex;