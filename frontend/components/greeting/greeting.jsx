import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('Sign in')}>Sign in</button>
      &nbsp;or&nbsp;
            <button onClick={() => openModal('Register')}>Register</button>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Welcome, {currentUser.first_name}!</h2>
        </hgroup>
    );
    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            ""
    );
};

export default Greeting;