import React from 'react'

function About() {
  return (
    <div className="page-section" id="about">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: 400 }}>
            <div className="position-relative h-100">
              <img className="img-fluid position-absolute w-100 h-100" src="assets/assets/img/about/about.jpeg" alt="" style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h6 className="section-heading text-uppercase">About Us</h6>
                <h1 className="mb-4">Company Description</h1>
              </div>
              <div className="timeline-body">
                <p className="text-muted mb-4">Bionic Soul is a pioneering startup dedicated to developing and manufacturing advanced bionic prosthetics that enhance the mobility and quality of life for amputees. Our cutting-edge products, including BioniLeg, ErgoLeg, and Bionic Arm, leverage the latest in biomechanical engineering and user-centered design to provide high-quality, affordable, and customizable solutions. We are committed to achieving both commercial success and making a significant social impact by making advanced prosthetic technology accessible to all.</p>
                <div className="row gy-2 gx-4 mb-4">
                  <div className="col-sm-6">
                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />High-Quality Solutions</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Affordable Prosthetics</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Customizable Designs</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />User-Centered Design</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Social Impact</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Biomechanical Engineering</p>
                  </div>
                </div>
                <a className="btn btn-primary py-3 px-5 mt-2" href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default About




// import React from 'react';
// import { useInView } from 'react-intersection-observer';
// import './About.css'; // Assurez-vous que le fichier CSS est importé

// function About() {
//   const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });
//   const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true });
//   const { ref: bodyRef, inView: bodyInView } = useInView({ triggerOnce: true });

//   return (
//     <div className="page-section" id="about">
//       <div className="container">
//         <div className="row g-5">
//           <div className="col-lg-6" style={{ minHeight: 400 }}>
//             <div className="position-relative h-100">
//               <img
//                 className={`img-fluid position-absolute w-100 h-100 ${imageInView ? 'animate-image' : ''}`}
//                 src="assets/assets/img/about/about.jpeg"
//                 alt=""
//                 style={{ objectFit: 'cover' }}
//                 ref={imageRef}
//               />
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <div className="timeline-panel">
//               <div className="timeline-heading">
//                 <h6
//                   className={`section-heading text-uppercase ${headingInView ? 'animate-heading' : ''}`}
//                   ref={headingRef}
//                 >
//                   About Us
//                 </h6>
//                 <h1
//                   className={`mb-4 ${headingInView ? 'animate-title' : ''}`}
//                   ref={headingRef}
//                 >
//                   Company Description
//                 </h1>
//               </div>
//               <div className="timeline-body">
//                 <p className={`text-muted mb-4 ${bodyInView ? 'animate-body' : ''}`} ref={bodyRef}>
//                   Bionic Soul is a pioneering startup dedicated to developing and manufacturing advanced bionic prosthetics that enhance the mobility and quality of life for amputees. Our cutting-edge products, including BioniLeg, ErgoLeg, and Bionic Arm, leverage the latest in biomechanical engineering and user-centered design to provide high-quality, affordable, and customizable solutions. We are committed to achieving both commercial success and making a significant social impact by making advanced prosthetic technology accessible to all.
//                 </p>
//                 <div className="row gy-2 gx-4 mb-4">
//                   <div className="col-sm-6">
//                     <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />High-Quality Solutions</p>
//                   </div>
//                   <div className="col-sm-6">
//                     <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Affordable Prosthetics</p>
//                   </div>
//                   <div className="col-sm-6">
//                     <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Customizable Designs</p>
//                   </div>
//                   <div className="col-sm-6">
//                     <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />User-Centered Design</p>
//                   </div>
//                   <div className="col-sm-6">
//                     <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Social Impact</p>
//                   </div>
//                   <div className="col-sm-6">
//                     <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Biomechanical Engineering</p>
//                   </div>
//                 </div>
//                 <a className="btn btn-primary py-3 px-5 mt-2" href="#">Read More</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
