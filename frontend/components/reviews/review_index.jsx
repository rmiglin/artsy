import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { Link } from 'react-router-dom';

import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.requestReviews();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.reviews != this.props.reviews){
            this.props.requestReviews();
        }
    }

    averageReview(){
        let star_total = 0;
        this.props.reviews.forEach((review) => star_total += review.rating);
        let star_avg = star_total/this.props.reviews.length;
        return Math.ceil(star_avg);
    }

    printStar(rating){
        let stars = [];
        for(let i = 0; i < rating; i++) {
            stars.push(<FontAwesomeIcon className="star" icon={faStar} key={i} />);
        }
        return <>{stars}</>;
    }

    render() {
        if(!this.props.reviews){
            return null;
        }
        const {users} = this.props.users;
        return (
            <div className="user-review-div">
                <div className="review-div">
                    <div className="avg-review-div">
                        <h1 className="reviews-header">{this.props.reviews.length} reviews</h1>
                        {/* <h1>{this.averageReview()}</h1> */}
                        <div className="stars-div">
                            <h1 className="avg-stars-array">{this.printStar(this.averageReview())}</h1>
                        </div>
                    </div>
                    <ul className="review-list">
                        {
                            this.props.reviews.map((review) => (
                                <ReviewIndexItem 
                                author={this.props.users[review.author_id].first_name}
                                author_id={review.author_id}
                                product_id={review.product_id}
                                rating={review.rating}
                                comment={review.comment}
                                key={review.id}
                            />))
                        }
                    </ul>
                </div>
            </div>
        )
        
    }
}

export default ReviewIndex;