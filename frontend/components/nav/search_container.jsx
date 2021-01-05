import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import { updateFilter } from '../../actions/search_actions';
import { requestProductsByProduct } from '../../actions/product_actions';

import Search from './search';

const mapStateToProps = (state, ownProps) => {
    let filter = {title: ownProps.location.search.split("=")[1]};
    debugger;
    return {
        filter
        //{title: ownProps.location.search.split("=")};
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        requestProducts: () => dispatch(requestProductsByProduct())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));