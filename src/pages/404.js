import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container-fluid not-found">
      <div className="row justify-content-center">
        <div className="col-10">
          <img data-aos="fade-up" src="/images/404.png" alt="404" />
          <h1 data-aos="fade-up" data-aos-duration="800">
            Whoops, that page is gone.
          </h1>
          <a
            href=""
            className="back-btn"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <i className="arr-left"></i>Go Back
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
