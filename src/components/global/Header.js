import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useLocation } from 'react-router-dom';

import logo from '../../assets/img/TE7logo.png';

function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header id="header" className={`${isSticky ? 'sticky' : ''}`}>
            <Navbar bg="light" expand="lg" fixed={isSticky ? "top" : "static"}>
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to="/">
                            <img src={logo} alt="logo" style={{ maxWidth: '150px', maxHeight: '50px', borderRadius: '20px' }} />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className={`nav-link ${location.pathname === '/' ? 'text-danger' : ''}`} to="/">Home</NavLink>
                            <NavLink className={`nav-link ${location.pathname === '/job-check' ? 'text-danger' : ''}`} to="/job-check">Job Check</NavLink>
                            <NavLink className={`nav-link ${location.pathname === '/industry-analysis' ? 'text-danger' : ''}`} to="/industry-analysis">Industry Analysis</NavLink>
                            <NavLink className={`nav-link ${location.pathname === '/resume-check' ? 'text-danger' : ''}`} to="/resume-check">Resume Check</NavLink>
                            <NavLink className={`nav-link ${location.pathname === '/super-plan' ? 'text-danger' : ''}`} to="/super-plan">Super Plan</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
