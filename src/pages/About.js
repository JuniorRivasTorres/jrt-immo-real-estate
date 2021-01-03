import React from 'react'
import Features from '../components/Features';
import Listings from '../components/Listings';
import { InfoData, InfoDataTwo } from '../data/InfoData';
import Hero from '../components/Hero';
import { SliderData } from '../data/SliderData';
import InfoSection from '../components/InfoSection'
import Herone from '../components/Herone'

const About = () => {
    return (
        <>
            <Hero slides={SliderData} />
            <InfoSection {...InfoData} />
            <Listings />
            <Features />
            <InfoSection {...InfoDataTwo}/> 
            <Herone />
        </>
    );
};
export default About;
