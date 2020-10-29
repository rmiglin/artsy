import { connect } from 'react-redux';
import ProductShow from './product_show';
import { requestProduct } from '../../actions/product_actions';
import { createCartedItem } from '../../actions/cart_actions';
//import ReviewIndex from './review_index';
import { requestReviews, deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    //debugger;
    return({
    currentUserId: state.session.id,
    product: state.entities.products[ownProps.match.params.productId],
    users: state.entities.users,
    reviews: state.entities.reviews
    // reviews: Object.values(state.entities.reviews).filter((reviews) => reviews.product_id === product.id)
})
}

const mapDispatchToProps = (dispatch) => ({
    requestProduct: productId => dispatch(requestProduct(productId)),
    createCartedItem: product => dispatch(createCartedItem(product)),
    requestReviews: reviews => dispatch(requestReviews(reviews)),
    deleteReview: review => dispatch(deleteReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);