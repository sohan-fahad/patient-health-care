import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState()
    useEffect(() => {
        fetch("/servicesDB.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container className='services' id="services">
            <h1 className="service-title fw-bold text-center mb-3">Welcome to <span className="global-color1">The Patient</span> <span className="global-color2">Health Care</span></h1>
            <p className='title-para text-center'>We Provide You The Best Services With Best Offer</p>
            <div className="service-card">
                {
                    services?.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </Container>
    );
};

export default Services;