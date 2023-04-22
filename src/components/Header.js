import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

import logo from '../assets/img/TE7logo.png';

function Header() {
    return (
        <header id="header">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to="/">
                            <img src={logo} alt="logo" style={{ maxWidth: '150px', maxHeight: '50px', borderRadius: '20px' }} />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/job-check">Job Check</NavLink>
                            <NavLink className="nav-link" to="/industry-analysis">Industry Analysis</NavLink>
                            <NavLink className="nav-link" to="/resume-check">Resume Check</NavLink>
                            <NavLink className="nav-link" to="/super-plan">Super Plan</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
