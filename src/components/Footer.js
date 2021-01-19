import React from 'react';

function Footer() {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="social">
                    <h3>FOLLOW ME</h3>
                    <a href="https://www.linkedin.com/in/swaraj-patil-profile/"><i className="fab fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/itz_rocking_sp/"><i className="fab fa-instagram"></i></a>
                    <a href="https://twitter.com/iamswaraj_patil"><i className="fab fa-twitter"></i></a>
                    <a href="https://github.com/Swaraj-Patil"><i className="fab fa-github"></i></a>
                </div>
                <div className="copyrights">
                    <span>Created By <a href="https://swaraj-patil.github.io/portfolio/">Swaraj Patil</a> | <span className="far fa-copyright"></span> 2021 All rights reserved</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;