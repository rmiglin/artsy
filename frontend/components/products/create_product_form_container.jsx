import { connect } from 'react-redux';
import ProductForm from './product_form';
import { createProduct } from '../../actions/product_actions'; 

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    product: {
        product_name: '',
        seller_id: state.session.id,
        price: 0,
        description: '', 
        quantity: 0
    },
    formType: "Add Product"
})

const mapDispatchToProps = dispatch => ({
    action: product => dispatch(createProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);