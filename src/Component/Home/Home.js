import React from 'react';
import useReviews from '../Hooks/useReviews';
import ReviewCard from '../Reviews/ReviewCard';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const [reviews] = useReviews()
    return (
        <div className='container'>
            <div className='row py-5'>
                <div className='col-6'>
                    <h1>Pentax K-m Digital SLR</h1>
                    <h3>The newest entry class DSLR to hit the streets</h3>
                    <p>With each DSLR released, Pentax have tried to push boundaries in one way or another such as large resolution on the K20D and dust alert on the K200D. The K-m has all the features of the now middle of the range model but it's in a much smaller housing. Despite this shrinkage in dimensions thanks to Pentax' downsizing technology, the sensor is still the same size and resolution as the K200D and matches the dimensions of the Canon EOS 1000D while being slightly bigger than the Nikon D60.</p>
                </div>
                <div className='col-6 d-flex justify-content-center align-items-center'>
                    <img src='https://www.ephotozine.com/articles/Pentax-Km-10820/images/pentax_km_frontTM.jpg' />
                </div>
            </div>
            <h1 className='text-center py-2'>Review</h1>
            <div className='row d-flex'>
                {reviews.slice(-3).map(review => <ReviewCard key={review.id} data={review} />)}
            </div>
            <div className='text-center Custom-Button'>

                <Link to='/reviews'>See All Reviews</Link>
            </div>

        </div>
    );
};

export default Home;