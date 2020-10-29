import { connect } from 'react-redux';

import ReviewIndex from './review_index';
import { requestReviews, deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state) => {
    //console.log(state)
    //console.log(Object.values(state.entities.carts[]))
    //console.log(state.session.id)
    //console.log(state.entities.users[state.session.id]);
    //console.log(state.entities.carts);
    //debugger
    return ({
        currentUser: state.entities.users[state.session.id],
        product: state.entities.products[ownProps.match.params.productId],
        reviews: Object.values(state.entities.reviews).filter((reviews) => reviews.product_id === product.id),
        products: state.entities.products
    })
}


const mapDispatchToProps = (dispatch) => ({
    requestReviews: reviews => dispatch(requestReviews(reviews)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);