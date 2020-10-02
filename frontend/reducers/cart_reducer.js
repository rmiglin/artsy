import { RECEIVE_CARTED_ITEMS, RECEIVE_CARTED_ITEM, REMOVE_CARTED_ITEM } from '../actions/cart_actions';

const cartReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_CARTED_ITEM:
            newState = Object.assign({}, state, { [action.cartedItem.id]: action.cartedItem });
            return newState;
        case RECEIVE_CARTED_ITEMS:
            debugger;
            return action.cartedItems;
        case REMOVE_CARTED_ITEM:
            newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

export default cartReducer;