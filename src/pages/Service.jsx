import React from 'react';
import { useInView } from 'react-intersection-observer';
import './service.css'; // Assurez-vous de créer ce fichier pour les styles

const ServiceItem = ({ delay, icon, title, description }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            className={`col-lg-3 col-sm-6 service-item text-center pt-3 wow fadeInUp ${inView ? 'animate' : ''}`}
            ref={ref}
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="p-4">
                <i className={`fa fa-3x ${icon} text-primary mb-4`}></i>
                <h5 className="mb-3">{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <section className="container-xxl py-5">
            <div className="container">
                <div className="row g-4">
                    <ServiceItem
                        delay={0.1}
                        icon="fa-graduation-cap"
                        title="Skilled Instructors"
                        description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
                    />
                    <ServiceItem
                        delay={0.3}
                        icon="fa-globe"
                        title="Online Classes"
                        description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
                    />
                    <ServiceItem
                        delay={0.5}
                        icon="fa-home"
                        title="Home Projects"
                        description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
                    />
                    <ServiceItem
                        delay={0.7}
                        icon="fa-book-open"
                        title="Book Library"
                        description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;