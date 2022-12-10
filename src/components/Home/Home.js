import React from 'react';
import AboutSection from './AboutSection';
import Projects from './Projects';
import TopSection from './TopSection';

const Home = () => {
    return (
        <div className='md:w-11/12 lg:w-10/12 mx-auto'>
            <TopSection></TopSection>
            <AboutSection></AboutSection>
            <Projects></Projects>
        </div>
    );
};

export default Home;