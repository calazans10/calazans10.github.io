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
import "./layout.scss"

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteAuthorNameQuery {
      site {
        siteMetadata {
          authorName
        }
      }
    }
  `)

  return (
    <div className="main-wrapper">
      <Header siteAuthorName={site.siteMetadata.authorName} />
      <main className="main-content">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
