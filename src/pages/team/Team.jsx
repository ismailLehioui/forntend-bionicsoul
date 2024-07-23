import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Team.css';

const instructors = [
    { img: "assets/assets/img/team/1.jpg", name: "John Doe", designation: "Senior Instructor", delay: "0.1s" },
    { img: "assets/assets/img/team/2.jpg", name: "Jane Smith", designation: "Instructor", delay: "0.3s" },
    { img: "assets/assets/img/team/3.jpg", name: "Alice Johnson", designation: "Junior Instructor", delay: "0.5s" },
    { img: "assets/assets/img/team/1.jpg", name: "Bob Brown", designation: "Instructor", delay: "0.7s" }
];

function Team() {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

  const refs = [ref1, ref2, ref3, ref4];
  const views = [inView1, inView2, inView3, inView4];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Instructors</h6>
          <h1 className="mb-5">Expert Instructors</h1>
        </div>
        <div className="row g-4">
          {instructors.map((instructor, index) => (
            <div 
              className={`col-lg-3 col-md-6 ${views[index] ? 'animate-instructor' : 'initial'} wow fadeInUp`} 
              data-wow-delay={instructor.delay} 
              ref={refs[index]} 
              key={index}
            >
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={instructor.img} alt={instructor.name} />
                </div>
                <div className="position-relative d-flex justify-content-center" style={{ marginTop: -23 }}>
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">{instructor.name}</h5>
                  <small>{instructor.designation}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
