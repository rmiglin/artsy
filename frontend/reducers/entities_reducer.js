import { combineReducers } from 'redux';

//more to add later
import users from './users_reducer';
import products from './products_reducer';
import carts from './cart_reducer'

export default combineReducers({
    users,
    products,
    carts
});