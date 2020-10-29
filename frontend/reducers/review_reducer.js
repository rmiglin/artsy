import { RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW} from '../actions/review_actions';

const reviewReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_REVIEW:
            newState = Object.assign({}, state, {[action.review.id]: action.review});
            return newState;
        case RECEIVE_REVIEWS:
            return action.reviews;
        case REMOVE_REVIEW:
            newState = Object.assign({}, state);
            delete newState[action.id];    
            return newState;
        default:
            return state;
    }
};

export default reviewReducer;