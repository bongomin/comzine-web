import React from 'react';

export default function ProjectsComponent() {
  const projectsData = [
    { label: 'Healthcare Platform', title: 'Epiwatch App', imageSrc: 'p-2-1.jpg' },
    { label: 'Healthcare Platform', title: 'Dromedic Health Care', imageSrc: 'p-2-2.jpg' },
    { label: 'Disaster Response System', title: 'Humanitarian Tech Solution', imageSrc: 'p-2-3.jpg' },
    { label: 'Community Engagement App', title: 'Community Engagement Platform', imageSrc: 'p-2-4.jpg' },
    { label: 'Innovative Education Tools', title: 'Education Technology', imageSrc: 'p-2-5.jpg' },
    { label: 'Digital Marketing Campaigns', title: 'Digital Marketing Services', imageSrc: 'p-2-6.jpg' },
    // Add more projects here
];

    return (
        <section className="space-top space-extra-bottom">
            <div className="container">
                <div className="row filter-active">
                    {projectsData.map((project, index) => (
                        <div key={index} className="col-md-6 col-xxl-auto filter-item">
                            <div className="project-style2">
                                <div className="project-img">
                                    <div className="project-shape"></div>
                                    <img src={`assets/img/project/${project.imageSrc}`} alt={project.label} />
                                    <a href={`assets/img/project/${project.imageSrc}`} className="icon-btn style4 popup-image">
                                        <i className="far fa-search"></i>
                                    </a>
                                </div>
                                <div className="project-content">
                                    <span className="project-label">{project.label}</span>
                                    <h3 className="project-title h5">
                                        <a href="text-reset">{project.title}</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
