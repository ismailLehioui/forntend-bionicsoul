import React from 'react';
import { useInView } from 'react-intersection-observer';
import './achievements.css'; // Assurez-vous de créer ce fichier pour les styles

const Achievements = () => {
  const { ref: timelineRef, inView: timelineInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="page-section" id="achievement">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Achievements and Awards</h2>
          <h3 className="section-subheading text-muted">
            Bionic Soul is proud to have received numerous accolades for our contributions to the field of bionic technology and healthcare innovation.
          </h3>
        </div>
        <ul className={`timeline ${timelineInView ? 'animate-timeline' : ''}`} ref={timelineRef}>
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="assets/assets/img/about/1.jpg" alt="Proof of Concept" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Proof of Concept</h4>
                <h4 className="subheading">July 2021</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Our initial proof of concept marked the beginning of our journey in bionic technology.</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="assets/assets/img/about/2.jpg" alt="Tunisia e-Health Valley Prize" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Tunisia e-Health Valley Prize</h4>
                <h4 className="subheading">October 2022</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Recognized for our innovative approach in healthcare technology.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="assets/assets/img/about/3.jpg" alt="Startup Label" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Startup Label</h4>
                <h4 className="subheading">June 2023</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Awarded for being an innovative startup with impactful solutions.</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="assets/assets/img/about/4.jpg" alt="Realities & STTM_E Health Competition Prize" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Realities & STTM_E Health Competition Prize</h4>
                <h4 className="subheading">May 2023</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Awarded for our contribution to health technology innovations.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="assets/assets/img/about/about.jpeg" alt="More Special Needs Prize" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>More Special Needs Prize</h4>
                <h4 className="subheading">May 2023</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Recognized for our efforts in addressing special needs through technology.</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="assets/assets/img/about/6.jpg" alt="Best Tunisian Entrepreneur 2023 Prize" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Best Tunisian Entrepreneur 2023 Prize</h4>
                <h4 className="subheading">August 2023</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Honored for our entrepreneurial spirit and innovative solutions.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="assets/assets/img/about/7.jpg" alt="Tunisia e-Health Valley Prize" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Tunisia e-Health Valley Prize</h4>
                <h4 className="subheading">September 2023</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Awarded for our continued excellence in health technology.</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="assets/assets/img/about/8.jpg" alt="International Women's Prize" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>International Women's Prize</h4>
                <h4 className="subheading">October 2023</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Recognized for our efforts in empowering women through technology.</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                Be Part
                <br />
                Of Our
                <br />
                Story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
