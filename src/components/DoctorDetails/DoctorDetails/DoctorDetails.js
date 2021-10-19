import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './DoctorDetails.css'

const DoctorDetails = () => {
    const { doctorId } = useParams()
    const [doctors, setDoctors] = useState()
    useEffect(() => {
        fetch('/doctorsDB.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    console.log("sdfsa", doctors)
    const doctor = doctors?.find(doctor => doctor.id == doctorId)

    // const {name, img, description, fee, graduation, specialties} = doctor;

    return (
        <div>
            <Container className="DoctorDetails">
                <div className="details-contaier">
                    <div className="doctor-img">
                        <img src={doctor?.img} alt="doctor images" className="img-fluid w-100" />
                    </div>
                    <div className="doctor-info">
                        <h2 className="text-red mb-0">{doctor?.name}</h2>
                        <h5 className='my-1 text-blue'>{doctor?.specialties}</h5>
                        <p className="mb-4">{doctor?.graduation}</p>
                        <p className="fw-light">{doctor?.description}</p>
                        <h4 className="mt-2 text-blue">Appointment: {doctor?.fee}৳</h4>
                        <Link className="btn-appoinment mt-3">Get An Appointment</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DoctorDetails;