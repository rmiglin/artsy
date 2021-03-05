import React from 'react';
import ProductIndexContainer from '../products/product_index_container';
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.setState();
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

                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search for anything"
                    ></input>
            </div>
        );
    }
}

export default SearchBar;