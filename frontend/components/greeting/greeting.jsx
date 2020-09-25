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
            <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );
    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};

export default Greeting;