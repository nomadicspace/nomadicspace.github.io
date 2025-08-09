import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Get In Touch</h5>
                        <p className="mb-2"><i className="fa-solid fa-phone-alt me-3"></i>+6285 777 007 002</p>
                        <p className="mb-2"><i className="fa-solid fa-envelope me-3"></i>nomadicspaceofficial@gmail.com</p>
                        <p className="mb-2"><i className="fa-solid fa-map-marker-alt me-3"></i>Citizen Park North 7, No 25, Tangerang</p>

                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/nomadicspaceethnic/?hl=en"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <a className="btn btn-link text-white-50" href="">About Us</a>
                        <a className="btn btn-link text-white-50" href="">Contact Us</a>
                        <a className="btn btn-link text-white-50" href="">Our Services</a>
                        <a className="btn btn-link text-white-50" href="">Privacy Policy</a>
                        <a className="btn btn-link text-white-50" href="">Terms & Condition</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Photo Gallery</h5>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <Image className="img-fluid rounded bg-light p-1" src="/img/property-1.jpg" alt="" width={68} height={45} />
                            </div>
                            <div className="col-4">
                                <Image className="img-fluid rounded bg-light p-1" src="/img/property-2.jpg" alt="" width={68} height={45} />
                            </div>
                            <div className="col-4">
                                <Image className="img-fluid rounded bg-light p-1" src="/img/property-3.jpg" alt="" width={68} height={45} />
                            </div>
                            <div className="col-4">
                                <Image className="img-fluid rounded bg-light p-1" src="/img/property-4.jpg" alt="" width={68} height={45} />
                            </div>
                            <div className="col-4">
                                <Image className="img-fluid rounded bg-light p-1" src="/img/property-5.jpg" alt="" width={68} height={45} />
                            </div>
                            <div className="col-4">
                                <Image className="img-fluid rounded bg-light p-1" src="/img/property-6.jpg" alt="" width={68} height={45} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Katalog Produk</h5>
                        <p>Dapatkan katalog produk kami.</p>
                        <div className="position-relative mx-auto" style={({ maxWidth: 400 })}>
                            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Kirim</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <span>Nomadic Space</span>, 2025 - Present. All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            {/* <div className="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
