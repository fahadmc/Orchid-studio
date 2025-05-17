const Testimonial = () => {
  return (
    <section className="zirox-testimonials zirox-section">
      <div className="container">
        <div className="zirox-testimonials__header">
          <div>
            <h6 className="h6"style={{ Color: "#47221A" }}>Testimonials</h6>
            <h2 data-aos="fade-up" data-aos-delay="200">
              What They&apos;re Saying Happy Clients
            </h2>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <a  className="zirox-button"style={{borderRadius:"30px"}}>
              Client Feedback
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="zirox-testimonials__item ">
              <div className="zirox-testimonials__item-header">
                <div className="zirox-testimonials__item-header-img">
                  <img src="/img/testimonials/author-1.png" alt="Author" />
                  <span className="spam" style={{ backgroundColor: "#47221A" }}>
                    <i className="flaticon-left-quotes-sign"></i>
                  </span>
                </div>
                <div className="zirox-testimonials__item-header-stars" style={{ backgroundColor: "#47221A" }}>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                </div>
              </div>
              <p className="zirox-testimonials__item-text">
                A dream come true, in every frame, Each photo whispering joy by name. Moments frozen, time stands still, Echoes of laughter, hearts that thrill. Sunset glows and morning light, Memories dancing soft and bright. Smiles that spoke without a word, Feelings felt, though never heard. Every image, a journey back, To love and magic we
                never lack.{" "}
              </p>
              <div className="zirox-testimonials__item-author-info">
                <h3 className="text-center">__rafi & Hajisha </h3>
                {/* <h6 className="text-center">UI/UX Designer</h6> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="zirox-testimonials__item ">
              <div className="zirox-testimonials__item-header">
                <div className="zirox-testimonials__item-header-img">
                  <img src="/img/testimonials/author-2.png" alt="Author" />
                  <span className="spam" style={{ backgroundColor: "#47221A" }}>
                    <i className="flaticon-left-quotes-sign"></i>
                  </span>
                </div>
                <div className="zirox-testimonials__item-header-stars" style={{ backgroundColor: "#47221A" }}>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                </div>
              </div>
              <p className="zirox-testimonials__item-text">
                The video moved us, hearts undone, Emotions captured, every one. Tears welled up with every scene, Moments raw, pure, and serene. Laughter echoed, silence spoke, Love and joy in every stroke. Eyes met eyes, and smiles grew wide, A story told we couldn’t hide. So beautifully framed, so deeply true, A timeless treasure we’ll journey
                through.happy moments{" "}
              </p>
              <div className="zirox-testimonials__item-author-info">
                <h3 className="text-center">__ ajmal & binsiya</h3>
                {/* <h6 className="text-center">Ceo & Founder</h6> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="zirox-testimonials__item ">
              <div className="zirox-testimonials__item-header">
                <div className="zirox-testimonials__item-header-img">
                  <img src="/img/testimonials/author-3.png" alt="Author" />
                  <span className="spam" style={{ backgroundColor: "#47221A" }}>
                    <i className="flaticon-left-quotes-sign"></i>
                  </span>
                </div>
                <div className="zirox-testimonials__item-header-stars" style={{ backgroundColor: "#47221A" }}>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                </div>
              </div>
              <p className="zirox-testimonials__item-text">
                From the first shot to the very last, They turned each moment into a blast. With gentle care and thoughtful eyes, They framed our joy beneath the skies. Every click held warmth and grace, Capturing love in every face. We felt seen, cherished, and true, As if the world paused just for us two. Their lens told stories words could miss,
                A day wrapped in magic, sealed with bliss.{" "}
              </p>
              <div className="zirox-testimonials__item-author-info">
                <h3 className="text-center">__Pooja & Ritesh</h3>
                {/* <h6 className="text-center">Project Manager</h6> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
