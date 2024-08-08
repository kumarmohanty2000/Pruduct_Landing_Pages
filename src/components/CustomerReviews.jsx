import  { useState } from 'react';
import { Carousel,Container, Row, Col, Card, Button } from 'react-bootstrap';

const initialReviews = [
  {
    id: 1,
    name: 'Alice Johnson',
    review: 'Great product, highly recommend!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Bob Smith',
    review: 'Very satisfied with the purchase.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Hiu Lihoif',
    review: 'Very satisfied with the purchase.',
    rating: 4,
  },
  {
    id: 4,
    name: 'Pop Luis',
    review: 'Very satisfied with the purchase.',
    rating: 4,
  },
  {
    id: 5,
    name: 'Luis Pop',
    review: 'Very satisfied with the purchase.',
    rating: 2,
  }
];

function CustomerReviews(){

    const reduceCards = (acc, cur, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) acc[groupIndex] = [];
        acc[groupIndex].push(cur);
        return acc;
      };
  return (
    <Container className="py-5">
    <h1 className="text-center mb-4">Costumer Reviews</h1>
      <Carousel data-bs-theme="dark-light">
        {initialReviews.reduce(reduceCards, []).map((item, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center" >
              {item.map((item, index) => {
                return (
                <Card key={index}className="shadow-sm" style={{margin:"5px"}}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.review}</Card.Text>
                <Card.Footer>Rating: {item.rating} / 5</Card.Footer>
              </Card.Body>
            </Card>
                );
              })}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default CustomerReviews;
