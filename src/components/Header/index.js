import React from "react"
import PropTypes from "prop-types"

import { Container, Logo, Author } from "./style"

function Header({ siteAuthorName }) {
  return (
    <Container>
      <Logo href="/">
        <Author>{siteAuthorName}</Author>
      </Logo>
    </Container>
  )
}

Header.propTypes = {
  siteAuthorName: PropTypes.string,
}

Header.defaultProps = {
  siteAuthorName: ``,
}

export default Header
