const Contact = () => {
  return (
    <section className="zirox-contact zirox-section">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-12 col-md-7">
            <div className="zirox-contact__left ">
              <h6 className=""style={{color:"white"}}>Contact Us</h6>
              <h2 data-aos="fade-up" data-aos-delay="300" className="text-white">
                 Book a Photography Session
              </h2>
              <div className="zirox-contact__left__form">
                <form action="/" method="POST" id="contact-form">
                  <div data-aos="fade-up" data-aos-delay="600" className="row">
                    <div className="col-12 col-md-6">
                      <input type="text" name="name" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-12 col-md-6">
                      <input type="email" name="email" id="email" placeholder="Your Email Address" required />
                    </div>
                    <div className="col-12 col-md-6">
                      <input type="tel" name="phone" id="phone" placeholder="Your Phone" required />
                    </div>
                    <div className="col-12 col-md-6">
                      <input type="date" name="date" id="date" required />
                    </div>
                     <div className="col-12 col-md-6">
                      <input type="text" name="text" id="text" placeholder="Type of shoot" required />
                    </div>
                     <div className="col-12 col-md-6">
                      <input type="text" name="Additional Notes" id="Additional Notes" placeholder="Additional Notes" required />
                    </div>
                  
                  </div>
                  <button className="zirox-button" id="send-messagem" style={{borderRadius:"30px"}}>
                    Get Booking
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-3">
            <div className="zirox-contact__right">
              <img src="/img/contact/contact-right.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
