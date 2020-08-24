import React from "react"
import "./work.scss"

const Work = () => (
  <section className="Work">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <span className="section-title" data-aos="fade-up">
            Our Work
          </span>
          <a href="#" className="Work_list" data-aos="fade-up">
            <video
              muted
              playsInline
              crossOrigin
              loop
              poster
              preload="auto"
              autoPlay
            >
              <source src="videos/Lineage.webm" type="video/webm" />
            </video>
            <div className="Work_list_title">Lineage Journey</div>
            <div className="Work_list_description">
              UX/UI, Mobile, Fron-end, Back-end
            </div>
          </a>
          <a href="#" className="Work_list" data-aos="fade-up">
            <video
              muted
              playsInline
              crossOrigin
              loop
              poster
              preload="auto"
              autoPlay
            >
              <source src="videos/Cryptox.webm" type="video/webm" />
            </video>
            <div className="Work_list_title">Cryptox</div>
            <div className="Work_list_description">
              UX/UI, Mobile, Fron-end, Back-end
            </div>
          </a>
          <a href="#" className="Work_list" data-aos="fade-up">
            <video
              muted
              playsInline
              crossOrigin
              loop
              poster
              preload="auto"
              autoPlay
            >
              <source src="videos/Newstart.webm" type="video/webm" />
            </video>
            <div className="Work_list_title">Newstart</div>
            <div className="Work_list_description">
              UX/UI, Mobile, Fron-end, Back-end
            </div>
          </a>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <a href="#" className="Work_list" data-aos="fade-up">
                <div className="media-container">
                  <img src="images/Youth-Summit.png" alt="" />
                  <span className="open-case">
                    open <br />
                    case
                  </span>
                </div>
                <div className="Work_list_title">Youth Summit</div>
                <div className="Work_list_description">
                  UX/UI, Mobile, Fron-end, Back-end
                </div>
              </a>
              <a href="#" className="Work_list" data-aos="fade-up">
                <div className="media-container">
                  <img src="images/Children's-Century.png" alt="" />
                  <span className="open-case">
                    open <br />
                    case
                  </span>
                </div>
                <div className="Work_list_title">
                  Children's Century ClassNameics
                </div>
                <div className="Work_list_description">
                  UX/UI, Mobile, Fron-end, Back-end
                </div>
              </a>
              <a href="#" className="Work_list" data-aos="fade-up">
                <div className="media-container">
                  <img src="images/Family-Home-Christian-Books.png" alt="" />
                  <span className="open-case">
                    open <br />
                    case
                  </span>
                </div>
                <div className="Work_list_title">
                  Family Home Christian Books
                </div>
                <div className="Work_list_description">
                  UX/UI, Mobile, Fron-end, Back-end
                </div>
              </a>
            </div>
            <div className="col-md-6 col-sm-12 mt185">
              <a href="#" className="Work_list" data-aos="fade-up">
                <div className="media-container">
                  <img src="images/Corniche-Watches.png" alt="" />
                  <span className="open-case">
                    open <br />
                    case
                  </span>
                </div>
                <div className="Work_list_title">Corniche Watches</div>
                <div className="Work_list_description">
                  UX/UI, Mobile, Fron-end, Back-end
                </div>
              </a>
              <a href="#" className="Work_list" data-aos="fade-up">
                <div className="media-container">
                  <img src="images/LSAT-Preparation.png" alt="" />
                  <span className="open-case">
                    open <br />
                    case
                  </span>
                </div>
                <div className="Work_list_title">LSAT Preparation</div>
                <div className="Work_list_description">
                  UX/UI, Mobile, Fron-end, Back-end
                </div>
              </a>
              <a href="#" className="Work_list mb123" data-aos="fade-up">
                <div className="media-container">
                  <img src="images/Plate-App.png" alt="" />
                  <span className="open-case">
                    open <br />
                    case
                  </span>
                </div>
                <div className="Work_list_title">Plate App</div>
                <div className="Work_list_description">
                  UX/UI, Mobile, Fron-end, Back-end
                </div>
              </a>
              <a href="#" className="see_more">
                See more works
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Work
