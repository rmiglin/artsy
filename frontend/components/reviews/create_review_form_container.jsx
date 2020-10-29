import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions'; 

const mapStateToProps = (state) => ({
    review: {
        product_id: state.entities.products[ownProps.match.params.productId],
        author_id: state.session.id,
        rating: 0,
        comment: ''
    },
    formType: "Add Review"
})

const mapDispatchToProps = dispatch => ({
    action: review => dispatch(createReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);