import { connect } from 'react-redux';
import ProductShow from './product_show';
import { requestProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
    seller: state.entities.users[ownProps.match.params.seller_id]
})

const mapDispatchToProps = (dispatch) => ({
    requestProduct: productId => dispatch(requestProduct(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);