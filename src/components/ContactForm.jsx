import React from 'react';
// import emailjs from 'emailjs-com';

export default function ContactForm() {
    const handleSubmit = (e) => {
        e.preventDefault();

        // Replacevalues with EmailJS template parameters
        const templateParams = {
            from_name: e.target.name.value,
            from_email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        // emailjs.send('SERVICE_ID', 'TEMPLATE_ID', templateParams, 'USER_ID')
        //     .then((response) => {
        //         console.log('Email sent successfully:', response);
        //     })
        //     .catch((error) => {
        //         console.error('Error sending email:', error);
        //     });

        // Clear the form fields
        e.target.reset();
    };

    return (
        <section className="space-top space-extra-bottom">
            <div className="container">
                <div className="tab-content" id="nav-contactTabContent">
                    <div className="tab-pane fade show active" id="nav-GermanyAddress" role="tabpanel" aria-labelledby="nav-GermanyAddress-tab">
                        <div className="row">
                            <div className="col-lg-6 mb-30">
                                <div className="contact-box">
                                    <h3 className="contact-box__title h4">Our Office Address</h3>
                                    <p className="contact-box__text">Empowering Innovation, Collaboration, and Impact</p>
                                    <div className="contact-box__item">
                                        <div className="contact-box__icon"><i className="fal fa-phone-alt"></i></div>
                                        <div className="media-body">
                                            <h4 className="contact-box__label">Phone Number & Email</h4>
                                            <p className="contact-box__info"><a href="tel:+310259121563">0200925941</a><a href="mailto:info@example.com">info.comzine@gmail.com</a></p>
                                        </div>
                                    </div>
                                    <div className="contact-box__item">
                                        <div className="contact-box__icon"><i className="far fa-map-marker-alt"></i></div>
                                        <div className="media-body">
                                            <h4 className="contact-box__label">Our Office Address</h4>
                                            <p className="contact-box__info">
                                                Mirembe Complex Opposite Kireka Lory Park.
                                                Next to Post Bank, Kireka branch
                                            </p>
                                        </div>
                                    </div>
                                    <div className="contact-box__item">
                                        <div className="contact-box__icon"><i className="far fa-clock"></i></div>
                                        <div className="media-body">
                                            <h4 className="contact-box__label">Official Work Time</h4>
                                            <p className="contact-box__info">8:30am - 5:30pm ( Mon - Fri ) Sat, Sun & Holiday Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="contact-box">
                                    <h3 className="contact-box__title h4">Leave a Message</h3>
                                    <p className="contact-box__text">We’re Ready To Help You</p>
                                    <form className="contact-box__form" onSubmit={handleSubmit}>
                                        <div className="row gx-20">
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="name" id="name" placeholder="Your Name" />
                                                <i className="fal fa-user"></i>
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input type="email" name="email" id="email" placeholder="Email Address" />
                                                <i className="fal fa-envelope"></i>
                                            </div>
                                            <div className="col-12 form-group">
                                                <select name="subject" id="subject">
                                                    <option selected disabled hidden>Select subject</option>
                                                    <option value="Consultancy">Consultancy</option>
                                                    <option value="Investment">Investment</option>
                                                    <option value="Tech">Tech</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                            </div>
                                            <div className="col-12 form-group">
                                                <textarea name="message" id="message" placeholder="Type Your Message"></textarea>
                                            </div>
                                            <div className="col-12">
                                                <button className="vs-btn">Submit Message<i className="far fa-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="form-messages mb-0 mt-3"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
