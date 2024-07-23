import React from 'react';
import { useInView } from 'react-intersection-observer';
import './presentation.css'; // Assurez-vous que ce fichier CSS est bien chargé

function Presentation() {
    const { ref: textRef, inView: textInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: videoRef, inView: videoInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const videoUrl = 'https://www.linkedin.com/posts/7114771853490946048'; // URL de votre vidéo LinkedIn
    const previewImageUrl = 'URL_DE_L_IMAGE_DE_PREVISUALISATION'; // Remplacez par l'URL de l'image de prévisualisation

    return (
        <section className="page-section" id="presentation">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Living with an Amputation and Embracing a Bionic Soul</h2>
                    <h3 className="section-subheading text-muted">Discovering New Possibilities</h3>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className={`presentation-content ${textInView ? 'animate-text' : ''}`} ref={textRef}>
                            <h4>Stories of Resilience</h4>
                            <p>
                                Meet Nadine and Hassen, two inspiring individuals who have embraced their bionic journey.
                            </p>
                            <div className="media-content">
                                <img src="assets/assets/img/about/1.jpg" alt="Nadine" className="media-image" />
                                <img src="assets/assets/img/about/1.jpg" alt="Hassen" className="media-image" />
                            </div>
                            <h5>Nadine's Story:</h5>
                            <div>
                                <p>
                                    Regardez notre vidéo sur LinkedIn :
                                    <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                                        Voir la vidéo
                                    </a>
                                </p>
                                {/* Vous pouvez également ajouter une image de prévisualisation ici */}
                            </div>

                            <p>
                                Nadine, who lost her leg, now uses an advanced prosthetic limb that provides her with natural movement and sensory feedback. This technology has transformed her life, allowing her to pursue her passion for hiking and leading an active lifestyle. Nadine's journey showcases the profound impact of bionic advancements on mobility and independence.
                            </p>
                            <h5>Hassen's Story:</h5>
                            <p>
                                Hassen, who lost his arm, has adapted to using a state-of-the-art prosthetic arm that integrates seamlessly with smart technology. This has enabled him to perform daily tasks with ease and even pursue his hobby of playing the guitar. Hassen's experience highlights the possibilities of advanced prosthetics in enhancing functionality and quality of life.
                            </p>
                            <h4>Key Features of Advanced Prosthetics</h4>
                            <ul>
                                <li><strong>Natural Movement:</strong> Prosthetics designed to mimic natural limb movement.</li>
                                <li><strong>Sensory Feedback:</strong> Technology that allows users to feel pressure and texture.</li>
                                <li><strong>Custom Fit and Comfort:</strong> Tailored designs for a comfortable fit.</li>
                                <li><strong>Integration with Smart Technology:</strong> Connects with smart devices for real-time data and control.</li>
                            </ul>
                            <div className={`video-container ${videoInView ? 'animate-video' : ''}`} ref={videoRef}>
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/UcMmDPPKrwA"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <h4>Bionic Soul’s Commitment</h4>
                            <p>
                                At Bionic Soul, our mission is to support and inspire those living with amputations by showcasing the latest advancements in bionic technology. We believe in a future where technology and humanity work together harmoniously, creating a world where limitations are redefined.
                            </p>
                            <h4>Join Our Community</h4>
                            <ul>
                                <li><strong>Stay Informed:</strong> Access up-to-date information on bionic innovations.</li>
                                <li><strong>Connect with Experts:</strong> Engage with professionals in prosthetics and bionics.</li>
                                <li><strong>Share Your Journey:</strong> Connect with others and share your story.</li>
                            </ul>
                            <h4>Our Vision</h4>
                            <p>
                                Bionic Soul envisions a world where technology empowers individuals to overcome physical limitations and lead enriched, empowered lives. We are dedicated to advancing the field of prosthetics and bionics, ensuring everyone has the opportunity to live to their fullest potential.
                            </p>
                            <p>
                                Welcome to Bionic Soul – Where Technology and Humanity Unite.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Presentation;
