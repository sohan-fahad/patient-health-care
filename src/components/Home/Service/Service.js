import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    return (
        <Container>
            <div className="text-center service">
                <div className="service-img">
                    <img src={service?.img} alt="" className="w-100 img-fluid" />
                </div>
                <h4 className="mb-0 mt-3 global-color1">{service?.name}</h4>
                <p className="mb-0 global-color2">Time: {service?.Duration}</p>
                <h5 className="fw-bold">Checkup Fee: {service?.fee}৳</h5>
                <Link to={`/details/${service?.id}`}>
                    <button className="btn-details">Details</button>
                </Link>
            </div>
        </Container>
    );
};

export default Service;