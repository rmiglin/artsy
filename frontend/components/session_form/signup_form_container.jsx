import { connect } from 'react-redux';
import React from 'react';
import { login, signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { loginDemoUser } from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Register',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('Sign in'))}>
                Sign in
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        loginDemoUser: () => dispatch(loginDemoUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);