const WorkingProcess = () => {
  return (
    <section className="zirox-working-process zirox-section">
      <div className="container">
        <h6 data-aos="fade-up" className="text-center">
          {/* Working Process */}
        </h6>
        <h2 data-aos="fade-up" data-aos-delay="300" className="text-center text-white mx-auto">
          Crafting Digital photographer's Work
        </h2>
        <div className="row flex-row">
          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3">
            <div className="zirox-working-process-box">
              <div className="zirox-working-process-box__img">
                <i className="flaticon-global-management" style={{ transform: "scaleX(-1)" }}></i>
              </div>
              <h3 className="text-white mb-2">Working Process</h3>
              <p className="p1"style={{color:" rgb(61, 26, 26)"}}>Capturing moments with precision, creativity, and care.</p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="col-12 col-md-6 col-lg-3">
            <div className="zirox-working-process-box">
              <div className="zirox-working-process-box__img">
                <i className="flaticon-business"></i>
              </div>
              <h3 className="text-white mb-2">Crafting Visual </h3>
              <p className="p1"style={{color:" rgb(61, 26, 26)"}}> — we create images that tell your unique story.</p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" className="col-12 col-md-6 col-lg-3">
            <div className="zirox-working-process-box">
              <div className="zirox-working-process-box__img">
                <i className="flaticon-technical-service"></i>
              </div>
              <h3 className="text-white mb-2"> Digital Reality</h3>
              <p className="p1"style={{color:" rgb(61, 26, 26)"}}>In today’s digital world, your visuals are your voice.</p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="600" className="col-12 col-md-6 col-lg-3">
            <div className="zirox-working-process-box">
              <div className="zirox-working-process-box__img">
                <i className="flaticon-design"></i>
              </div>
              <h3 className="text-white mb-2">Studios & Services</h3>
              <p className="p1"style={{color:" rgb(61, 26, 26)"}}>Specializing in lifestyle and portrait photography.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
