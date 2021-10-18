import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="navBar">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Patient Health Care" className="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#doctors">Doctors & Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#reviews">Reviews</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#department">Department</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#experts">About</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#experts">Contant</Nav.Link>
                    {/* {
                        user.email ?
                            <Button variant="info" onClick={logOut}>Logout</Button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    } */}
                    {/* <Navbar.Text>
                        {user?.displayName}
                    </Navbar.Text> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;