import { Avatar } from '@mui/material';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from 'react-router-dom';
import NetflixLogo from '../../atoms/NetflixLogo/Index';

function BasicExample() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      navigate(path);
    }
  return (
    <Navbar collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark" className="header">
    <Container>
      <Navbar.Brand><NetflixLogo/></Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link><Link to="/catalogo" style={{color: '#FFFFFF8C', textDecoration: 'none'}}>Home</Link></Nav.Link>
          <Nav.Link>Filmes</Nav.Link>
          <Nav.Link>Séries</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>Usuário3306</Nav.Link>
          <Avatar alt="Remy Sharp" src="" />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default BasicExample;