import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    // const description = service?.description.slice(0, 70)
    const {description, img, name, fee, id, machine, Duration} = service
    return (
        <Container>
            <div className="text-center service">
                <div className="service-details-img">
                    <img src={img} alt="" className="img-fluid " />
                </div>
                <h4 className="mb-0 mt-3 global-color1">{name}</h4>
                <p className="mb-0 global-color2">Time Will Take: {Duration}</p>
                <p className="mb-1">{machine}</p>
                <p className="mb-1">{description.slice(0, 70)}</p>
                <h5 className="fw-bold">Checkup Fee: {fee}৳</h5>
                <Link to={`/servicedetails/${service?.id}`}>
                    <button className="btn-details">Details</button>
                </Link>
            </div>
        </Container>
    );
};

export default Service;