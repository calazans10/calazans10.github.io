import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
    <div className="avatar">
      <Img
        fixed={placeholderImage.childImageSharp.fixed}
        alt={site.siteMetadata.authorFullName}
      />
    </div>
  )
}

export default Avatar
