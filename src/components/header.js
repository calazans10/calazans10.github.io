import React from "react"
import PropTypes from "prop-types"

const Header = ({ siteAuthorName }) => (
  <header className="main-header">
    <a className="logo" href="/">
      <span className="sr-only">{siteAuthorName}</span>
    </a>
  </header>
)

Header.propTypes = {
  siteAuthorName: PropTypes.string,
}

Header.defaultProps = {
  siteAuthorName: ``,
}

export default Header
