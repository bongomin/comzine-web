import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css';

const slideDescriptions = [
    "Develop cutting-edge technological solutions for healthcare and climate change mitigation.",
    "Facilitate access to affordable and inclusive digital innovations for underserved communities.",
    "Foster collaboration and partnerships to amplify the impact of our solutions globally.",
    "Continuously innovate and adapt to stay at the forefront of technology-driven social change.",
    "Innovation: We embrace innovation as the driving force behind our solutions and approach.",
    "Impact: We are committed to creating meaningful and measurable impact in the communities we serve.",
    "Collaboration: We believe in the power of collaboration and actively seek partnerships to achieve common goals.",
    "Empathy: We prioritize empathy in our design process to ensure our solutions address real needs and deliver tangible benefits.",
    "Sustainability: We are dedicated to creating sustainable solutions that have a positive environmental and social footprint."
];

const ImageCarousel = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const slideChangeInterval = 5000; // Change slide every 2 seconds
    const slideCount = 6; // Total number of slides

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slideCount);
        }, slideChangeInterval);

        return () => clearInterval(interval);
    }, []);

    const getRandomSlideEffect = () => {
        const slideEffects = ['fade', 'slide', 'zoom', 'blur', 'rotate', 'flip'];
        const randomIndex = Math.floor(Math.random() * slideEffects.length);
        return slideEffects[randomIndex];
    };

    return (
        <Carousel
            selectedItem={activeSlideIndex}
            showThumbs={false}
            showStatus={false}
            interval={slideChangeInterval}
            transitionEffect={getRandomSlideEffect()}
        >
            {Array.from({ length: slideCount }).map((_, index) => (
                <div key={index} className="carousel-slide">
                    <img src={`assets/img/bg-${index + 1}.jpg`} alt={`Investment and Tech ${index + 1}`} />

                    <div className="slide-overlay">
                        <div className="slide-content">
                            <p className="slide-description">
                                {slideDescriptions[index]}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;
