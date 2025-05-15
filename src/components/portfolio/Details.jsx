const Details = () => {
  return (
    <section className="zirox-portfolio-detail zirox-section">
      <div className="container">
        <div className="zirox-portfolio-detail-items">
          <div className="zirox-portfolio-detail-items-item">
            <div className="zirox-portfolio-detail-items-item-img">
              <img src="/img/portfolio/portfolio-detail.png" alt="Business Analysis" />
            </div>
            <div className="zirox-portfolio-detail-items-item-info ">
              <div className="row align-items-center">
                <div className="col-6 col-md line">
                  <div className="zirox-portfolio-detail-items-item-info-box">
                    <p>Clients:</p>
                    <h4 className=""style={{color:"#47221A"}}>__Rafi & hajisha</h4>
                  </div>
                </div>
                <div className="col-6 col-md text-md-center line">
                  <div className="zirox-portfolio-detail-items-item-info-box">
                    <p>Category:</p>
                    <h4 className=""style={{color:"#47221A"}}>Weddin Photography</h4>
                  </div>
                </div>
                <div className="col-6 col-md text-md-center line">
                  <div className="zirox-portfolio-detail-items-item-info-box">
                    <p>Date:</p>
                    <h4 className=""style={{color:"#47221A"}}>20 may, 2024</h4>
                  </div>
                </div>
                <div className="col-6 col-md">
                  <ul className="zirox-portfolio-detail-items-item-info-socials">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="flaticon-facebook-app-symbol"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/">
                        <i className="flaticon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://in.pinterest.com/">
                        <i className="flaticon-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/orchidweddingstudio?igsh=MW96enA4cDVmZ2hr">
                        <i className="flaticon-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 className="zirox-portfolio-detail-items-item-title">Photographer</h3>
            <p className="zirox-portfolio-detail-items-item-text">
              Passionate and creative professional photographer with a keen eye for detail. Specializes in portrait, event, lifestyle, and product photography. 3+ years of hands-on experience capturing compelling visual stories. Proficient in using DSLR and mirrorless systems (Canon, Nikon, Sony). Expert in Adobe Lightroom and Photoshop for
              high-end photo editing.
            </p>

            <p className="zirox-portfolio-detail-items-item-text">
              Adept at planning, styling, and directing photoshoots for diverse clients. Strong understanding of natural and studio lighting techniques. Successfully completed over 100 client projects with 5-star feedback. Experienced in working with models, brands, couples, and families. Produces high-resolution digital assets optimized for print
              and web. Delivers fast turnaround with consistent quality and professionalism. Knowledgeable in image licensing, copyright, and digital rights. Excellent communication skills to bring client visions to life. Always exploring new techniques and visual trends in photography. Committed to capturing timeless moments with emotional impact.
            </p>
          </div>
        </div>
        <div className="zirox-portfolio-detail-btns">
          <a href="#" className="zirox-portfolio-detail-btns-prev">
            <i className="flaticon-left-arrow"></i> Previous
          </a>
          <a href="#" className="zirox-portfolio-detail-btns-next">
            Next<i className="flaticon-right-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Details;
