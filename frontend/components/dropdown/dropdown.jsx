import React from 'react';

class ClickDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleBlur(e) {
        this.setState({ show: false })
    }
    handleClick() {
        this.setState({ show: !this.state.show })
    }
    render() {
        return (
            <div>
                <button
                    style={{ position: 'relative' }}
                    onBlur={this.handleBlur}
                    onClick={this.handleClick}
                >
                    Click for Dropdown
            {this.state.show ? (
                        <ul
                            onClick={e => e.stopPropagation()}
                            style={{ position: 'absolute', top: '100%' }}
                        >
                            <li>Click this</li>
                            <li>Click this too</li>
                            <li>Or click this</li>
                        </ul>
                    ) : null}
                </button>
            </div>
        )
    }
}

export default ClickDropdown;