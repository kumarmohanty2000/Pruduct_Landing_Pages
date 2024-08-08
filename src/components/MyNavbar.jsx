import { Navbar, Nav, Container } from "react-bootstrap";

function MyNavbar({section1,section2,section3,section4}) {
  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="top" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">{section1}</Navbar.Brand>
        <Nav className="justify-content-end">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href="#services">{section2}</Nav.Link>
            <Nav.Link href="#testimonials">{section3}</Nav.Link>
            <Nav.Link href="#contact">{section4}</Nav.Link>
        </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
