import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import './Departments.css'

const Departments = () => {
    const leftImg = 'https://img.freepik.com/free-vector/gynecology-consultation-concept-illustration_114360-3576.jpg?size=338&ext=jpg'
    return (
        <Container id="department" className="Departments">
            <h1 className="Departments-title">Departments</h1>
            <Row md={2} lg={2} xs={1} className="d-flex align-items-center">
                <Col>
                    <img src={leftImg} alt="" className="img-fluid w-100" />
                </Col>
                <Col>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Diagnostic Service</Accordion.Header>
                            <Accordion.Body>
                                Diagnostic Services facilitates the provision of timely, cost-effective, and high quality diagnostic care in safe and secure environments. It includes the clinical services of Pathology and Laboratory Medicine, Radiology, and Nuclear Medicine
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Primary Health Care</Accordion.Header>
                            <Accordion.Body>
                                Primary healthcare refers to a broad range of health services provided by medical professionals in the community. ... Primary healthcare is the provision of health services, including diagnosis and treatment of a health condition, and support in managing long-term healthcare, including chronic conditions like diabetes.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Allergic Diseases</Accordion.Header>
                            <Accordion.Body>
                                Allergies, also known as allergic diseases, are a number of conditions caused by hypersensitivity of the immune system to typically harmless substances in the environment. These diseases include hay fever, food allergies, atopic dermatitis, allergic asthma, and anaphylaxis.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Dental Treatment</Accordion.Header>
                            <Accordion.Body>
                                You're entitled if you are: aged under 18, or under 19 and in qualifying full-time education. pregnant or have had a baby in the previous 12 months. staying in an NHS hospital and your treatment is carried out by the hospital dentist.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default Departments;