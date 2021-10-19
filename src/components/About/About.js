import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'

const About = () => {
    const aboutimg1 = 'https://image.freepik.com/free-vector/hospital-building-vector-icon-illustration-building-landmark-icon-concept-white-isolated_138676-440.jpg'

    const aboutimg2 = 'https://img.freepik.com/free-vector/doctors-visit-treating-patient_37895-279.jpg?size=626&ext=jpg'

    return (
        <Container className="About">
            <div className="about-container">
                <div class="about-section">
                    <img src={aboutimg1} alt="" className="w-8 img-fluid" />
                    <p className="fw-light">Patient Health Care is an online medical service targeting emerging markets that are rapidly digitising. Our mission is to improve the health and wellbeing of the populations we serve. We have developed accessible and affordable telehealth services that aims to support the public health system, research and clinical trials.

                        Patient Health Care offers on-demand GP and specialist consultations with verified and certified doctors, online prescriptions, medicine delivery, pathology/ diagnostics tests, all while building valuable Electronic Health Records.

                        Patient Health Care is vertically integrated with pharmacies/ medicine delivery suppliers, labs/ diagnostics centres, and payment providers for an end-to-end digital health experience.

                        Patient Health Care systematically focuses on expanding access to affordable healthcare services to all. We promise to improve our solutions continuously through our scalable technology and data analytics capabilities. Our passionate team is committed to excellence and work extremely hard to ensure we make a positive contribution to the healthcare of the future.
                    </p>
                </div>
                <div class="about-section">
                    <p className="fw-light">Patient Health Care is an online medical service targeting emerging markets that are rapidly digitising. Our mission is to improve the health and wellbeing of the populations we serve. We have developed accessible and affordable telehealth services that aims to support the public health system, research and clinical trials.

                        Patient Health Care offers on-demand GP and specialist consultations with verified and certified doctors, online prescriptions, medicine delivery, pathology/ diagnostics tests, all while building valuable Electronic Health Records.

                        Patient Health Care is vertically integrated with pharmacies/ medicine delivery suppliers, labs/ diagnostics centres, and payment providers for an end-to-end digital health experience.

                        Patient Health Care systematically focuses on expanding access to affordable healthcare services to all. We promise to improve our solutions continuously through our scalable technology and data analytics capabilities. Our passionate team is committed to excellence and work extremely hard to ensure we make a positive contribution to the healthcare of the future.
                    </p>
                    <img src={aboutimg2} alt="" className="w-8 img-fluid" />
                </div>
            </div>
        </Container>
    );
};

export default About;