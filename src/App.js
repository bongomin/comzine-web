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
// import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div className="App">
      <header className="vs-header header-layout1">
        <HeaderTop />
        <div className="container">
          <MenuTop />
        </div>
        <div className="sticky-wrapper">
          <div className="sticky-active">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <MainMenu />
                {/* <SearchBar /> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Other sections and components */}
      <HeroSection />
      <ImageCarousel/>
      <FeaturesAndAboutSection />
      {/* <Services /> */}
      <CounterSection />
      <Footer />
    </div>
  );
}

export default App;
