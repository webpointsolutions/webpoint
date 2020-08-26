import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container-fluid not-found">
      <div className="row justify-content-center">
        <div className="col-10">
          <img src="../../static/images/404.png" alt="404" />
          <h1>Whoops, that page is gone.</h1>
          <a href="" className="back-btn">
            <i className="arr-left"></i>Go Back
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
