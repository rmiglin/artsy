import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

import {
    RECEIVE_CARTED_ITEMS,
    RECEIVE_CARTED_ITEM,
    REMOVE_CARTED_ITEM
} from '../actions/cart_actions';

const _nullUser = {
    id: null
};

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        // case RECEIVE_CARTED_ITEMS: 
        //     return action.cartedItems;
        // case RECEIVE_CARTED_ITEM:
        //     newState = Object.assign({}, state, { [action.cartedItem.id]: action.cartedItem });
        //     return newState;
        // case REMOVE_CARTED_ITEM:
        //     newState = Object.assign({}, state);
        //     delete newState[action.cartedItem_Id];
        //     return newState;        
        default:
            return state;
    }
};

export default sessionReducer;