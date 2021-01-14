import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductIndex from './product_index';
import {
    requestProducts,
    deleteProduct
} from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
    let products = Object.values(state.entities.products);
    return({
        currentUser: state.entities.users[state.session.id],
        products,
        users: state.entities.users
    })
}

const mapDispatchToProps = (dispatch) => ({
    requestReviews: reviews => dispatch(requestReviews()),
    requestProducts: products => dispatch(requestProducts()),
    deleteProduct: productId => dispatch(deleteProduct(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);