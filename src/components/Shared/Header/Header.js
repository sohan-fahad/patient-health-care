import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="navBar">
            <Container>
                <Navbar.Brand as={HashLink} to="/">
                    <img src={logo} alt="Patient Health Care" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#healthCare">Health Care</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#department">Department</Nav.Link>
                    <Nav.Link as={HashLink} to="/about">About</Nav.Link>
                    <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
                    {user.email ? <Nav.Link as={Link} className="btn-light text-dark me-2" to="/login" onClick={logOut}>Logout</Nav.Link>
                        :
                        <Nav.Link as={Link} className="btn-light text-dark me-2" to="/login">Login</Nav.Link>
                    }
                    <Navbar.Text>
                        {user?.email && user.displayName}
                    </Navbar.Text>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;