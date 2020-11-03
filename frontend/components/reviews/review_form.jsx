import React from 'react';

class ReviewForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.review;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentWillReceiveProps() {
    //     this.setState(this.props.review);
    // }

    // componentDidUpdate() {
    //     if (this.prevState !== this.state) {
    //         this.setState(this.props.review)
    //     }
    // }

    // componentDidUpdate(prevProps){
    //     if(prevProps.loggedIn !== this.props.loggedIn){
    //         this.userStatus();
    //     }
    // }

    update(field) {
        if (field==="rating") {
            return (e => this.setState({ [field]: parseInt(e.currentTarget.value) }));
        }
        return (e => this.setState({ [field]: e.currentTarget.value }));
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('review[product_id]', this.state.product_id);
        formData.append('review[author_id]', this.state.author_id);
        formData.append('review[rating]', this.state.rating);
        formData.append('review[comment]', this.state.comment);
        $.ajax({
            url: `/api/users/${this.state.author_id}/reviews`,
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        }).then(
            (response) => console.log(response.message),
            (response) => {
                console.log(response.responseJSON)
            }
        );
        //this.setState(this.state)
    }

    render() {
        //console.log(this.state);
        //debugger;
        return (
            <div className="review-form-wrapper">
                <div className="review-form-div">
                    <h1 className="form-title">Leave Review</h1>
                    <div className="review-form-fields">
                        <form className="review-form-fields" onSubmit={this.handleSubmit}>
                            <label className="input-label">Rating:</label>
                            <input
                                className="edit-input"
                                type="number"
                                value={this.state.rating}
                                onChange={this.update("rating")}
                                step="1"
                                min="1"
                                max="5"
                            />
                            <label className="input-label">Comment:</label>
                            <input 
                                className="edit-input"
                                type="text" 
                                value={this.state.comment} 
                                onChange={this.update("comment")}  
                            />
                            <input className="submit-button" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewForm;