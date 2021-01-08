import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import { updateFilter } from '../../actions/search_actions';
import { requestProductsByProduct } from '../../actions/product_actions';

import Search from './search';

const mapStateToProps = (state, ownProps) => {
    let title = ownProps.location.search.split("=")[1];
    let products = Object.values(state.entities.products).filter((products) => products.product_name.includes(title));
    //debugger;
    return {
        products
        //{title: ownProps.location.search.split("=")};
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    //debugger;
    //let title = ownProps.location.search.split("=")[1];
    //figure this lookup out and you've got it! either a .contains or === for the title value
    
    return {
        requestProducts: () => dispatch(requestProductsByProduct())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));