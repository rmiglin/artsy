import { connect } from 'react-redux';

import CartIndex from './cart_index';
import {
    requestCartedItems,
    deleteCartedItem
} from '../../actions/cart_actions';

const mapStateToProps = (state) => {
    //console.log(state)
    //console.log(Object.values(state.entities.carts[]))
    //console.log(state.session.id)
    //console.log(state.entities.users[state.session.id]);
    //console.log(state.entities.carts);
    //debugger
    return ({
        currentUser: state.entities.users[state.session.id],
        //cartedItems: Object.values(state.entities.carts[state.session.id])
        cartings: Object.values(state.entities.carts).filter((carts) => carts.user_id === state.session.id),
        products: state.entities.products
        // carts: state.entities.carts.carts
    })
}


const mapDispatchToProps = (dispatch) => ({
    requestCartedItems: cartedItems => dispatch(requestCartedItems()),
    deleteCartedItem: cartedItemId => dispatch(deleteCartedItem(cartedItemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIndex);