import SearchBar from "@/app/components/SearchBar";
import Image from "next/image";
import React from "react";

const KitchenSetPage = () => {
    return (
        <>
            <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5">
                        <h1 className="display-5 animated fadeIn mb-4">Kitchen Set</h1>
                        <nav aria-label="breadcrumb animated fadeIn">
                            <ol className="breadcrumb text-uppercase">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                <li className="breadcrumb-item text-body active" aria-current="page">kitchen-set</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-md-6 animated fadeIn">
                        <Image className="img-fluid" src="/img/header-kitchenset.jpg" alt="" width={660} height={462} />
                    </div>
                </div>
            </div>
            <SearchBar />

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img position-relative overflow-hidden p-5 pe-0">
                                <Image className="img-fluid w-100" src="/img/kitchenset-01.jpg" width={486} height={486} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="mb-4">#1 Kitchen Set Pop Art</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>
                            <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="mb-4">#2 Kitchen Set Scandinavia</h1>
                            <p className="mb-4">identik dengan kesan bersih dan alami.Tidak ada banyak dekorasi dalam desain interior ini.</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>
                            <a className="btn btn-primary py-3 px-5 mt-3" href="">Info Lebih Lanjut</a>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img position-relative overflow-hidden p-5 pe-0">
                                <Image className="img-fluid w-100" src="/img/kitchenset-02.jpg" width={486} height={486} alt="  " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default KitchenSetPage;
