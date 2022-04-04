import React from 'react';
import useReviews from '../Hooks/useReviews';
import ReviewCard from '../Reviews/ReviewCard';

const Home = () => {
    const [reviews] = useReviews()
    return (
        <div className='container'>
            <h1 className='text-center py-2'>Review</h1>
            <div className='row d-flex'>
                {reviews.slice(-3).map(review => <ReviewCard key={review.id} data={review} />)}
            </div>
        </div>
    );
};

export default Home;