import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS, REMOVE_PRODUCT} from '../actions/product_actions';

const productReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_PRODUCT:
            newState = Object.assign({}, state, {[action.product.id]: action.product});
            return newState;
        case RECEIVE_PRODUCTS:
            return action.products;
        case REMOVE_PRODUCT:
            newState = Object.assign({}, state);
            delete newState[action.id];    
            return newState;
        default:
            return state;
    }
};

export default productReducer;