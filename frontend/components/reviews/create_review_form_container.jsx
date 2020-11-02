import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions'; 
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    review: {
        product_id: parseInt(ownProps.match.params.productId),
        author_id: state.session.id,
        rating: 0,
        comment: ''
    }
})

const mapDispatchToProps = dispatch => ({
    action: review => dispatch(createReview(review))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));