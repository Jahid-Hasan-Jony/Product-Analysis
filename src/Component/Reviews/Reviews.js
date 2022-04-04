import React from 'react';
import useReviews from '../Hooks/useReviews';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className='container'>
            <div className='row d-flex'>
                {reviews.map(review => <ReviewCard key={review.id} data={review} />)}
            </div>


        </div>
    );
};

export default Reviews;