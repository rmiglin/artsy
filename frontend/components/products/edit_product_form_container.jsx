import React from 'react';
import { connect } from 'react-redux';
import { requestProduct, updateProduct } from '../../actions/product_actions';
import ProductForm from './product_form';

const mapStateToProps = (state, ownProps) => {
    return({
    currentUser: state.entities.users[state.session.id],
    product: state.entities.products[ownProps.match.params.productId],
    photoFile: null,
    formType: 'Update Product'
    });
}

const mapDispatchToProps = (dispatch) => ({
    requestProduct: productId => dispatch(requestProduct(productId)),
    action: product => dispatch(updateProduct(product))
})

class EditProductForm extends React.Component {

    componentDidMount() {
        this.props.requestProduct(this.props.match.params.productId)
    }

    render() {
        const { action, formType, product } = this.props;
        
        if (!product) return null;
        return (
            <div>
            <ProductForm
                action={action}
                formType={formType}
                product={product} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProductForm);
