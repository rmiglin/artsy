import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Search from './search';

const mapStateToProps = (state, ownProps) => {

    return {

    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    
    return {

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));