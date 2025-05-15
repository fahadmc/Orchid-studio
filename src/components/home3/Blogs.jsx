const Blogs = () => {
  return (
    <section className="zirox-blog zirox-section">
      <div className="container">
        {/* <h6 data-aos="fade-up" className="text-center">
          From The Blog
        </h6> */}
        <h2 data-aos="fade-up" data-aos-delay="300" className="text-center">
          Our Latest Wedding Photos
        </h2>
        <div className="row">
          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-4">
            <div className="zirox-blog__post ">
              <div className="zirox-blog__post-thumbnail">
                <a href="#" target="_blank">
                  <img src="/img/blog/thumbnail-1.png" alt="Post Thumbnail" />
                </a>
              </div>
              <div className="zirox-blog__post-body">
                <div className="zirox-blog__post-body-tags">
                  <div className="zirox-blog__post-body-tags__author">
                    <div className="d-flex align-items-center gap-1">
                      <i className="flaticon-round-account-button-with-user-inside"style={{ color: "#47221A" }}></i>
                      <p className=""style={{ color: "#47221A" }}>Admin</p>
                    </div>
                  </div>
                  <div className="zirox-blog__post-body-tags__comment">
                    <div className="d-flex align-items-center gap-1">
                      <i className="flaticon-bubble-chat"style={{ color: "#47221A" }}></i>
                      <p className=""style={{ color: "#47221A" }}>2 Comment</p>
                    </div>
                  </div>
                </div>
                <h3 className="zirox-blog__post-body-title">
                  <a href="" title="Post title">
                The Different Types of Photo Backups
                  </a>
                </h3>
                <p className="zirox-blog__post-body-desc">Keep Your Precious Shots Safe — Every Time You Click the Shutter.</p>
                <a href="#" target="_blank" className="zirox-blog__post-body-read-more"style={{ color: "#47221A" }}>
                  Read More <i className="flaticon-right-arrow-2"style={{ color: "#47221A" }}></i>
                </a>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="col-12 col-md-6 col-lg-4">
            <div className="zirox-blog__post ">
              <div className="zirox-blog__post-thumbnail">
                <a href="#" target="_blank">
                  <img src="/img/blog/thumbnail-2.png" alt="Post Thumbnail" />
                </a>
              </div>
              <div className="zirox-blog__post-body">
                <div className="zirox-blog__post-body-tags">
                  <div className="zirox-blog__post-body-tags__author">
                    <div className="d-flex align-items-center gap-1">
                      <i className="flaticon-round-account-button-with-user-inside" style={{ color: "#47221A" }}></i>
                      <p className="" style={{ color: "#47221A" }}>Admin</p>
                    </div>
                  </div>
                  <div className="zirox-blog__post-body-tags__comment">
                    <div className="d-flex align-items-center gap-1">
                      <i className="flaticon-bubble-chat"style={{ color: "#47221A" }}></i>
                      <p className=""style={{ color: "#47221A" }}>2 Comment</p>
                    </div>
                  </div>
                </div>
                <h3 className="zirox-blog__post-body-title">
                  <a href="" title="Post title">
             Editing Like a Pro: Post-Processing Tips 
                  </a>
                </h3>
                <p className="zirox-blog__post-body-desc"> color correction, cropping, and retouching can elevate your photography portfolio.</p>
                <a href="#" target="_blank" className="zirox-blog__post-body-read-more"style={{ color: "#47221A" }}>
                  Read More <i className="flaticon-right-arrow-2"style={{ color: "#47221A" }}></i>
                </a>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="600" className="col-12 col-md-6 col-lg-4">
            <div className="zirox-blog__post ">
              <div className="zirox-blog__post-thumbnail">
                <a href="#" target="_blank">
                  <img src="/img/blog/thumbnail-3.png" alt="Post Thumbnail" />
                </a>
              </div>
              <div className="zirox-blog__post-body">
                <div className="zirox-blog__post-body-tags">
                  <div className="zirox-blog__post-body-tags__author">
                    <div className="d-flex align-items-center gap-1">
                      <i className="flaticon-round-account-button-with-user-inside"style={{ color: "#47221A" }}></i>
                      <p className=""style={{ color: "#47221A" }}>Admin</p>
                    </div>
                  </div>
                  <div className="zirox-blog__post-body-tags__comment">
                    <div className="d-flex align-items-center gap-1">
                      <i className="flaticon-bubble-chat"style={{ color: "#47221A" }}></i>
                      <p className=""style={{ color: "#47221A" }}>2 Comment</p>
                    </div>
                  </div>
                </div>
                <h3 className="zirox-blog__post-body-title">
                  <a href="" title="Post title">
                 Mastering Light: The Basics of Natural 
                  </a>
                </h3>
                <p className="zirox-blog__post-body-desc">Explore how natural and studio lighting shape mood,</p>
                <a href="#" target="_blank" className="zirox-blog__post-body-read-more"style={{ color: "#47221A" }}>
                  Read More <i className="flaticon-right-arrow-2"style={{ color: "#47221A" }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
