import React from 'react'
import Features from '../components/Features';
import Listings from '../components/Listings';
import { InfoData, InfoDataTwo } from '../data/InfoData';
import Hero from '../components/Hero';
import { SliderData } from '../data/SliderData';
import InfoSection from '../components/InfoSection'


const About = () => {
    return (
        <>
            <Hero slides={SliderData} />
            <Features />
            <InfoSection {...InfoData} />
            <Listings />
            <InfoSection {...InfoDataTwo}/> 
         
        </>
    );
};
export default About;
