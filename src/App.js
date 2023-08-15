import React from 'react';
import HeaderTop from './components/HeaderTop';
import MenuTop from './components/MenuTop';
import MainMenu from './components/MainMenu';
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Services from './components/Services';
import CounterSection from './components/CounterSection';
import FeaturesAndAboutSection from './components/FeaturesAndAboutSection';
import ImageCarousel from './components/ImageCarousel';
import Team from './components/Team';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <HeroSection />
      <ImageCarousel/>
      <FeaturesAndAboutSection />
      <Services />
      <CounterSection />
      <Team/>
      <Footer />
    </div>
  );
}

export default App;
