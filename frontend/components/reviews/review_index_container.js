import { connect } from 'react-redux';

import ReviewIndex from './review_index';
import { requestReviews, deleteReview } from '../../actions/review_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    //console.log(state.entities.reviews);
    //console.log(Object.values(state.entities.reviews));
    //console.log(state.session.id)
    //console.log(state.entities.users[state.session.id]);
    //console.log(state.entities.carts);
    debugger;
    return ({
        currentUser: state.entities.users[state.session.id],
        product: state.entities.products[ownProps.match.params.productId],
        reviews: Object.values(state.entities.reviews).filter((review) => review.product_id === parseInt(ownProps.match.params.productId)),
        products: state.entities.products,
        users: state.entities.users
    })
}


const mapDispatchToProps = (dispatch) => ({
    requestReviews: () => dispatch(requestReviews()),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex));