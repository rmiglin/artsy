import { connect } from 'react-redux';

import ProductIndex from './product_index';
import {
    requestProducts,
    deleteProduct
} from '../../actions/product_actions';

const mapStateToProps = (state) => {
    //console.log(state)
    return({
        currentUser: state.entities.users[state.session.id],
        products: Object.values(state.entities.products),
        reviews: Object.values(state.entities.reviews).filter((reviews) => reviews.product_id === product.id),
        users: state.entities.users
    })
}

const mapDispatchToProps = (dispatch) => ({
    requestReviews: reviews => dispatch(requestReviews()),
    requestProducts: products => dispatch(requestProducts()),
    deleteProduct: productId => dispatch(deleteProduct(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);