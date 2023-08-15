import React from 'react';
import './ServiceModal.css';

const ServiceModal = ({ selectedService, closeModal }) => {
    if (!selectedService) {
        return null;
    }

    return (
        <div className="service-modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <div className="modal-header">
                    <span className="header-content">
                        <h3>{selectedService.title}</h3>
                    </span>
                </div>
                <p>{`We develop , ${selectedService.description}`}</p>
            </div>
        </div>
    );
}

export default ServiceModal;
