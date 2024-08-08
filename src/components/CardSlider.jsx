import { Card, Carousel, Button, Container } from "react-bootstrap";
import Servicedata from "../data/Servicedata";

function CardSlider() {
    const reduceCards = (acc, cur, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) acc[groupIndex] = [];
        acc[groupIndex].push(cur);
        return acc;
      };
  return (
    <div>
    <Container className="py-5">
    <h1 className="text-center mb-4">Our Services</h1>
      <Carousel data-bs-theme="dark">
        {Servicedata.reduce(reduceCards, []).map((item, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              {item.map((item, index) => {
                return (
                  <Card key={index} style={{ width: "18rem", margin:"1rem" }}>
                    <Card.Body>
                      <Card.Title>{item.head}</Card.Title>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  </div>
  );
}

export default CardSlider;
