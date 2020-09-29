import { connect } from 'react-redux';

import Greeting from './greeting';

const mapStateToProps = ({ session, entities }) => ({
    currentUser: session && session.id && entities.users[session.id]
});
const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);