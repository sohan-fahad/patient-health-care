import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState()
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sohan-fahad/fakeDB/main/doctorsDB')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <Container className='doctors' id="doctors">
            <h1 className="doctors-title fw-bold text-center">We Have <span className="global-color1">The Best Medical</span> <span className="global-color2">Specialist In Town</span></h1>
            <p className='title-para text-center'>Our Medical Specialist Care About You & Your Family</p>
            <div className="doctor-card">
                {
                    doctors?.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
        </Container>
    );
};

export default Doctors;