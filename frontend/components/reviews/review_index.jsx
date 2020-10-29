import React from 'react';
import { Link } from 'react-router-dom';

import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

    componentDidMount() {
        this.props.requestReviews();
    }

    render() {
        if(!this.props.reviews){
            return null;
        }
        debugger;
        //const {products} = this.props;
        return (
            <div className="user-review-div">
                <div className="review-div">
                    <ul className="review-list">
                        {
                            //cartings.map((cartedItem) => (<>{products[cartedItem.product_id].product_name}</>))
                            this.props.reviews.map((review) => (<ReviewIndexItem 
                                //product_name={products[cartedItem.product_id].product_name}
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