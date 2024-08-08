import { Container,Row, Col } from "react-bootstrap"
export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
            <Container>
                <Row>
                    <Col>
                        <p>&copy; {new Date().getFullYear()} pTunes. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
  )
}
