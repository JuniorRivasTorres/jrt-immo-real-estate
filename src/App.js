import React, {useState} from 'react';
import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar';
import Listings from './components/Listings';
import InfoSection from './components/InfoSection';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import { InfoData, InfoDataTwo } from './data/InfoData';
import Features from './components/Features';
import Footer from './components/Footer'


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData}/>
      <Listings />
      <Features />
      <InfoSection {...InfoDataTwo}/>
      <Footer/>
    </>
  );
}

export default App;
