import { useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Footer = () => {
  const images = ["/img/footer/footer-img-1.png", "/img/footer/footer-img-2.png", "/img/footer/footer-img-3.png", "/img/footer/footer-img-4.png", "/img/footer/footer-img-5.png", "/img/footer/footer-img-6.png"];

  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <footer className="zirox-footer zirox-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-3">
            <div className="zirox-footer__about">
              <img src="/img/footer/footer-logo.png" alt="Logo" />
              <p className="zirox-footer__about-text">Welcome to Our Photography Studio – Where Every Moment Becomes a Memory Because life moves fast, but a beautiful photo lasts forever.</p>
              <ul className="zirox-footer__about__socials">
                <li>
                  <a href="https://x.com/">
                    <i className="flaticon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="flaticon-facebook-logo-in-circular-shape"></i>
                  </a>
                </li>
                <li>
                  <a href="https://in.pinterest.com/">
                    <i className="flaticon-pinterest"></i>
                  </a>
                </li>
                 <li>
                    <a href="https://www.instagram.com/orchidweddingstudio/">
                      <i className="flaticon-instagram"></i>
                    </a>
                  </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-2">
            <div className="zirox-footer__explore">
              <h3>Explore</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Photo Journal</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-3">
            <div className="zirox-footer__gallery">
              <h3>Gallery</h3>
              <div className="row">
                {images.map((img, idx) => (
                  <div key={idx} className="col-4 mb-3">
                    <img
                      src={img}
                      alt={`Image ${idx + 1}`}
                      onClick={() => {
                        setIndex(idx);
                        setIsOpen(true);
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                ))}

                <Lightbox open={isOpen} close={() => setIsOpen(false)} index={index} slides={images.map((src) => ({ src }))} />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-4">
            <div className="zirox-footer__news-letter">
              <h3>Newsletter</h3>
              <form action="/" method="POST" id="news-letter-form">
                <input type="email" name="news-letter" id="news-letter" placeholder="Email address" required className=""style={{backgroundColor:"#76463c"}} />
                <button type="submit" id="news-letter-submit">
                  <i className="flaticon-paper-plane"></i>
                </button>
              </form>
              <ul>
                <li>
                  <i className="flaticon-check-mark"></i>
                  Every Week Updates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="zirox-footer__bar">
        <div className="container">
          <div className="zirox-footer__bar-content">
            <a href="#" className="zirox-footer__bar-content-scroll-top scrollUp">
              <i className="flaticon-up-arrow"></i>
            </a>
            <p>&copy; Copyright {new Date().getFullYear()}  ORCHID-Wedding-Photography</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
