import { connect } from 'react-redux';
import ProductShow from './product_show';
import { requestProduct } from '../../actions/product_actions';
import { createCartedItem } from '../../actions/cart_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUserId: state.session.id,
    product: state.entities.products[ownProps.match.params.productId],
    users: state.entities.users
})

const mapDispatchToProps = (dispatch) => ({
    requestProduct: productId => dispatch(requestProduct(productId)),
    createCartedItem: product => dispatch(createCartedItem(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);