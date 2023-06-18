
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navb() {
  return (
    <Navbar className=" px-3 fixed-top navbar-transparent"  expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">{`<Kritarth/>`}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '120px' }}
            navbarScroll
          >
            <Nav.Link href="#project">Project</Nav.Link>
            <Nav.Link href="#aboutme">About</Nav.Link>
            <Nav.Link target="_blank" href="https://drive.google.com/file/d/15dLsKXxsMNm9sUBbEf-Klt-7ZBzpZpqw/view?usp=sharing">Resume</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;