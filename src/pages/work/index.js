import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import "./work.scss"

const Work = () => (
  <Layout>
    <SEO title="Our Work Portfolio" />
    <section className="Work work-inner">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="container-fluid">
              <h1>Work</h1>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <Link
                    to="/work/youth-summit"
                    className="Work_list"
                    data-aos="fade-up"
                  >
                    <div className="media-container">
                      <img src="/images/Youth-Summit.png" alt="Youth Summit" />
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
                    to="/work/lineage-journey"
                    className="Work_list"
                    data-aos="fade-up"
                  >
                    <div className="media-container">
                      <img src="/images/Lineage-Journey.png" alt="Lineage Journey" />
                      <span className="open-case">
                        open <br />
                        case
                      </span>
                    </div>
                    <div className="Work_list_title">Lineage Journey</div>
                    <div className="Work_list_description">
                      UI/UX, Mobile, Front-end, CMS
                    </div>
                  </Link>
                  <Link to="/work/fhcb" className="Work_list" data-aos="fade-up">
                    <div className="media-container">
                      <img
                        src="/images/Family-Home-Christian-Books.png"
                        alt="Family Home Christian Books"
                      />
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
                  <Link
                    to="/work/childrens-century-classics"
                    className="Work_list"
                    data-aos="fade-up"
                  >
                    <div className="media-container">
                      <img src="/images/Children's-Century.png" alt="Children's Century Classics" />
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
                  <Link
                    to="/work/sweet-sanity"
                    className="Work_list"
                    data-aos="fade-up"
                  >
                    <div className="media-container">
                      <img src="/images/Sweet-Sanity.png" alt="Sweet Sanity" />
                      <span className="open-case">
                        open <br />
                        case
                      </span>
                    </div>
                    <div className="Work_list_title">Sweet Sanity</div>
                    <div className="Work_list_description">
                     UI/UX, Front-end, CMS
                    </div>
                  </Link>
                  <Link
                    to="/work/home-health-education"
                    className="Work_list"
                    data-aos="fade-up"
                  >
                    <div className="media-container">
                      <img
                        src="/images/Home-Health-Education-Service.png"
                        alt="Home Health Education Service"
                      />
                      <span className="open-case">
                        open <br />
                        case
                      </span>
                    </div>
                    <div className="Work_list_title">
                      Home Health Education Service
                    </div>
                    <div className="Work_list_description">
                      UI/UX, Front-end, Custom API
                    </div>
                  </Link>
                  <Link
                    to="/work/reach-nepal"
                    className="Work_list"
                    data-aos="fade-up"
                  >
                    <div className="media-container">
                      <img src="/images/Reach-Nepal.png" alt="Reach Nepal" />
                      <span className="open-case">
                        open <br />
                        case
                      </span>
                    </div>
                    <div className="Work_list_title">Reach Nepal</div>
                    <div className="Work_list_description">
                      UI/UX, Front-end, API Integration
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-sm-12 mt185">
                  <Link to="/work/corniche" className="Work_list" data-aos="fade-up">
                    <div className="media-container">
                      <img src="/images/Corniche-Watches.png" alt="Corniche Watches" />
                      <span className="open-case">
                        open <br />
                        case
                      </span>
                    </div>
                    <div className="Work_list_title">Corniche Watches</div>
                    <div className="Work_list_description">
                      UI/UX, Front-end, CMS
                    </div>
                  </Link>
                  <Link
                    to="/work/jeewit-bachan"
                    className="Work_list"
                    data-aos="fade-up"
                  >
                    <div className="media-container">
                      <img src="/images/Jeewit-Bachan.png" alt="Jeewit Bachan" />
                      <span className="open-case">
                        open <br />
                        case
                      </span>
                    </div>
                    <div className="Work_list_title">
                      Jeewit Bachan Mobile App
                    </div>
                    <div className="Work_list_description">
                      UI/UX, Mobile App, CMS
                    </div>
                  </Link>
                  <Link
                    to="/work/plate-app"
                    className="Work_list mb123"
                    data-aos="fade-up"
                  >
                    <div className="media-container">
                      <img src="/images/Plate-App.png" alt="Plate App" />
                      <span className="open-case">
                        open <br />
                        case
                      </span>
                    </div>
                    <div className="Work_list_title">Plate App</div>
                    <div className="Work_list_description">
                      UI/UX, Mobile, Custom API
                    </div>
                  </Link>
                  {/* <Link
                    to="/work/strategy-prep"
                    className="Work_list"
                    data-aos="fade-up"
                  >
                    <div className="media-container">
                      <img src="/images/LSAT-Preparation.png" alt="LSAT Preparation" />
                      <span className="open-case">
                        open <br />
                        case
                      </span>
                    </div>
                    <div className="Work_list_title">LSAT Preparation</div>
                    <div className="Work_list_description">
                      UI/UX Design
                    </div>
                  </Link> */}
                  <Link
                    to="/work/angelholm-brand-guidelines"
                    className="Work_list"
                    data-aos="fade-up"
                  >
                    <div className="media-container">
                      <img src="/images/Angelholm.png" alt="Angelholm Brand Guidlines" />
                      <span className="open-case">
                        open <br />
                        case
                      </span>
                    </div>
                    <div className="Work_list_title">
                      Angelholm Brand Guidelines
                    </div>
                    <div className="Work_list_description">
                      UI/UX Design
                    </div>
                  </Link>
                  <Link
                    to="/work/annual-report"
                    className="Work_list"
                    data-aos="fade-up"
                  >
                    <div className="media-container">
                      <img src="/images/Annual-Report.png" alt="Annual Report" />
                      <span className="open-case">
                        open <br />
                        case
                      </span>
                    </div>
                    <div className="Work_list_title">Annual Report</div>
                    <div className="Work_list_description">
                      Graphic Design
                    </div>
                  </Link>
                  <Link to="/work/cryptox" className="Work_list" data-aos="fade-up">
                    <div className="media-container">
                      <img src="/images/Cryptox.png" alt="Cryptox" />
                      <span className="open-case">
                        open <br />
                        case
                      </span>
                    </div>
                    <div className="Work_list_title">Cryptox</div>
                    <div className="Work_list_description">
                      UI/UX, Front-end
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Work
