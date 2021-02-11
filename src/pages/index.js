import React from 'react';
import Features from '../components/Features';
import Listings from '../components/Listings';
import { InfoData, InfoDataTwo } from '../data/InfoData';
import Hero from '../components/Hero';
import { SliderData } from '../data/SliderData';
import InfoSection from '../components/InfoSection'
import Services from  '../components/Services'
import Email from '../components/Email'

const Home = () => {
    return (
        <>
            <Hero slides={SliderData} />
            <Services />
            <Features />
            <InfoSection {...InfoData} />
            <Listings />
            <InfoSection {...InfoDataTwo}/> 
            <Email/>
        </>
    );
};

export default Home
