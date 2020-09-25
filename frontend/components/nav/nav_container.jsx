import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import Nav from './nav';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.id),
    first_name: state.first_name
});

const mapDispatchToProps = dispatch => ({
    sessionModal: (
            <button className="signin-submit" onClick={() => dispatch(openModal('Sign in'))}>
                Sign in
            </button>
        ),
    closeModal: () => dispatch(closeModal()),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);