/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./page.css"

const Page = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query PageSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
    <div className="d_page">
      <Header siteTitle={title ? title : data.site.siteMetadata.title} />
        <main>{children}</main>
    </div>
    </>

  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node,
}

export default Page
