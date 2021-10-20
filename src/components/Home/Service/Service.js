import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    return (
        <Container>
            <div className="text-center service">
                <img src={service?.img} alt="" className="w-100 img-fluid doctor-img" />
                <h4 className="mb-0 mt-3 global-color1">{service?.name}</h4>
                <p className="mb-0 global-color2">Time Will Take: {service?.Duration}</p>
                <p className="mb-1">{service?.machine}</p>
                <h5 className="fw-bold">Checkup Fee: {service?.fee}৳</h5>
                <Link to={`/servicedetails/${service?.id}`}>
                    <button className="btn-details">Details</button>
                </Link>
            </div>
        </Container>
    );
};

export default Service;