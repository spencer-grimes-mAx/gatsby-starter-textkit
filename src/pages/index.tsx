// If you don't want to use TypeScript you can delete this file!
import React from "react";
import { PageProps, graphql } from "gatsby"

import Nav from "../components/nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Index: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  
  return (
  <Layout>
    <SEO title="TextKit" />
    <Nav />
  </Layout>
  )
}

export default Index;

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
