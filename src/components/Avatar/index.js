import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Container } from "./style"

function Avatar() {
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
    <Container>
      <Img
        fixed={placeholderImage.childImageSharp.fixed}
        alt={site.siteMetadata.authorFullName}
      />
    </Container>
  )
}

export default Avatar
