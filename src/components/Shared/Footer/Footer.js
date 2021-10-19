import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Footer.css'

const Footer = () => {
    const footerNavIcon = 'http://health.templines.org/wp-content/uploads/2018/07/decor-brand.png'
    return (
        <div className='footer'>
            <Container className='footer-content'>
                <div className="footer-appointment">
                    <h3 className="text-center">GET THE BEST DOCTOR HERE</h3>
                    <Nav.Link className="btn-appointment" as={HashLink} to="/home#doctors">GET AN APPOINTMENT</Nav.Link>
                </div>
                <div className="footer-nav">
                    <div className="scroll-nav">
                        <h5 className="fw-bold text-white text-primary">Manu</h5>
                        <img src={footerNavIcon} alt="" className="my-3" />
                        <Nav.Link className="text-white px-0 py-1" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-white px-0 py-1" as={HashLink} to="/home#doctors">Doctors & Services</Nav.Link>
                        <Nav.Link className="text-white px-0 py-1" as={HashLink} to="/home#reviews">Reviews</Nav.Link>
                        <Nav.Link className="text-white px-0 py-1" as={HashLink} to="/home#department">Department</Nav.Link>
                    </div>
                    <div className="route-nav ">
                        <h5 className="fw-bold text-white text-primary">Contact Us</h5>
                        <img src={footerNavIcon} alt="" className="my-3" />
                        <Nav.Link className="text-white px-0 py-1" as={HashLink} to="/about">About</Nav.Link>
                        <Nav.Link className="text-white px-0 py-1" as={HashLink} to="/contact">Contact</Nav.Link>
                        <div>
                            <i className="fab fa-facebook-square me-3"></i>
                            <i className="fab fa-twitter-square me-3"></i>
                            <i className="fab fa-instagram-square me-3"></i>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;