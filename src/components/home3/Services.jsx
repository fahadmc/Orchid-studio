import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
const PopularServices = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="zirox-services zirox-section">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-6 col-lg">
              <div data-aos="fade-up" className="zirox-services-box ">
                <div className="zirox-services-box__img"style={{backgroundColor:"#47221A"}}>
                  <i className="flaticon-software-development" ></i>
                </div>
                <h3>Consultation & Discovery</h3>
                <p>We understand your needs, goals, and vision to tailor the perfect solution.</p>
                {/* <a href="#" className="zirox-services-box-icon"style={{backgroundColor:"#47221A"}}>
                  <i className="flaticon-plus"></i>
                </a> */}
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg">
              <div data-aos="fade-up" data-aos-delay="300" className="zirox-services-box ">
                <div className="zirox-services-box__img"style={{backgroundColor:"#47221A"}}>
                  <i className="flaticon-marketing-strategy"></i>
                </div>
                <h3>Planning & Strategy</h3>
                <p>Our team crafts a clear plan using the best tools and creative direction.</p>
                {/* <Link to="/services-details" className="zirox-services-box-icon"style={{backgroundColor:"#47221A"}}>
                  <i className="flaticon-plus"></i>
                </Link> */}
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <div data-aos="fade-up" data-aos-delay="400" className="zirox-services-text ">
                <h6 className="popular">Popular Services</h6>
                <h2 className="text-white">Solution We provide Services</h2>
                <p>We provide tailored photography solutions that bring your vision to life.
From portraits to products, events to branding — we capture it all with precision.
Our expert editing and creative direction ensure every shot stands out.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <div data-aos="fade-up" data-aos-delay="500" className="zirox-services-video ">
                <img src="/img/services/service-img.png" alt="Video" />
                <div className="zirox-services-video__popup">
                  <span onClick={() => setOpen(true)} className="zirox-services-video__popup-img popup-youtube">
                    <span>
                      <i className="flaticon-play-button-arrowhead"></i>
                    </span>
                  </span>
                  <h3 className="text-white text-center">
                    Creative Visuals for Modern <br /> Photography
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg d-flex align-items-end">
              <div data-aos="fade-up" data-aos-delay="600" className="zirox-services-box ">
                <div className="zirox-services-box__img"style={{backgroundColor:"#47221A"}}>
                  <i className="flaticon-sketch"></i>
                </div>
                <h3>Execution & Delivery</h3>
                <p>We bring ideas to life with precision, quality, and attention to detail.</p>
                {/* <Link to="/services-details" className="zirox-services-box-icon"style={{backgroundColor:"#47221A"}}>
                  <i className="flaticon-plus"></i>
                </Link> */}
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg d-flex align-items-end">
              <div data-aos="fade-up" data-aos-delay="700" className="zirox-services-box ">
                <div className="zirox-services-box__img"style={{backgroundColor:"#47221A"}}>
                  <i className="flaticon-data-security"></i>
                </div>
                <h3>Support & Growth</h3>
                <p>Post-delivery, we provide ongoing support to help you grow and evolve.</p>
                {/* <Link to="/services-details" className="zirox-services-box-icon"style={{backgroundColor:"#47221A"}}>
                  <i className="flaticon-plus"></i>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={isOpen} videoId="EGTZOrt34Eg" onClose={() => setOpen(false)} />
    </>
  );
};

export default PopularServices;
