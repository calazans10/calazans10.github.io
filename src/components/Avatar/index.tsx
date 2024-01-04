import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { Container } from "./styles"

type Props = {
  siteAuthorFullName: string
}

const Avatar: React.FC<Props> = ({ siteAuthorFullName }) => {
  return (
    <Container>
      <StaticImage
        src="../../images/avatar.jpg"
        alt={siteAuthorFullName}
        placeholder="blurred"
        layout="fixed"
        width={445}
        height={508}
      />
    </Container>
  )
}

export default Avatar
