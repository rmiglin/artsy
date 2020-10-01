import React from 'react';

class ProductForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.product;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.state.photoFile = null;
        this.state.photoUrl = null;
    }

    update(field) {
        return (e => this.setState({ [field]: e.currentTarget.value }));
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('product[product_name]', this.state.product_name);
        formData.append('product[price]', this.state.price);
        formData.append('product[quantity]', this.state.quantity);
        formData.append('product[description]', this.state.description);
        if (this.state.photoFile) {

            formData.append('product[photo]', this.state.photoFile);
        }
        if(this.props.formType === "Add Product"){
            $.ajax({
                url: `/api/users/${this.state.seller_id}/products`,
                method: 'POST',
                data: formData,
                contentType: false,
                processData: false
            }).then(
                (response) => console.log(response.message),
                (response) => {
                    console.log(response.responseJSON)
                }
            );
        } else {
            $.ajax({
                url: `/api/products/${this.state.id}`,
                method: 'PATCH',
                data: formData,
                contentType: false,
                processData: false
            }).then(
                (response) => console.log(response.message),
                (response) => {
                    console.log(response.responseJSON)
                }
            );        
        }
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result});
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    render() {
        console.log(this.state);
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl}/> : null;
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
                        onChange={this.handleFile}
                    />
                    {preview}

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