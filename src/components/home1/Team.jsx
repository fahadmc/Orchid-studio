const TeamMembers = () => {
  return (
    <section className="zirox-team zirox-team--home-2 zirox-section">
      <div className="container">
        <h6 data-aos="fade-up" className="text-center">
          {/* Team Member */}
        </h6>
        <h2 data-aos="fade-up" data-aos-delay="300" className="text-center "style={{color:"#47221A"}}>
          Our Experience & Expert Team Members
        </h2>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div data-aos="fade-up" className="zirox-team-item ">
              <img src="/img/team/member-2.png" alt="Member-1" />
              <div className="zirox-team-item__info"style={{backgroundColor:"#47221A"}}>
                <p className="text-center"style={{color:"white"}}>Shamsu</p>
                <h3 className="text-center"style={{color:"white"}}>Senior Photographer</h3>
              </div>
            </div>
          </div>
          {/* <div className="col-12 col-md-6 col-lg-3">
            <div data-aos="fade-up" data-aos-delay="300" className="zirox-team-item ">
              <img src="/img/team/member-5.png" alt="Member-2" />
              <div className="zirox-team-item__info"style={{backgroundColor:"#47221A"}}>
                <p className="text-center"style={{color:"white"}}>Shanoop</p>
                <h3 className="text-center"style={{color:"white"}}>Senior Photographer</h3>
              </div>
            </div>
          </div> */}
          {/* <div className="col-12 col-md-6 col-lg-3">
            <div data-aos="fade-up" data-aos-delay="600" className="zirox-team-item ">
              <img src="/img/team/member-6.png" alt="Member-3" />
              <div className="zirox-team-item__info"style={{backgroundColor:"#47221A"}}>
                <p className="text-center"style={{color:"white"}}>Ashkkar</p>
                <h3 className="text-center"style={{color:"white"}}>Senior Designer</h3>
              </div>
            </div>
          </div> */}
          {/* <div className="col-12 col-md-6 col-lg-3">
            <div data-aos="fade-up" data-aos-delay="900" className="zirox-team-item ">
              <img src="/img/team/member-7.png" alt="Member-3" />
              <div className="zirox-team-item__info"style={{backgroundColor:"#47221A"}}>
                <p className="text-center"style={{color:"white"}}>Meharoof</p>
                <h3 className="text-center"style={{color:"white"}}>Designer</h3>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
