import Avatar from "components/Avatar"
import Biography from "components/Biography"
import Layout from "components/Layout"
import SEO from "components/SEO"
import type { HeadFC, PageProps } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          authorName
          authorFullName
          description
        }
      }
    }
  `)

  return (
    <Layout siteAuthorName={data.site.siteMetadata.authorName}>
      <Avatar siteAuthorFullName={data.site.siteMetadata.authorFullName} />
      <Biography siteDescription={data.site.siteMetadata.description} />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
