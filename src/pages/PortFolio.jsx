import React from 'react'

function PortFolio() {
    return (
        <div>
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 mb-4">
                            {/* <!-- Portfolio item 1--> */}
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="assets/assets/img/portfolio/1.jpg" alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Threads</div>
                                    <div className="portfolio-caption-subheading text-muted">Illustration</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                            {/* <!-- Portfolio item 2--> */}
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="assets/assets/img/portfolio/2.jpg" alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Explore</div>
                                    <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                            {/* <!-- Portfolio item 3--> */}
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="assets/assets/img/portfolio/3.jpg" alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Finish</div>
                                    <div className="portfolio-caption-subheading text-muted">Identity</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                            {/* <!-- Portfolio item 4--> */}
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="assets/assets/img/portfolio/4.jpg" alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Lines</div>
                                    <div className="portfolio-caption-subheading text-muted">Branding</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                            {/* <!-- Portfolio item 5--> */}
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="assets/assets/img/portfolio/5.jpg" alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Southwest</div>
                                    <div className="portfolio-caption-subheading text-muted">Website Design</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            {/* <!-- Portfolio item 6--> */}
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="assets/assets/img/portfolio/6.jpg" alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Window</div>
                                    <div className="portfolio-caption-subheading text-muted">Photography</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PortFolio