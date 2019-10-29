import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Avatar from "../components/avatar"
import Biography from "../components/biography"
import SEO from "../components/seo"

const IndexPage = () => {
  const { site } = useStaticQuery(graphql`
    query SiteDescriptionQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO />
      <Avatar />
      <Biography siteDescription={site.siteMetadata.description} />
    </Layout>
  )
}

export default IndexPage
