// import React, { useEffect } from 'react'



// export default function Galerie() {

//   useEffect(() => {
//     const scripts = ['./js/bootstrap.js', './js/jquery-3.4.1.min.js', './js/jquery-3.4.1.min.js'];

//     const scriptElements = scripts.map(src => {
//       const script = document.createElement('script');
//       script.src = src;
//       script.async = true;
//       document.body.appendChild(script);
//       return script;
//     });

//     return () => {
//       scriptElements.forEach(script => document.body.removeChild(script));
//     };
//   }, []);

//   return (
//     // <!-- gallery section -->
//     <section className="gallery_section layout_padding">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-5 ml-auto">
//             <div className="heading_container">
//               <h2>
//                 Our Gallery
//               </h2>
//               <p>
//                 It is a long established fact that a reader will be distracted by the readable content of a page
//               </p>
//               <a href="">
//                 See More
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="gallery_container">
//         <div className="gallery_bg">
//           <img src="images/gallery-bg.png" alt="" />
//         </div>
//         <div className="container">
//           <div className="gallery_box">
//             <div className="box b1">
//               <div className="img-box">
//                 <img src="images/gallery-1.jpg" alt="" />
//                 <h5>
//                   photography
//                 </h5>
//               </div>
//             </div>
//             <div className="box b2">
//               <div className="img-box">
//                 <img src="images/gallery-2.jpg" alt="" />
//                 <h5>
//                   photography
//                 </h5>
//               </div>
//               <div className="img-box">
//                 <img src="images/gallery-3.jpg" alt="" />
//                 <h5>
//                   photography
//                 </h5>
//               </div>
//             </div>
//             <div className="box b3">
//               <div className="img-box">
//                 <img src="images/gallery-4.jpg" alt="" />
//                 <h5>
//                   photography
//                 </h5>
//               </div>
//               <div className="img-box">
//                 <img src="images/gallery-5.jpg" alt="" />
//                 <h5>
//                   photography
//                 </h5>
//               </div>
//             </div>
//             <div className="box b4">
//               <div className="img-box">
//                 <img src="images/gallery-6.jpg" alt="" />
//                 <h5>
//                   photography
//                 </h5>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
