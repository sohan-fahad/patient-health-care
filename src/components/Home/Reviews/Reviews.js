import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Reviews.css'

const Reviews = () => {
    const patient1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU'

    const patient2 = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'

    const patient3 = 'https://images.pexels.com/users/avatars/1144493/darius-krause-214.jpeg?auto=compress&fit=crop&h=256&w=256'

    return (
        <div className="Reviews mt-5" id="reviews">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="clients-img rounded-circle"
                        src={patient1}
                        alt="Patient Review"
                    />
                    <div className="text-center mb-5 review-info">
                        <h3 className="text-dark fw-vold">Sazzad Rayhan</h3>
                        <p className='patient'>(Kindey Patient)</p>
                        <p>Great experience. There services was greate. I'l recommend any of my friend to get their service.</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="clients-img rounded-circle"
                        src={patient2}
                        alt="Patient Review"
                    />
                    <div className="text-center mb-5 review-info">
                        <h3 className="text-dark fw-bold">Shamim Fahad</h3>
                        <p className='patient'>(Cencer Patient)</p>
                        <p>Great experience. There services was greate. I'l recommend any of my friend to get their service.</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="clients-img rounded-circle"
                        src={patient3}
                        alt="Patient Review"
                    />
                    <div className="text-center mb-5 review-info">
                        <h3 className="text-dark fw-bold">Sohan Fahad</h3>
                        <p className='patient'>(Diabetic Patient)</p>
                        <p>Great experience. There services was greate. I'l recommend any of my friend to get their service.</p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Reviews;