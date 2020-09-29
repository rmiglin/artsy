import React from 'react';

class ProductForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.product;
        this.state["photoFile"] = null;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e => this.setState({ [field]: e.currentTarget.value }));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    handleFile(e) {
        e.preventDefault();
        this.setState({photoFile: e.currentTarget.files[0]});
    }

    render() {
        //debugger;
        return (
            <div>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Product Name:</label>
                    <input
                        type="text"
                        value={this.state.product_name}
                        onChange={this.update("product_name")}
                    />
                    <label>Price:</label>
                    <input 
                        type="number" 
                        value={this.state.price} 
                        onChange={this.update("price")}
                        min="0"
                    />
                    <input type="file" 
                        onChange={this.handleFile.bind(this)}
                    />
                    <label>Quantity:</label>
                    <input
                        type="number"
                        value={this.state.quantity}
                        onChange={this.update("quantity")}
                        min="0"
                    />
                    <label>Description:</label>
                    <textarea
                        value={this.state.description}
                        onChange={this.update("description")}
                    />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default ProductForm;