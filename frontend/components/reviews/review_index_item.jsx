import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
    
    printStar(rating){
        let stars = [];
        for(let i = 0; i < this.props.rating; i++) {
            stars.push(<FontAwesomeIcon className="star" icon={faStar} key={i} />);
        }
        return <>{stars}</>;
    }

    render() {
        return (
            <div className="review-listing">
                <div className="review-item-div">
                    <div className="stars-div">
                        {this.printStar(this.props.rating)}
                    </div>
                    <h2 className="comment">"{this.props.comment}"</h2>
                </div>
            </div>
        )
    }

}

export default ReviewIndexItem;