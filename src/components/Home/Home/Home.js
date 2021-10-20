import React from 'react';
import Departments from '../Departments/Departments';
import Doctors from '../Doctors/Doctors';
import HeroSlider from '../HeroSlider/HeroSlider';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <Services></Services>
            <Doctors></Doctors>
            <Reviews></Reviews>
            <Departments></Departments>
        </div>
    );
};

export default Home;