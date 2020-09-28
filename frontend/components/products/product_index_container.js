import { connect } from 'react-redux';

import ProductIndex from './product_index';
import {
    requestProducts,
    deleteProduct
} from '../../actions/product_actions';

const mapStateToProps = (state) => {
    //console.log(state)
    return({
        currentUser: state.entities.users[state.session.id],
        products: Object.values(state.entities.products)
    })
}

const mapDispatchToProps = (dispatch) => ({
    requestProducts: products => dispatch(requestProducts()),
    deleteProduct: productId => dispatch(deleteProduct(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);