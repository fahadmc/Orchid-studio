import { Link } from "react-router-dom";

const AboutUs3 = () => {
  return (
    <section className="zirox-about zirox-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="zirox-about__wrapper">
              <div data-aos="fade-up" className="zirox-about__left ">
                <div data-aos="fade-up" data-aos-delay="300" className="zirox-about__left-exp">
                  <h3>30</h3>
                  <p>Years of Experience</p>
                </div>
                <div className="zirox-about__left__bg__img overflow-hidden"></div>
                <div className="zirox-about__left__front__img overflow-hidden"></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="zirox-about__right ">
              <h6 className="h6" style={{Color:"#47221A"}}>
                Get To Know Us
              </h6>
              <h2 data-aos="fade-up" data-aos-delay="400">
                Leading The Best Digital Photography
              </h2>
              <p data-aos="fade-up" data-aos-delay="500" className="zirox-about__right-text">
                Leading the Best Digital Photography means more than just taking pictures — it’s about ng stories. We blend creativity with cutting-edge technology to deliver stunning visuals that speak volumes. Every shot is thoughtfully composed, professionally edited, and emotionally resonant. From portraits to landscapes, events to
                branding — our lens sees what others miss. With a passion for perfection and a commitment to innovation, we set new standards in the industry. Join us on a journey where every frame is a masterpiece, and every moment is preserved in its finest form.
              </p>
              <div className="row align-items-center mb-3">
                <div className="col-12 col-md-6">
                  <div data-aos="fade-up" data-aos-delay="600" className="zirox-box">
                    <div className="zirox-box-img"style={{backgroundColor:"#47221A"}}>
                      <i className="flaticon-group"></i>
                    </div>
                    <h3>Digital Reality</h3>
                    <p>Digital photography transforms reality into timeless visual stories. With every click, we capture moments as they truly are — vivid, raw, and real.</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div data-aos="fade-up" data-aos-delay="700" className="zirox-box">
                    <div className="zirox-box-img"style={{backgroundColor:"#47221A"}}>
                      <i className="flaticon-watch-tv"></i>
                    </div>
                    <h3>Online Magic</h3>
                    <p>Experience the magic of photography brought to life online. From lens to screen, we turn moments into captivating digital art.</p>
                  </div>
                </div>
              </div>
              <Link data-aos="fade-up" data-aos-delay="800" to="/contact" className="zirox-button"style={{borderRadius:"30px"}}>
                Get Solution
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs3;
