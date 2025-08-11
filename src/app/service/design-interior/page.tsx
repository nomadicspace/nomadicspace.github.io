import Header from "@/app/components/Header";
import SearchBar from "@/app/components/SearchBar";
import Image from "next/image";
import React from "react";

const DesignInteriorPage = () => {
    return (
        <>
            <Header title="Design Interior" breadcrumb={[
                {label: "Home", href: "/"},
                {label: "Service", href: "/design-interior"},
                {label: "Design Interior"},
            ]} />

            <SearchBar />

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img position-relative overflow-hidden p-5 pe-0">
                                <Image className="img-fluid w-100" src="/img/house-renovation-01.jpg" width={486} height={486} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="mb-4">Renovasi Rumah Apartement #1</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>
                            <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default DesignInteriorPage;
