/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import { em, rem } from "polished"

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
    <div
      css={css`
        margin: 0 auto;
        padding: ${rem("30px")} ${rem("20px")};
        @media (min-width: ${em("600px")}) {
          padding-right: ${rem("75px")};
          padding-left: ${rem("75px")};
        }
        @media (min-width: ${em("900px")}) {
          padding-right: ${rem("155px")};
          padding-left: ${rem("155px")};
        }
        @media (min-width: ${em("1200px")}) {
          display: flex;
          flex-direction: column;
          min-height: 100%;
          padding: 0;
        }
      `}
    >
      <Header siteAuthorName={site.siteMetadata.authorName} />
      <main
        css={css`
          margin-top: ${rem("50px")};
          @media (min-width: ${em("1200px")}) {
            display: flex;
            flex: 1;
            flex-direction: row;
            justify-content: center;
            margin-top: ${rem("90px")};
            padding-left: calc(50% - 555px);
            padding-right: calc(50% - 555px);
          }
        `}
      >
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
