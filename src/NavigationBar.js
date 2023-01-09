import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="bg-secondary" variant="light" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img src={require("./image/logo.png")} width="200" height="100" alt="" />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            
              <big><Nav.Link href="#aboutus"><b>About Us</b> </Nav.Link></big>
              
              <big><Nav.Link href="https://www.domyshoot.com/pricing"><b>Pricing</b></Nav.Link></big>
              
            </Nav>
            
            <Nav>
            <button type="button" class="btn btn-outline-danger"> <Nav.Link href="https://app.domyshoot.com/dashboard/home"><b>Login</b></Nav.Link></button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
