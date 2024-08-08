import { Button, Container } from "react-bootstrap";
import CountdownTimer from "./CountdownTimer";
import "./Newlunch.css";

const Newlunch = () => {
  const targetDate = new Date().setDate(new Date().getDate() + 7);

  return (
    <div className="contain">
      <Container fluid className="bg-image-container">
        <div className="text-container">
          <h1 style={{}}>pTune earbuds 3</h1>
          <h2>here & enjoy..🎧🎧</h2>
          <h3>lunching in...</h3>
          <CountdownTimer targetDate={targetDate} />
          <Button variant="outline-info" style={{ marginTop: "20px" }}>
            Notify me
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Newlunch;
