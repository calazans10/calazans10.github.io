import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import Avatar from "../components/Avatar"
import Biography from "../components/Biography"
import SEO from "../components/SEO"

function IndexPage() {
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
