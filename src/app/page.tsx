'use client'
import Image from "next/image";
import CarouselComponent from "./components/CarouselComponent";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <>

      {/* Header Start */}
      <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6 p-5 mt-lg-5">
            <h1 className="display-5 animated fadeIn mb-4">Find A <span className="text-primary">Interior Design</span> To Beutify Your Dream</h1>
            <p className="animated fadeIn mb-4 pb-2">Kami adalah penyedia jasa pembuatan maket, desain interior, gambar kerja, dan RAB dengan standar profesional. Fokus kami adalah membantu arsitek, kontraktor, dan pengembang menyampaikan visi proyek dengan visual yang memukau dan akurat.</p>
            <a href="" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Contact Us</a>
          </div>
          <div className="col-md-6 animated fadeIn">
            <CarouselComponent />
          </div>
        </div>
      </div>
      {/* Header End */}

      <SearchBar />

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
            <h1 className="mb-3">Layanan Kami</h1>
            <p>Kami menyediakan berbagai layanan untuk anda, dengan tenaga profesional dan berpengalaman kami siap membantu mewujudkan apa yang anda inginkan.</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <a className="cat-item d-block bg-light text-center rounded p-3" href="/service/design-interior">
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <Image className="img-fluid" src="/img/icon-design-interior.png" alt="Icon" width={45} height={45} />
                  </div>
                  <h6>Design Interior</h6>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <a className="cat-item d-block bg-light text-center rounded p-3" href="/service/sketch-2d-3d">
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <Image className="img-fluid" src="/img/icon-design-2d-3d.png" alt="Icon" width={45} height={45} />
                  </div>
                  <h6>Design 2D-3D</h6>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <a className="cat-item d-block bg-light text-center rounded p-3" href="/service/rendering">
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <Image className="img-fluid" src="/img/icon-design-2d-3d.png" alt="Icon" width={45} height={237} />
                  </div>
                  <h6>Rendering</h6>
                </div>
              </a>
            </div>

            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <a className="cat-item d-block bg-light text-center rounded p-3" href="/service/boq-rab">
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <Image className="img-fluid" src="/img/icon-rab-budget-planning.png" alt="Icon" width={45} height={45} />
                  </div>
                  <h6>BOQ - RAB</h6>
                </div>
              </a>
            </div>
            
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <a className="cat-item d-block bg-light text-center rounded p-3" href="/service/design-maket">
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <Image className="img-fluid" src="/img/icon-design-maket.png" alt="Icon" width={45} height={45} />
                  </div>
                  <h6>Maket</h6>
                </div>
              </a>
            </div>
            
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <a className="cat-item d-block bg-light text-center rounded p-3" href="/service/custom-furniture">
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <Image className="img-fluid" src="/img/icon-custom-furniture.png" alt="Icon" width={45} height={45} />
                  </div>
                  <h6>Custom Furniture</h6>
                </div>
              </a>
            </div>

            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <a className="cat-item d-block bg-light text-center rounded p-3" href="/service/renovasi-rumah">
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <Image className="img-fluid" src="/img/icon-renovasi-rumah-apartment.png" alt="Icon" width={45} height={45} />
                  </div>
                  <h6>Renovasi Hunian-Komersil</h6>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <a className="cat-item d-block bg-light text-center rounded p-3" href="/service/design-logo">
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <Image className="img-fluid" src="/img/icon-logo-design.png" alt="Icon" width={45} height={45} />
                  </div>
                  <h6>Design Logo</h6>
                </div>
              </a>
            </div>
            
          </div>
        </div>
      </div>

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <Image className="img-fluid w-100" src="/img/about.jpg" width={486} height={486} alt="" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">#1 Place To Find The Perfect Property</h1>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <p><i className="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
              <p><i className="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
              <p><i className="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>
              <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* <!-- Property List Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                <h1 className="mb-3">Our Portofolio</h1>
                <p>Berikut merupakan proyek-proyek yang tersebar di Indonesia dan pernah kita kerjakan, Bon
                  Perfumer, L`occitane dll</p>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href=""><Image className="img-fluid" src="/img/property-1.jpg" alt="" width={356} height={237} /></a>
                      <div
                        className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        Design Interior</div>
                      <div
                        className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                        Mall</div>
                    </div>
                    <div className="p-4 pb-0">
                      <h5 className="text-primary mb-3">$12,345</h5>
                      <a className="d-block h5 mb-2" href="">Venchi Redesign Beachwalk Mall</a>
                      <p><i className="fa fa-map-marker-alt text-primary me-2"></i>Kuta Bali, Indonesia</p>
                    </div>
                    <div className="d-flex border-top">
                      <small className="flex-fill text-center border-end py-2"><i
                        className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                      <small className="flex-fill text-center border-end py-2"><i
                        className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                      <small className="flex-fill text-center py-2"><i
                        className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Call to Action Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="bg-light rounded p-3">
            <div className="bg-white rounded p-4" style={{ border: "1px dashed rgba(0, 185, 142, 0.3)" }}>
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                  <Image className="img-fluid rounded w-100" src="/img/fotocontoh.jpg" alt="" width={493} height={345} />
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                  <div className="mb-4">
                    <h1 className="mb-3">Contact With Our Certified Agent</h1>
                    <p>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit
                      diam justo sed vero dolor duo.</p>
                  </div>
                  <a href="" className="btn btn-primary py-3 px-4 me-2"><i
                    className="fa fa-phone-alt me-2"></i>Make A Call</a>
                  <a href="" className="btn btn-dark py-3 px-4"><i className="fa fa-calendar-alt me-2"></i>Get
                    Appoinment</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Call to Action End --> */}

      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa-solid fa-arrow-up"></i></a>

      <a href="https://wa.me/6285777007002" className="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
        <img src="https://cdn-icons-png.flaticon.com/512/220/220236.png" alt="WhatsApp" />
        <span>Konsultasi Gratis</span>
      </a>

    </>
  );
}
