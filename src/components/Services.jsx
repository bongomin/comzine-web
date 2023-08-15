import React, { useState } from 'react';
import ServiceModal from './ServiceModal';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    const services = [
        {
            title: 'Healthcare Solutions',
            icon: 'assets/img/icon/sr-icon-1-1.png',
            description: 'Develop innovative healthcare solutions for improved patient care and well-being.',
        },
        {
            title: 'Climate Change Initiatives',
            icon: 'assets/img/icon/sr-icon-1-2.png',
            description: 'Address climate change challenges with technological innovations for a sustainable future.',
        },
        {
            title: 'Community Empowerment',
            icon: 'assets/img/icon/sr-icon-1-3.png',
            description: 'Empower communities through technology, fostering social and economic growth.',
        },
        {
            title: 'Eco-Friendly Tech',
            icon: 'assets/img/icon/sr-icon-1-4.png',
            description: 'Create eco-friendly technology solutions to reduce environmental impact.',
        },
        {
            title: 'Education Technology',
            icon: 'assets/img/icon/sr-icon-1-5.png',
            description: 'Transform education through digital tools and platforms for accessible learning.',
        },
        {
            title: 'Disaster Response Systems',
            icon: 'assets/img/icon/sr-icon-1-6.png',
            description: 'Build effective disaster response systems for rapid aid distribution and recovery.',
        },
    ];

    return (
        <section className="space-top space-extra-bottom" data-bg-src="assets/img/bg/sr-bg-1-1.png">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8 col-xl-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="title-area">
                            <span className="sec-subtitle">Our Latest Services</span>
                            <h2 className="sec-title h1">What Kind of Services We are Offering</h2>
                        </div>
                    </div>
                </div>
                <div className="row wow fadeInUp" data-wow-delay="0.2s">
                    {services.map((service, index) => (
                        <div className="col-md-6 col-lg-4" key={index}>
                            <div className="service-style1">
                                <div className="service-bg" data-bg-src="assets/img/bg/sr-box-bg-1.jpg"></div>
                                <div className="service-icon"><img src={service.icon} alt={service.title} /></div>
                                <h3 className="service-title h5"><a href="service-details.html">{service.title}</a></h3>
                                <p className="service-text">{service.description}</p>
                                <button
                                    className="vs-btn style3"
                                    onClick={() => openModal(service)}
                                >
                                    Read More
                                    <i className="far fa-long-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {selectedService && (
                    <ServiceModal
                        selectedService={selectedService}
                        closeModal={closeModal}
                    />
                )}
            </div>
        </section>
    );
}

export default Services;
