import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {  styled } from '@mui/system';

const StyledNavbar = styled(Navbar)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  transition: 'background-color 0.5s, box-shadow 0.5s',
  padding: '20px 110px 20px 110px',
});

const StyledBrand = styled(Navbar.Brand)({
  fontSize: '35px',
  color: 'white',
  transition: 'color 0.5s',
});


const NavScrollExample = () => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.backgroundColor = scrollY > 50 ? '#E5EAFD' : 'transparent';
      navbar.style.color = scrollY > 50 ? '#211f8d' : '#ffffff';
      navbar.style.boxShadow =
        scrollY > 50 ? '0 2px 4px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.1)' : 'none';
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledNavbar expand="lg" sticky="top" style={{ zIndex: 1000 }}>
      <Container fluid>
        <StyledBrand href="#">MindTrack</StyledBrand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <NavDropdown title="Sentiment Analysis" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Explore</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Enterprise Insights</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default NavScrollExample;


