import React from "react"
import "./work.scss"
import { Link } from "gatsby"
// Import Swiper React components
import SwiperCore, { Swiper, SwiperSlide, Scrollbar } from "swiper/react"
// Import Swiper styles
// Import Swiper styles
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/scrollbar/scrollbar.scss"

const Work = () => (
  <section className="Work">
    <div className="container-fluid row d-flex  flex-wrap">
      <div className="col">
        <h2 className="section-title " data-aos="fade-up">
          Portfolio
        </h2>
      </div>
      <div className="col see-more-wrapper">
        <Link to="/work" className="see_more">
          See more works
        </Link>
      </div>
    </div>

    <div className="col-lg-12">
      <Swiper spaceBetween={50} slidesPerView="auto">
        <SwiperSlide className="swiper-slider">
          <Link
            to="/work/lineage-journey"
            className="Work_list"
            data-aos="fade-up"
          >
            <video
              muted
              playsInline
              crossOrigin
              loop
              poster
              preload="auto"
              autoPlay
            >
              <source
                src="videos/Lineage.webm"
                type="video/webm"
                className="img-height"
              />
            </video>
            <div className="Work_list_title">Lineage Journey</div>
            <div className="Work_list_description">
              UI/UX, Mobile, Front-end, CMS
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-slider">
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
              <source
                src="videos/Cryptox.webm"
                type="video/webm"
                className="img-height"
              />
            </video>
            <div className="Work_list_title">Cryptox</div>
            <div className="Work_list_description">UI/UX, Front-end</div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-slider">
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
              <source
                src="videos/Newstart.webm"
                type="video/webm"
                className="img-height"
              />
            </video>
            <div className="Work_list_title">Newstart</div>
            <div className="Work_list_description">UI/UX, Front-end, CMS</div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-slider">
          <Link
            to="/work/youth-summit"
            className="Work_list"
            data-aos="fade-up"
          >
            <div className="media-container">
              <img
                src="/images/Youth-Summit.png"
                alt="Youth Summit"
                className="img-height"
              />
              <span className="open-case">
                open <br />
                case
              </span>
            </div>
            <div className="Work_list_title">Youth Summit</div>
            <div className="Work_list_description">UI/UX, Front-end, CMS</div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-slider">
          <Link
            to="/work/childrens-century-classics"
            className="Work_list"
            data-aos="fade-up"
          >
            <div className="media-container">
              <img
                src="/images/Children's-Century.png"
                alt="Children's Century Classics"
                height="700px"
                className="img-height"
              />
              <span className="open-case">
                open <br />
                case
              </span>
            </div>
            <div className="Work_list_title">Children's Century Classics</div>
            <div className="Work_list_description">
              UI/UX, Mobile App, Front-end, CMS
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-slider">
          <Link to="/work/fhcb" className="Work_list" data-aos="fade-up">
            <div className="media-container">
              <img
                src="/images/Family-Home-Christian-Books.png"
                alt="Family Home Christian Books"
                className="img-height"
                height="700px"
              />
              <span className="open-case">
                open <br />
                case
              </span>
            </div>
            <div className="Work_list_title">Family Home Christian Books</div>
            <div className="Work_list_description">UI/UX Design</div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-slider">
          <Link to="/work/corniche" className="Work_list" data-aos="fade-up">
            <div className="media-container">
              <img
                src="/images/Corniche-Watches.png"
                alt="Corniche Watches"
                className="img-height"
              />
              <span className="open-case">
                open <br />
                case
              </span>
            </div>
            <div className="Work_list_title">Corniche Watches</div>
            <div className="Work_list_description">UI/UX, Fron-end, CMS</div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-slider">
          <Link
            to="/work/plate-app"
            className="Work_list mb123"
            data-aos="fade-up"
          >
            <div className="media-container">
              <img
                src="/images/Plate-App.png"
                alt="Plate App"
                className="img-height"
              />
              <span className="open-case">
                open <br />
                case
              </span>
            </div>
            <div className="Work_list_title">Plate App</div>
            <div className="Work_list_description">UI/UX, Mobile, CMS</div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
)

export default Work
