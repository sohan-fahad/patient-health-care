import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const [services, setServices] = useState()
    useEffect(() => {
        fetch("/servicesDB.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const { serviceId } = useParams()

    const service = services?.find(e => e.id == serviceId)
    console.log(services)

    return (
        <div>
            <h1>{serviceId}</h1>
            <Container className="ServiceDetails">
                <div className="details-contaier">
                    <div className="service-img">
                        <img src={service?.img} alt="doctor images" className="img-fluid w-100" />
                    </div>
                    <div className="service-info">
                        <h2 className="text-red mb-0">{service?.name}</h2>
                        <h5 className='my-1 text-blue'>Time: {service?.Duration}</h5>
                        <p className="mb-4">{service?.machine}</p>
                        <p className="fw-light">{service?.description}</p>
                        <h4 className="mt-2 text-blue">Appointment: {console.log(service)}৳</h4>
                        <Link className="btn-service mt-3">Get The Service</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ServiceDetails;