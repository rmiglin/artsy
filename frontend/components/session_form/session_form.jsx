import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            first_name: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    demoUser(e) {
        e.preventDefault();
        // this.props.loginDemoUser().then(this.props.closeModal)
        this.props.processForm({
            email: "demouser@email.com",
            password: "hunter12"
        }).then(this.props.closeModal);
    }

    render() {

        if(this.props.formType === 'Sign in'){
            return (
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <div className="register-header"><h1>Sign in</h1> {this.props.otherForm}</div>
                        <br />
                        <div className="login-form">
                            <br />
                            <label>Email address
              <input type="email"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                    />
                            </label>
                            <br />
                            <label>Password
              <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                    />
                            </label>
                            <br />
                            <input className="session-submit" type="submit" value={this.props.formType} />
                            <button className="demo-submit" onClick={(e) => { this.demoUser(e) }}>Demo User</button>
                            <div className="login-errors">{this.renderErrors()}</div>
                        </div>
                    </form>
                </div>
            );
        
        } else if (this.props.formType === 'Register'){
            return (
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <h1>Create your account</h1>
                        <h2>Registration is easy.</h2>
                        <br />
                        <div className="login-form">
                            <br />
                            <label>Email address *
              <input type="email"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                    />
                            </label>
                            <br />
                            <label>First name *
              <input type="text"
                                    value={this.state.first_name}
                                    onChange={this.update('first_name')}
                                    className="login-input"
                                    />
                            </label>
                            <br />
                            <label>Password *
              <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                    />
                            </label>
                            <br />
                            <input className="session-submit" type="submit" value={this.props.formType} />
                            <button className="demo-submit" onClick={(e) => { this.demoUser(e) }}>Demo User</button>
                            <div className="login-errors">{this.renderErrors()}</div>
                        </div>
                    </form>
                </div>
            );        
        }
    }
}

export default SessionForm;