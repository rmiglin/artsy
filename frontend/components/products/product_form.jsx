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
            <div className="product-form-wrapper">
            <div className="product-form-div">
                <h1 className="form-title">{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label className="input-label">Product Name:</label>
                    <input
                        className="edit-input"
                        type="text"
                        value={this.state.product_name}
                        onChange={this.update("product_name")}
                    />
                    <label className="input-label">Price:</label>
                    <input 
                        className="edit-input"
                        type="number" 
                        value={this.state.price} 
                        onChange={this.update("price")}
                        min="0"
                    />
                    <input
                        className="photo-input" 
                        type="file" 
                        onChange={this.handleFile.bind(this)}
                    />
                    <label className="input-label">Quantity:</label>
                    <input
                        className="edit-input"
                        type="number"
                        value={this.state.quantity}
                        onChange={this.update("quantity")}
                        min="0"
                    />
                    <label className="input-label">Description:</label>
                    <textarea
                        className= "description-text-area"
                        value={this.state.description}
                        onChange={this.update("description")}
                    />
                    <input className="submit-button" type="submit" />
                </form>
            </div>
            </div>
        )
    }
}

export default ProductForm;