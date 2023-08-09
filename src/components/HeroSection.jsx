import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="vs-hero-wrapper position-relative">
      <div
        className="vs-hero-carousel"
        data-height="850"
        data-container="1900"
        data-slidertype="responsive"
      >
        {/* Slide 1 */}
        <div
          className="ls-slide"
          data-ls="duration:12000; transition2d:5; kenburnszoom:in; kenburnsscale:1.1;"
        >
          <img
            width="1920"
            height="850"
            src="assets/img/hero/hero-1-1.jpg"
            className="ls-bg"
            alt="hero-bg"
          />
          <div className="vs-hero-content">
            <h2 className="vs-hero-title">Welcome to Our Store</h2>
            <p className="vs-hero-text">
              Discover the latest trends in fashion for men and women.
            </p>
            <a href="#" className="vs-btn vs-btn-primary">
              Shop Now
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className="ls-slide"
          data-ls="duration:12000; transition2d:5; kenburnszoom:out; kenburnsscale:1.1;"
        >
          <img
            width="1920"
            height="850"
            src="assets/img/hero/hero-1-2.jpg"
            className="ls-bg"
            alt="hero-bg"
          />
          <div className="vs-hero-content">
            <h2 className="vs-hero-title">Summer Collection</h2>
            <p className="vs-hero-text">
              Explore our new collection of vibrant summer wear.
            </p>
            <a href="#" className="vs-btn vs-btn-primary">
              View Collection
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          className="ls-slide"
          data-ls="duration:12000; transition2d:5; kenburnszoom:in; kenburnsscale:1.1;"
        >
          <img
            width="1920"
            height="850"
            src="assets/img/hero/hero-1-3.jpg"
            className="ls-bg"
            alt="hero-bg"
          />
          <div className="vs-hero-content">
            <h2 className="vs-hero-title">Limited Edition</h2>
            <p className="vs-hero-text">
              Discover our exclusive limited edition clothing line.
            </p>
            <a href="#" className="vs-btn vs-btn-primary">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
