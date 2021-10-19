import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Services.css'

const Services = () => {
    return (
        <Container className="services" id="doctors&services">
            <h1 className="services-title fw-bold text-center mt-3">Services <span className="global-color1">We</span> <span className="global-color2">Provide</span></h1>
            <Row md={2} lg={3} xs={1} className="service-cards text-center g-4">
                <Col className='p-3 service-card'>
                    <div className="global-color2">
                        <i className="fas fa-user-md"></i>
                    </div>
                    <h4 className="mt-2">Health Care Professionals</h4>
                    <p className="mt-3">The healthcare workforce comprises a wide variety of professions and occupations who provide some type of healthcare service, including such direct care practitioners as physicians, nurse practitioners, physician assistants, nurses, respiratory therapists, dentists, pharmacists, speech-language pathologist, physical therapists, occupational therapists, physical and behavior therapists</p>
                    <button className="btn-doctor1">Get Doctors</button>
                </Col>
                <Col className='p-3 service-card'>
                    <div className="global-color1">
                        <i className="fas fa-briefcase-medical "></i>
                    </div>
                    <h4 className="mt-2">Diagnostic Service</h4>
                    <p className="mt-3">The healthcare workforce comprises a wide variety of professions and occupations who provide some type of healthcare service, including such direct care practitioners as physicians, nurse practitioners, physician assistants, nurses, respiratory therapists, dentists, pharmacists, speech-language pathologist, physical therapists, occupational therapists, physical and behavior therapists</p>
                    <button className="btn-doctor2">Get Your Service</button>
                </Col>
                <Col className='p-3 service-card'>
                    <div className="global-color2">
                        <i className="fas fa-stethoscope"></i>
                    </div>
                    <h4 className="mt-2">Letest Technologiest</h4>
                    <p className="mt-3">The healthcare workforce comprises a wide variety of professions and occupations who provide some type of healthcare service, including such direct care practitioners as physicians, nurse practitioners, physician assistants, nurses, respiratory therapists, dentists, pharmacists, speech-language pathologist, physical therapists, occupational therapists, physical and behavior therapists</p>
                    <button className="btn-doctor1">Details</button>
                </Col>
            </Row>
        </Container>
    );
};

export default Services;