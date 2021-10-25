import React from 'react';
import Exparts from '../Exparts/Exparts';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div id="home">
            <Slider />
            <Services></Services>
            <Exparts></Exparts>
        </div>
    );
};

export default Home;