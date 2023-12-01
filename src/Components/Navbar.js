// import React from 'react';
// import { useScrollTrigger, AppBar, Toolbar, Typography } from '@mui/material';
// import { styled } from '@mui/system';

// const StyledBrand = styled(Typography)({
//   fontSize: '35px',
//   padding: '40px 20px 20px 110px',
//   color: 'white',
// });

// const ElevationScroll = ({ children }) => {
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//     style: {
//       backgroundColor: trigger ? 'radial-gradient(circle, #415eb6 0%, #211f8d 54%, #020024 100%)' : 'transparent', 
//       transition: 'background-color 0.5s', 
//       boxShadow: trigger ? '0 2px 4px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.1)' : 'none',
//     },
//   });
// };

// const Navbar = () => {
//   return (
//     <ElevationScroll>
//       <AppBar>
//         <Toolbar>
//           <StyledBrand variant="h1">
//             MindTrack
//           </StyledBrand>
//           {/* Add more components as needed */}
//         </Toolbar>
//       </AppBar>
//     </ElevationScroll>
//   );
// };

// export default Navbar;

import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
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
});

const StyleDropDown = styled(NavDropdown)({

});

const NavScrollExample = () => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.backgroundColor = scrollY > 50 ? '#E5EAFD' : 'transparent';
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <StyleDropDown>
              
            </StyleDropDown>
            <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Disabled Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default NavScrollExample;


