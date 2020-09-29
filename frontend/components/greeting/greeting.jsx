import React from 'react';

const Greeting = ({ currentUser, logout }) => {

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