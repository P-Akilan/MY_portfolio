import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaHome, FaGraduationCap, FaBriefcase, FaCogs, FaImages, FaEnvelope } from 'react-icons/fa';  // Import the icons
import AIcon from './../Others/Atransparent.gif';

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div>
      <Navbar expanded={showNav} collapseOnSelect key="lg" expand="lg" className='d-flex justify-content-around' id='Nav_bar'>
        <Container fluid>
          <Navbar.Brand href="#" className=''>
            <img src={AIcon} alt='aicon' height={50} width={50} />
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setShowNav(!showNav)} aria-controls={`offcanvasNavbar-expand-xxl`} />
          <Navbar.Offcanvas
            show={showNav}
            onHide={() => setShowNav(false)}
            id={`offcanvasNavbar-expand-xxl`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                AKILAN.P
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {/* No need to call handleLinkClick() anymore */}
                <Nav.Link as={Link} to="/home">
                  <FaHome size={30} className="nav-icon" /> <h5 className='nav-head'>Home</h5>
                </Nav.Link>
                <Nav.Link as={Link} to="/education">
                  <FaGraduationCap size={30} className="nav-icon" /> <h5 className='nav-head'>Education</h5>
                </Nav.Link>
                <Nav.Link as={Link} to="/experience">
                  <FaBriefcase size={30} className="nav-icon" /> <h5 className='nav-head'>Experience</h5>
                </Nav.Link>
                <Nav.Link as={Link} to="/skills">
                  <FaCogs size={30} className="nav-icon" /> <h5 className='nav-head'>Skills</h5>
                </Nav.Link>
                <Nav.Link as={Link} to="/myworks">
                  <FaImages size={30} className="nav-icon" /> <h5 className='nav-head'>My Works</h5>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <FaEnvelope size={30} className="nav-icon" /> <h5 className='nav-head'>Contact</h5>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
