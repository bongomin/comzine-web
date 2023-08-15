import React, { useState } from 'react';
import './ServiceModal.css'; // Make sure to import your modal styles
import ServiceModal from './ServiceModal'; // Import your ServiceModal component

export default function ServicesTwo() {
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    // Your service data
    const services = [
        {
            title: 'Digital Health Solutions',
            icon: 'assets/img/icon/sr-icon-1-1.png',
            description: 'Develop innovative digital health platforms and applications to improve healthcare accessibility, enhance patient experiences, and enable remote healthcare services.',
        },
        {
            title: 'Climate Change Technology',
            icon: 'assets/img/icon/sr-icon-1-2.png',
            description: 'Create technology-driven solutions to address climate change challenges, including developing platforms for environmental monitoring, renewable energy management systems, and sustainable transportation solutions.',
        },
        {
            title: 'Humanitarian Tech Solutions',
            icon: 'assets/img/icon/sr-icon-1-3.png',
            description: 'Build technology solutions to support humanitarian efforts during crises and emergencies, including developing disaster response platforms, crowd-sourced mapping tools, and communication systems.',
        },
    ];

    return (
        <section className="space-top space-extra-bottom">
            <div className="container wow fadeInUp" data-wow-delay="0.2s">
                <div className="row vs-carousel" data-slide-show="3" data-md-slide-show="2">
                    {services.map((service, index) => (
                        <div className="col-md-6 col-lg-4" key={index}>
                            <div className="service-style1 layout3">
                                <div className="service-bg" data-bg-src="assets/img/bg/sr-box-bg-1.jpg"></div>
                                <div className="service-top">
                                    <div className="service-icon"><img src={service.icon} alt={service.title} /></div>
                                    <span className="service-number">{index + 1}</span>
                                </div>
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
            </div>
            <ServiceModal
                selectedService={selectedService}
                closeModal={closeModal}
            />
        </section>
    );
}
