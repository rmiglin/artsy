import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductIndex from './product_index';
import {
    requestProducts,
    deleteProduct
} from '../../actions/product_actions';
import { requestProductsByProduct} from '../../actions/product_actions';

import Search from '../nav/search';

const mapStateToProps = (state, ownProps) => {
    //console.log(state)
    //let title = ownProps.location.search.split("=")[1];
    let products = Object.values(state.entities.products);
    // debugger;
    return({
        currentUser: state.entities.users[state.session.id],
        products,
        //products: Object.values(state.entities.products),
        users: state.entities.users
    })
}

const mapDispatchToProps = (dispatch) => ({
    requestReviews: reviews => dispatch(requestReviews()),
    requestProducts: products => dispatch(requestProducts()),
    deleteProduct: productId => dispatch(deleteProduct(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));