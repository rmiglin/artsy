import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews: reviews
    };
};

const receiveReview = (payload) => {
    return {
        type: RECEIVE_REVIEW,
        review: payload.review
    };
};

const removeReview = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    };
};

export const createReview = (review) => {
    return (dispatch) => {
        return ReviewAPIUtil.createReview(review).then((review) => {
            return dispatch(receiveReview(review));
        },
        (errorObj) => {
            console.log(errorObj);
        })
    }
}

export const requestReviews = () => {
    return (dispatch) => {
        return ReviewAPIUtil.fetchReviews().then(reviews => {
            return dispatch(receiveReviews(reviews));
        })
    }
}

export const deleteReview = (reviewId) => {
    return (dispatch) => {
        return ReviewAPIUtil.deleteReview(reviewId).then(review => {
            return dispatch(removeReview(reviewId));
        })
    }
}