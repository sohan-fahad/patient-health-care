import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { serviceId } = useParams()
    const [services, setServices] = useState()
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/sohan-fahad/fakeDB/main/servicesDB.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const service = services?.find(doctor => doctor.id == serviceId)

    return (
        <div>
            <Container className="ServiceDetails">
                <div className="details-contaier">
                    <div className="serviceDetails-img">
                        <img src={service?.img} alt="service images" className="img-fluid w-100" />
                    </div>
                    <div className="serviceDetails-info">
                        <h2 className="text-red mb-0">{service?.name}</h2>
                        <h5 className='my-1 text-blue'>Time: {service?.Duration}</h5>
                        <p className="mb-4">{service?.machine}</p>
                        <p className="fw-light">{service?.description}</p>
                        <h4 className="mt-2 text-blue">Checkup: {service?.fee}৳</h4>
                        <button className="btn-serviceDetails mt-3">Get The Service</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ServiceDetails;