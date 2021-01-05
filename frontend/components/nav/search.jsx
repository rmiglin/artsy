import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {title: ""};
    }

    handleSubmit(e){
        e.preventDefault();
        console.log("handle submit successful");
        this.props.requestProducts();
        this.setState({title: ""});
        this.props.history.push(`/search/?q=${this.state.title}`);
    }

    handleInput(field) {
        return(e) => {
            this.setState({[field]: e.target.value});
        };
    }

    render() {
        return (
            <div className="search-div">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="search" 
                        className="search-bar" 
                        placeholder="Search for items or shops" 
                        value={this.state.title}
                        onChange={this.handleInput('title')}
                        //results="0"    
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;