import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
    render() {
        //debugger;
        //debugger;
        return (
            <div className="review-listing">
                <div className="review-item-div">
                    <h1>{this.props.rating}</h1>
                    <h2>{this.props.comment}</h2>
                </div>
            </div>
        )
    }
}

export default ReviewIndexItem;