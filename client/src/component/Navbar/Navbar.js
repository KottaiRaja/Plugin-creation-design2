import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.png'
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        
        <Navbar.Brand href="#home">
        <img
              src={logo}
              width="65"
              height="45"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="m-auto ml-md-3 pt-2">
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
            <NavDropdown.Item href='/general_info'>General-Info</NavDropdown.Item>
              <NavDropdown.Item href='/education'>Education</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>  
            </NavDropdown>
          </Nav>
        
            <Link to='/'><Button variant="danger">Logout</Button></Link>
          
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
    
    </>
  );
}

export default BasicExample;