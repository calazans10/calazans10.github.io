import * as React from "react"
import { Author, Container, Logo } from "./styles"

type Props = {
  siteAuthorName: string
}

const Header: React.FC<Props> = ({ siteAuthorName }) => {
  return (
    <Container>
      <Logo href="/">
        <Author>{siteAuthorName}</Author>
      </Logo>
    </Container>
  )
}

export default Header
