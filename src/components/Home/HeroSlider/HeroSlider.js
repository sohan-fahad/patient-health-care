import React from 'react';
import { Carousel } from 'react-bootstrap';

const HeroSlider = () => {
    const sliderImg1 = "https://i.ibb.co/Qj5T7kb/slider1.jpg"
    const sliderImg2 = "https://i.ibb.co/bKkgTq9/slider2.jpg"
    const sliderImg3 = "https://i.ibb.co/QHsXzFH/slider3.jpg"
    return (
        <Carousel id="home">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sliderImg1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="fw-bold">Healthy Enviroment</h3>
                    <p>We Care About The Enviroment.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sliderImg2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className="fw-bold">Best Equipments</h3>
                    <p>We Have The Best Equipments in Town</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sliderImg3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="fw-bold">Best Doctor</h3>
                    <p>We Have the Best Doctor's Services</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default HeroSlider;