import React from 'react';
import { Link } from 'react-router-dom';

import ProductIndexItem from './product_index_item';
import Splash from '../splash/splash';
import Search from '../nav/search';

class ProductIndex extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {filtered : props.products};
        
    }
    
    cleanQuery(str){
        return str.replace(/\s+/g, '').toLowerCase();
    }
    
    handleChange(e){
        const { products } = this.props;
        let currentList = [];
        if (e.target.value !== ""){
            currentList = products.filter((product) => (this.cleanQuery(product.product_name).includes(this.cleanQuery(e.target.value))));
            this.setState({searched : true});
        } else {
            currentList = products;
            this.setState({searched : false});
        }
        this.setState({filtered : currentList});
    }
    
    componentDidMount() {
        this.props.requestProducts();
        this.setState({searched : false, filtered : this.props.products });
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
                <div className="product-index">
                    <div className="search-div">
                        <input
                            className="true-search"
                            type="text"
                            placeholder="Search for anything"
                            onChange={this.handleChange}
                        />
                        
                    </div>    
                    {currentUser ? <h2 className="header-name">Welcome back, {currentUser.first_name}!</h2> : ""}
                    <div className="products">
                        <ul className="product-list">
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
                    {currentUser ?
                        <h1 className="create-product-button">
                            <Link to="api/products/new">Create Product Listing</Link>
                        </h1>
                    : ""}
                </div>
                <Splash/>
            </div>
        )
    }
}

export default ProductIndex;