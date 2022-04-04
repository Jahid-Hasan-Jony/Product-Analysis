import React from 'react';
import Card from 'react-bootstrap/Card';

const ReviewCard = (props) => {
    const { name, rating, img, review } = props.data;
    return (
        <div className='col-4 py-2'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${img}`} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title><h6>{`Rating : ${rating}`}</h6></Card.Title>
                    <Card.Text>
                        {review}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ReviewCard;