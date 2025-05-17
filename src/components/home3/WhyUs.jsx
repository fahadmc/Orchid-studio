import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
const WhyUs = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="zirox-choose-us zirox-section">
        <div className="zirox-choose-us__vector">
          {/* <img className="zirox-choose-us__vector-one" src="/img/choose-us/choose-us-bg" alt="Vector" /> */}
          {/* <img className="zirox-choose-us__vector-two" src="/img/choose-us/choose-us-vector-2.png" alt="Vector" />
          <img className="zirox-choose-us__vector-three" src="/img/choose-us/choose-us-vector-3.png" alt="Vector" /> */}
        </div>
        <div className="zirox-choose-us__wrapper">
          <div className="zirox-choose-us__wrapper__con">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <div className="zirox-choose-us__left">
                  <img src="/img/choose-us/choose-us-left.png" alt="Choose Us" />
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="zirox-choose-us__right ">
                  <h6 data-aos="fade-up"style={{color:"gray"}}>Why Choose Us</h6>
                  <h2 data-aos="fade-up" data-aos-delay="200" className="text-white">
                   Our Photography Solutions
                  </h2>
                  <p data-aos="fade-up" data-aos-delay="400">
                   Delivering tailored services that meet your creative and professional needs.
                  </p>
                  <div data-aos="fade-up" className="zirox-choose-us__right__item">
                    <div className="zirox-choose-us__right__item__img"style={{backgroundColor:"#47221A"}}>
                      <i className="flaticon-team"></i>
                    </div>
                    <div className="zirox-choose-us__right__item-text">
                      <h3 className="text-white">Creative Photo Concepts</h3>
                      <p>We design compelling visual stories that capture your brand and essence.</p>
                    </div>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="300" className="zirox-choose-us__right__item">
                    <div className="zirox-choose-us__right__item__img"style={{backgroundColor:"#47221A"}}>
                      <i className="flaticon-planning-2"></i>
                    </div>
                    <div className="zirox-choose-us__right__item-text">
                      <h3 className="text-white">Visual Data & Insights</h3>
                      <p>We analyze visual trends and audience engagement to enhance your portfolio impact.</p>
                    </div>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="600" className="zirox-choose-us__right__item">
                    <div className="zirox-choose-us__right__item__img"style={{backgroundColor:"#47221A"}}>
                      <i className="flaticon-team"></i>
                    </div>
                    <div className="zirox-choose-us__right__item-text">
                      <h3 className="text-white">Secure Image Management</h3>
                      <p>agencies are typically created to address particular need.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container zirox-choose-us__experience">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <div className="zirox-choose-us__experience__left">
                  <div className="zirox-choose-us__experience__left__img">
                    <img src="/img/choose-us/" alt="" />
                    <div className="zirox-choose-us__experience__left__img__pause">
                      <div className="zirox-choose-us__experience__left__img__pause__icon ">
                        <span onClick={() => setOpen(true)}
                     
                         className="zirox-choose-us__experience__left__img__pause__icon__wrapper cursor-pointer popup-youtube">
                          <i className="flaticon-pause"style={{backgroundColor:"#47221A"}}></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="zirox-choose-us__experience__left__text">
                    <h2 className="text-white" style={{marginTop:"50px"}}>25+ Years Experience For Photographer Field</h2>
    <Link to="/Services">  
    <button className="zirox-button"style={{borderRadius:"30px"}}>View More</button>
    </Link>
                   

                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="zirox-choose-us__experience__right">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="zirox-choose-us__experience__right-box">
                        <h2>
                          <span className="counter">40</span>+
                        </h2>
                        <p>Photo Designers & Photographers</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="zirox-choose-us__experience__right-box">
                        <h2>
                          <span className="counter">500</span>+
                        </h2>
                        <p>Project Completed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={open} videoId="EGTZOrt34Eg" onClose={() => setOpen(false)} />
    </>
  );
};

export default WhyUs;
