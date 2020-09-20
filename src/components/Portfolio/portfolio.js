import React from "react"
import "./portfolio.scss"
import { Link } from "gatsby"

const Portfolio = ({
  projectName,
  projectCategory,
  projectSummary,
  projectLink,
  bannerImage,
  goalsContent,
  processImage,
  resultContent,
  techUsed,
  nextPage,
}) => {
  return (
    <section className="Portfolio">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-10 Portfolio_top" data-aos="fade-up">
            <ul>
              <li>{projectName}</li>
              <li>{projectCategory}</li>
            </ul>
            <h1>{projectSummary}</h1>
            {projectLink && <a href={projectLink}>Launch project</a>}
          </div>
          <div className="col-lg-12" data-aos="fade-up">
            <div className="Portfolio_banner">
              <img src={bannerImage} />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="Portfolio_goals d-flex" data-aos="fade-up">
              <h3>Goals</h3>
              <div className="Portfolio_goals_content">
                <p>{goalsContent}</p>
              </div>
            </div>
            <div className="Portfolio_process" data-aos="fade-up">
              <img src={processImage} />
            </div>
            <div className="Portfolio_goals d-flex" data-aos="fade-up">
              <h4>The result</h4>
              <div className="Portfolio_goals_content">
                <p>{resultContent}</p>
                <h5>Technology used</h5>
                <ul>
                  {techUsed?.map(tech => (
                    <li>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="d-flex justify-content-center mb200"
              data-aos="fade-up"
            >
              <Link to={nextPage} className="next">
                Next
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
