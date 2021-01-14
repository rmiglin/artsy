import React from 'react';
import ProductIndexContainer from '../products/product_index_container';
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleTest = this.handleTest.bind(this);
        this.state = {title: "", test: this.props.test};
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

    // handleTest() {
    //     debugger;
    //     return ()=> {
    //         this.setState({test : !this.state.test});
    //         console.log(`search + ${this.props.test}`);
    //     };
    // }

    render() {
        console.log(`search + ${this.state.test}`);
        return (
            <div>
                    <button
                        className="signin-submit"
                        label="test"
                        onClick={() => this.setState({test : !this.state.test})}
                    />
            <div className="search-div">

                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search for anything"
                        //onChange={this.handleChange}
                    ></input>
            </div>
            </div>
        );
    }
}

export default SearchBar;