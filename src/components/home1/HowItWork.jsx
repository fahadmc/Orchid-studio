const HowItWork = () => {
  return (
    <section className="zirox-how-it-work zirox-section">
      <div className="container">
        <h6 data-aos="fade-up" className="text-center">
          {/* How IT Works */}
        </h6>
        <h2 data-aos="fade-up" data-aos-delay="300" className="text-center">
          Our Wedding Photography Workflow
        </h2>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <a data-aos="fade-up" href="#">
              <div className="zirox-how-it-work-item ">
                <div className="zirox-how-it-work-item-img">
                  <img src="/img/how-it-work/work-1.png" alt="Web Development" />
                </div>
                <div className="zirox-how-it-work-item-icon">
                  <i className="flaticon-back-end"></i>
                </div>
                <h6 className="text-center"style={{color:"#47221A"}}>Step 01</h6>
                <h3 className="text-center"style={{color:"gray"}}>Pre-Wedding Consultation</h3>
                <p className="text-center"style={{color:"#47221A"}}>We get to know your story, style, and vision. Every detail matters to plan the perfect shot list.</p>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <a data-aos="fade-up" data-aos-delay="300" href="#">
              <div className="zirox-how-it-work-item ">
                <div className="zirox-how-it-work-item-img">
                  <img src="/img/how-it-work/work-2.png" alt="Engine Optimization" />
                </div>
                <div className="zirox-how-it-work-item-icon">
                  <i className="flaticon-planning-1"></i>
                </div>
                <h6 className="text-center"style={{color:"#47221A"}}>Step 02</h6>
                <h3 className="text-center"style={{color:"gray"}}>The Big Day Coverage</h3>
                <p className="text-center"style={{color:"#47221A"}}>From quiet moments to grand celebrations, we’re there. Capturing genuine emotions as your day unfolds naturally.</p>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <a data-aos="fade-up" data-aos-delay="600" href="#">
              <div className="zirox-how-it-work-item ">
                <div className="zirox-how-it-work-item-img">
                  <img src="/img/how-it-work/work-3.png" alt="Design & Concept" />
                </div>
                <div className="zirox-how-it-work-item-icon">
                  <i className="flaticon-development"></i>
                </div>
                <h6 className="text-center" style={{color:"#47221A"}}>Step 03</h6>
                <h3 className="text-center"style={{color:"gray"}}> Post-Processing & Delivery</h3>
                <p className="text-center"style={{color:"#47221A"}}>Each image is carefully edited with our signature touch. Your love story delivered as timeless, high-quality memories.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
