import * as CartAPIUtil from '../util/cart_api_util';

export const RECEIVE_CARTED_ITEMS = 'RECEIVE_CARTED_ITEMS';
export const RECEIVE_CARTED_ITEM = 'RECEIVE_CARTED_ITEM';
export const REMOVE_CARTED_ITEM = 'REMOVE_CARTED_ITEM';

const receiveCartedItems = (cartedItems) => {
    debugger;
    return {
        type: RECEIVE_CARTED_ITEMS,
        cartedItems
    };
};

const receiveCartedItem = (cartedItem) => {
    return {
        type: RECEIVE_CARTED_ITEM,
        cartedItem
    };
};

const removeCartedItem = (cartedItem_Id) => {
    return {
        type: REMOVE_CARTED_ITEM,
        cartedItem_Id
    };
};

export const createCartedItem = (cartedItem) => {
    return (dispatch) => {
        return CartAPIUtil.createCartedItem(cartedItem).then((cartedItem) => {
            return dispatch(receiveCartedItem(cartedItem));
        },
            (errorObj) => {
                console.log(errorObj);
            })
    }
}

export const requestCartedItems = () => {
    return (dispatch) => {
        return CartAPIUtil.fetchCartedItems().then(cartedItems => {
            return dispatch(receiveCartedItems(cartedItems));
        })
    }
}

export const deleteCartedItem = (cartedItem_Id) => {
    return (dispatch) => {
        return CartAPIUtil.deleteCartedItem(cartedItem_Id).then(cartedItem => {
            return dispatch(removeCartedItem(cartedItem_Id));
        })
    }
}
