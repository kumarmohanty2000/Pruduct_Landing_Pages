import {
  Card, Carousel,
  Container
} from "react-bootstrap";
import Servicedata from "../data/Servicedata";

export default function Oursevices() {
    const reduceData = (acc, cur, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) acc[groupIndex] = [];
        acc[groupIndex].push(cur);
        return acc;
      };
  return (
    <div >
    <Container className="py-5" >
    <h1 className="text-center mb-4">Our Services</h1>
      <Carousel data-bs-theme="" >
        {Servicedata.reduce(reduceData, []).map((item, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              {item.map((item, index) => {
                return (
                  <Card key={index} style={{ heigh:"30rem",width: "30rem", margin:"1rem", maxWidth:"40vw"}} >
                    <Card.Body>
                      <Card.Title>{item.head}</Card.Title>
                      <Card.Text>{item.body}</Card.Text>
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


    // <Container className="py-5">
    //   <h1 className="text-center mb-4">Our Services</h1>
    //   <Row>
    //     {Servicedata.map((product) => (
          
    //         <Col key={product.id} sm={12} md={6} lg={4} className="mb-3">
    //           <Card>
    //             <Card.Body>
    //               <Card.Title>{product.head}</Card.Title>
    //               <Card.Text>{product.body}</Card.Text>
    //             </Card.Body>
    //           </Card>
              
    //         </Col>
            
             
    //     ))}
    //     <Button variant="secondary" size="sm">{'>'}</Button>
       
    //   </Row>
      
    // </Container>
  );
}
