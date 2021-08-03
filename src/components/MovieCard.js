import React from 'react';
import { Card } from 'react-bootstrap';
import { Rating } from '@material-ui/lab';
import '../App.css';


const MovieCard = ({movie}) => {
    return (
        <div>
           <Card className="card-movie" style={{ width: '20rem' }} >
                <Card.Img className="poster" variant="top" src={movie.posterURL} />
                <Card.Body className="movie">
                    <Card.Title><h3>{movie.title}</h3></Card.Title>  
                     <Rating name="read-only" value={movie.rating} readOnly />
                    <Card.Text><strong>{movie.type}</strong></Card.Text>
                    <Card.Text><strong>{movie.date}</strong></Card.Text>
                    <Card.Text className="description"><strong>Description:</strong>
                    <br /> {movie.description}</Card.Text>
                    
                </Card.Body>
            </Card> 
        </div>
    );
};

export default MovieCard;