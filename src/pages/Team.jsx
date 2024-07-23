// import React from 'react';
// import { useInView } from 'react-intersection-observer';
// import './Team.css'; // Assurez-vous que le fichier CSS est importé

// const instructors = [
//   { img: "img/team-1.jpg", name: "John Doe", designation: "Senior Instructor", delay: "0.1s" },
//   { img: "img/team-2.jpg", name: "Jane Smith", designation: "Instructor", delay: "0.3s" },
//   { img: "img/team-3.jpg", name: "Alice Johnson", designation: "Junior Instructor", delay: "0.5s" },
//   { img: "img/team-4.jpg", name: "Bob Brown", designation: "Instructor", delay: "0.7s" }
// ];

// function Team() {
//   return (
//     <div className="container-xxl py-5">
//       <div className="container">
//         <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
//           <h6 className="section-title bg-white text-center text-primary px-3">Instructors</h6>
//           <h1 className="mb-5">Expert Instructors</h1>
//         </div>
//         <div className="row g-4">
//           {instructors.map((instructor, index) => {
//             const { ref, inView } = useInView({ triggerOnce: true });
//             return (
//               <div className={`col-lg-3 col-md-6 wow fadeInUp ${inView ? 'animate' : ''}`} data-wow-delay={instructor.delay} ref={ref} key={index}>
//                 <div className="team-item bg-light">
//                   <div className="overflow-hidden">
//                     <img className="img-fluid" src={instructor.img} alt={instructor.name} />
//                   </div>
//                   <div className="position-relative d-flex justify-content-center" style={{ marginTop: -23 }}>
//                     <div className="bg-light d-flex justify-content-center pt-2 px-1">
//                       <a className="btn btn-sm-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
//                       <a className="btn btn-sm-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></a>
//                       <a className="btn btn-sm-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></a>
//                     </div>
//                   </div>
//                   <div className="text-center p-4">
//                     <h5 className="mb-0">{instructor.name}</h5>
//                     <small>{instructor.designation}</small>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Team;
