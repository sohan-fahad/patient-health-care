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
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Patient Health Care" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#doctors&services">Doctors & Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#reviews">Reviews</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#department">Department</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#experts">About</Nav.Link>
                    <Nav.Link as={HashLink} to="/Contact">Contact</Nav.Link>
                    {user.email ? <Nav.Link as={Link} className="btn-light text-dark me-2" to="/home" onClick={logOut}>Logout</Nav.Link>
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