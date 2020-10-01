import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Page from "../components/page"
import SEO from "../components/seo"

const Inside: React.FC<PageProps> = ({ path }) => (
  <Layout>
    <SEO title="Inside Page" />
    <div>
      <Nav />
      <Page title="Inside Page">
        <div className="container">
          <p>This section will contain custom queries to the data graph.</p>
          <Link to="/messenger">Go back to the messenger</Link>
        </div>
      </Page>
    </div>
  </Layout>
)

export default Inside
