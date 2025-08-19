import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { AuthContext } from '../context/AuthContext'

const AppNavbar = () => {
  const { logout } = useContext(AuthContext)
  
  return (
    <Navbar expand="md" sticky="top" className="custom-navbar " collapseOnSelect>
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/dashboard" className="text-light fw-bold">
          <i className="fas fa-bolt me-2"></i>PixelSqueeze
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navMenu" className="navbar-dark" />
        <Navbar.Collapse id="navMenu">
          <Nav className="ms-auto align-items-center gap-3">
            {['Home', 'About', 'Resize', 'Convert', 'Compress'].map((label) => (
              <Nav.Link
                key={label}
                as={NavLink}
                to={`/${label.toLowerCase()}`}
                className="text-light"
              >
                {label}
              </Nav.Link>
            ))}
            {/* <button className="btn btn-outline-light " >
              Download 
            </button> */}
            <NavLink to='/seeList' className="btn btn-outline-light">See List</NavLink>
            <button className="btn  text-dark bg-light" onClick={logout}>
              Logout
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
