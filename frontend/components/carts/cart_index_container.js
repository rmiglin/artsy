import { connect } from 'react-redux';

import CartIndex from './cart_index';
import {
    requestCartedItems,
    deleteCartedItem
} from '../../actions/cart_actions';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        cartings: Object.values(state.entities.carts).filter((carts) => carts.user_id === state.session.id),
        products: state.entities.products
    })
}


const mapDispatchToProps = (dispatch) => ({
    requestCartedItems: cartedItems => dispatch(requestCartedItems()),
    deleteCartedItem: cartedItemId => dispatch(deleteCartedItem(cartedItemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIndex);