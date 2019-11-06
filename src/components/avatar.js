import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { em, rem } from "polished"

const Avatar = () => {
  const { site, placeholderImage } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          authorFullName
        }
      }
      placeholderImage: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 445, height: 508) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div
      css={css`
        display: none;
        @media (min-width: ${em("1200px")}) {
          display: block;
          width: 40.09009%;
          margin-right: ${rem("49px")};
        }
      `}
    >
      <Img
        fixed={placeholderImage.childImageSharp.fixed}
        alt={site.siteMetadata.authorFullName}
      />
    </div>
  )
}

export default Avatar
