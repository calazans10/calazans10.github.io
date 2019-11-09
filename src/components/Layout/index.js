import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global } from "@emotion/core"

import Header from "../header"
import { GlobalStyles, PageContainer, Main } from "./style"

function Layout({ children }) {
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
    <>
      <Global styles={GlobalStyles} />
      <PageContainer>
        <Header siteAuthorName={site.siteMetadata.authorName} />
        <Main>{children}</Main>
      </PageContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
