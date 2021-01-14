import React from 'react';

class ProductSearch extends React.Component {
    
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

    render() {
        return (
            <div className="search-div">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search for anything"
                        onChange={this.handleChange}
                    />
            </div>
        );
    }
}