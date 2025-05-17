import { Link } from "react-router-dom";

const ContactFormMap = () => {
  return (
    <section className="zirox-contact zirox-contact--single">
      <div className="zirox-contact__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4755.018334200917!2d76.18397491139409!3d10.86489578924466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cf3eeaa7a645%3A0x9ccc11bd51f03e42!2sorchid%20wedding%20studio!5e1!3m2!1sen!2sin!4v1747471747422!5m2!1sen!2sin"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>


        
      </div>
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="row">
          <div className="col-12 col-md-8 col-lg-4">
            <div className="zirox-contact__left">
              <div className="zirox-contact__left-box">
                <div className="zirox-contact__left-box-img">
                  <i className="flaticon-place" style={{color:"#47221A"}}></i>
                </div>
                <div className="zirox-contact__left-box-detail">
                  <h3>Address</h3>
                  <address>Orchid Wedding & Fation Studio,Koppam</address>
                </div>
              </div>
              <div className="zirox-contact__left-box">
                <div className="zirox-contact__left-box-img">
                  <i className="flaticon-call" style={{color:"#47221A"}}></i>
                </div>
                <div className="zirox-contact__left-box-detail">
                  <h3>Phone</h3>
                  <a href="tel:9447353947">9447353947</a>
                  {/* <a href="tel:882562562584">88 256 256 2584</a> */}
                </div>
              </div>
              <div className="zirox-contact__left-box">
                <div className="zirox-contact__left-box-img">
                  <i className="flaticon-open-mail-1" style={{color:"#47221A"}}></i>
                </div>
                <div className="zirox-contact__left-box-detail">
                  <h3>Email </h3>
                  <a href="email:Orcchid__wedding@gmail.com">Info@orchidweddingstudio.com</a>
                  {/* <a href="mailto:hello@ultradevs.com">hello@ultradevs.com</a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12  col-lg-8">
            <div className="zirox-contact__right">
              <div className="zirox-contact__right-form">
                <form action="/" method="POST" id="contact-form">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <input type="text" name="fullname" id="fullname" placeholder="Full Name" />
                    </div>
                    <div className="col-12 col-md-6">
                      <input type="email" name="email" id="email" placeholder="Email Address" />
                    </div>
                    <div className="col-12 col-md-6">
                      <input type="text" name="phone" id="phone" placeholder="Phone" />
                    </div>
                    <div className="col-12 col-md-6">
                      <input type="text" name="Subject" id="Subject" placeholder="Subject" />
                    </div>
                    <div className="col-12">
                      <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
                    </div>
                  </div>
                  {/* <button className="zirox-button">Send Message</button> */}
                     <div data-aos="fade-up" data-aos-delay="300" className=" text-center text-lg-end ">
                                 <Link to="/contact" className="zirox-button" style={{borderRadius:"30px"}}
                                 >
                                  Sen Message
                                 </Link>

 </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormMap;
