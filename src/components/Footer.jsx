import React from 'react'

function Footer() {
    return (
        // <!-- Footer-->
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2023</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/bionicsoulofficial/" aria-label="Twitter"><i className="fab fa-instagram"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/profile.php?id=100090975092941" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/company/bionic-soul/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>)
}

export default Footer