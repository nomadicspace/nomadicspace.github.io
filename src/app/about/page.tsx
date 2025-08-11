import React from "react";
import Image from "next/image";
import SearchBar from "../components/SearchBar";

const About = () => {
    return (
        <>
            <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5">
                        <h1 className="display-5 animated fadeIn mb-4">About Us</h1>
                        <nav aria-label="breadcrumb animated fadeIn">
                            <ol className="breadcrumb text-uppercase">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                <li className="breadcrumb-item text-body active" aria-current="page">About</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-md-6 animated fadeIn">
                        <Image className="img-fluid" src="/img/header.jpg" alt="" width={1000} height={700} />
                    </div>
                </div>
            </div>
            <SearchBar />

            <div className="container-xxl">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                        <p>Kami adalah penyedia jasa pembuatan maket, desain interior, gambar kerja, dan RAB dengan standar profesional. Fokus kami adalah membantu arsitek, kontraktor, dan pengembang menyampaikan visi proyek dengan visual yang memukau dan akurat.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="row gy-4">
                                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="bg-light rounded p-1">
                                        <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: "1px dashed rgba(0, 185, 142, 0.3)" }}>
                                            <div className="icon me-3" style={{ width: "45px", height: "45px" }}>
                                                <i className="fa fa-map-marker-alt text-primary"></i>
                                            </div>
                                            <span>Citizen Park 7, No 15</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="bg-light rounded p-1">
                                        <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: "1px dashed rgba(0, 185, 142, 0.3)" }}>
                                            <div className="icon me-3" style={{ width: "45px", height: "45px" }}>
                                                <i className="fa fa-envelope-open text-primary"></i>
                                            </div>
                                            <span>nomadicspaceofficial@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="bg-light rounded p-1">
                                        <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: "1px dashed rgba(0, 185, 142, 0.3)" }}>
                                            <div className="icon me-3" style={{ width: "45px", height: "45px" }}>
                                                <i className="fa fa-phone-alt text-primary"></i>
                                            </div>
                                            <span>+62 819 9272 9298</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <iframe className="position-relative rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9479626431093!2d106.58908397579131!3d-6.270573993718134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd0066cf73f3%3A0x20341847c4112094!2sPark%20serpong%20Cityzen%20Park!5e0!3m2!1sen!2sid!4v1754912898003!5m2!1sen!2sid"
                                frameBorder="0" style={{ minHeight: "400px", border: 0 }} allowFullScreen={true} aria-hidden="false"
                                tabIndex={0}></iframe>
                        </div>
                        <div className="col-md-6">
                            <div className="wow fadeInUp" data-wow-delay="0.5s">
                                <p className="mb-4">Jika anda ingin mengirim proposal ataupun ingin menanyakan apa pun itu, silahkan tinggal kan pesan dengan mengirim form berikut <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 150 }}></textarea>
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
