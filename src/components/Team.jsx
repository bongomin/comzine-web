import React from 'react';

const teamMembers = [
    {
        name: 'Joseph Mukkabi',
        role: 'CEO & Founder',
        image: 'assets/img/team/pro2.png',
        social: [
            { icon: 'fab fa-facebook-f', link: '#' },
            { icon: 'fab fa-twitter', link: '#' },
            { icon: 'fab fa-instagram', link: '#' },
        ],
    },
    {
        name: 'Joseph Mukkabi',
        role: 'CEO & Founder',
        image: 'assets/img/team/pro2.png',
        social: [
            { icon: 'fab fa-facebook-f', link: '#' },
            { icon: 'fab fa-twitter', link: '#' },
            { icon: 'fab fa-instagram', link: '#' },
        ],
    },
    {
        name: 'NandawulaShakira',
        role: 'Office Adminitrator & Finance officer',
        image: 'assets/img/team/pro4.png',
        social: [
            { icon: 'fab fa-facebook-f', link: '#' },
            { icon: 'fab fa-twitter', link: '#' },
            { icon: 'fab fa-instagram', link: '#' },
        ],
    },
    {
        name: 'Bongomin Daniel',
        role: 'Software Engneer / Developer',
        image: 'assets/img/team/pro1.jpeg',
        social: [
            { icon: 'fab fa-facebook-f', link: '#' },
            { icon: 'fab fa-twitter', link: '#' },
            { icon: 'fab fa-instagram', link: '#' },
        ],
    },
    // Add more team members similarly
];

const Team = () => {
    return (
        <div>
            <section className="space-top space-extra-bottom">
                <div className="container wow fadeInUp" data-wow-delay="0.2s">
                    <div className="row justify-content-center text-center">
                        <div className="col-xl-6">
                            <div className="title-area">
                                <span className="sec-subtitle">Great Team Members</span>
                                <h2 className="sec-title h1">We Have Expert Team</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row vs-carousel" data-slide-show="4" data-lg-slide-show="3" data-md-slide-show="2">
                        {/* Map through team members */}
                        {teamMembers.map((member, index) => (
                            <div className="col-xl-3" key={index}>
                                <div className="team-style1">
                                    <div className="team-img">
                                        <a href="team-details.html">
                                            <img src={member.image} alt="image" style={{ height: '300px' }} />
                                        </a>
                                        <div className="team-social">
                                            {member.social.map((socialItem, socialIndex) => (
                                                <a href={socialItem.link} key={socialIndex}><i className={socialItem.icon}></i></a>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="team-title">
                                            <a className="text-inherit" href="team-details.html">{member.name}</a>
                                        </h3>
                                        <p className="team-degi">{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Team;
