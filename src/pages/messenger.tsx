// If you don't want to use TypeScript you can delete this file!
import React from "react";
import { PageProps, graphql, navigate} from "gatsby"

import Nav from "../components/nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Messenger: React.FC<PageProps<DataProps>> = ({ path }) => {
  
 
  return (
  <Layout>
    <SEO title="TextKit" />
    <Nav />
    
  </Layout>
  )
}

export default Messenger;


