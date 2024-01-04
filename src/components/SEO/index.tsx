import { graphql, useStaticQuery } from "gatsby"
import logoLarge from "images/logo-large.png"
import * as React from "react"
import { Helmet } from "react-helmet"

type Props = {
  description?: string
  lang?: string
  title?: string
}

const SEO: React.FC<Props> = ({ description = "", lang = "pt-br", title = "" }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          authorName
          siteUrl
          twitterUsername
        }
      }
    }
  `)

  const metaDescription = description || data.site.siteMetadata.description
  const metaTitle = title || data.site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      defaultTitle={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:locale`,
          content: `pt_BR`,
        },
        {
          property: `og:siteUrl`,
          content: data.site.siteMetadata.siteUrl,
        },
        {
          property: `og:site_name`,
          content: `Página pessoal de ${data.site.siteMetadata.authorName}`,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: logoLarge,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: data.site.siteMetadata.twitterUsername,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.twitterUsername,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: logoLarge,
        },
      ]}
    />
  )
}

export default SEO
