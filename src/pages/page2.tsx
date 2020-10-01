import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Page from "../components/page"
import SEO from "../components/seo"

const Page2: React.FC<PageProps> = ({ path }) => (
  <Layout>
    <SEO title="Page 2" />
    <div>
      <Nav />
      <Page title="Page 2">
        <div className="container">
          <p>This area contains other dynamic content.</p>
          <Link to="/messenger">Go back</Link>
        </div>
      </Page>
    </div>
    
  </Layout>
)

export default Page2
