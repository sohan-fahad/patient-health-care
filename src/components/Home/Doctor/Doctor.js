import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css'

const Doctor = ({ doctor }) => {
    const { name, graduation, specialties, fee, img, id } = doctor
    return (
        <div className="text-center doctor">
            <img src={img} alt="" className="w-100 img-fluid doctor-img" />
            <h4 className="mb-0 mt-3 global-color1">{name}</h4>
            <p className="mb-0 global-color2">{specialties}</p>
            <p className="mb-1">{graduation}</p>
            <h5 className="fw-bold">Appointment Fee: {fee}৳</h5>
            <Link to={`/details/${id}`}>
                <button className="btn-details">Details</button>
            </Link>
        </div>

    );
};

export default Doctor;