import React from "react"
import "./work.scss"
import { Link } from "gatsby"

const Work = () => (
  <section className="Work">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h2 className="section-title" data-aos="fade-up">
            Our Work
          </h2>
          <Link to="/work/lineage-journey" className="Work_list" data-aos="fade-up">
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
              UI/UX, Mobile, Front-end, CMS
            </div>
          </Link>
          <Link to="/work/cryptox" className="Work_list" data-aos="fade-up">
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
              UI/UX, Front-end
            </div>
          </Link>
          <Link to="/work" className="Work_list" data-aos="fade-up">
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
              UI/UX, Front-end, CMS
            </div>
          </Link>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Link to="/work/youth-summit" className="Work_list" data-aos="fade-up">
                <div className="media-container">
                  <img src="/images/Youth-Summit.png" alt="" />
                  <span className="open-case">
                    open <br />
                    case
                  </span>
                </div>
                <div className="Work_list_title">Youth Summit</div>
                <div className="Work_list_description">
                  UI/UX, Front-end, CMS
                </div>
              </Link>
              <Link
                to="/work/childrens-century-classics"
                className="Work_list"
                data-aos="fade-up"
              >
                <div className="media-container">
                  <img src="/images/Children's-Century.png" alt="" />
                  <span className="open-case">
                    open <br />
                    case
                  </span>
                </div>
                <div className="Work_list_title">
                  Children's Century Classics
                </div>
                <div className="Work_list_description">
                  UI/UX, Mobile App, Front-end, CMS
                </div>
              </Link>
              <Link to="/work/fhcb" className="Work_list" data-aos="fade-up">
                <div className="media-container">
                  <img src="/images/Family-Home-Christian-Books.png" alt="" />
                  <span className="open-case">
                    open <br />
                    case
                  </span>
                </div>
                <div className="Work_list_title">
                  Family Home Christian Books
                </div>
                <div className="Work_list_description">
                  UI/UX Design
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-sm-12 mt185">
              <Link to="/work/corniche" className="Work_list" data-aos="fade-up">
                <div className="media-container">
                  <img src="/images/Corniche-Watches.png" alt="" />
                  <span className="open-case">
                    open <br />
                    case
                  </span>
                </div>
                <div className="Work_list_title">Corniche Watches</div>
                <div className="Work_list_description">
                  UI/UX, Fron-end, CMS
                </div>
              </Link>
              <Link
                to="/work/strategy-prep"
                className="Work_list"
                data-aos="fade-up"
              >
                <div className="media-container">
                  <img src="/images/LSAT-Preparation.png" alt="" />
                  <span className="open-case">
                    open <br />
                    case
                  </span>
                </div>
                <div className="Work_list_title">LSAT Preparation</div>
                <div className="Work_list_description">
                  UI/UX Design
                </div>
              </Link>
              <Link
                to="/work/plate-app"
                className="Work_list mb123"
                data-aos="fade-up"
              >
                <div className="media-container">
                  <img src="/images/Plate-App.png" alt="" />
                  <span className="open-case">
                    open <br />
                    case
                  </span>
                </div>
                <div className="Work_list_title">Plate App</div>
                <div className="Work_list_description">
                  UI/UX, Mobile, CMS
                </div>
              </Link>
              <Link to="/work" className="see_more">
                See more works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Work
