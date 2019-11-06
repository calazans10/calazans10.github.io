import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import { em, rem } from "polished"
import logo from "../images/logo.png"
import logoMedium from "../images/logo-medium.png"

const Header = ({ siteAuthorName }) => (
  <header
    css={css`
      margin-top: ${rem("30px")};
      @media (min-width: ${em("1200px")}) {
        margin-top: ${rem("49px")};
        padding-left: calc(50% - 555px);
        padding-right: calc(50% - 555px);
      }
    `}
  >
    <a
      css={css`
        display: block;
        width: 100%;
        height: ${rem("40px")};
        background: url(${logo}) center center no-repeat;
        background-size: ${rem("48px")} 100%;
        @media (min-width: ${em("600px")}) {
          background-image: url(${logoMedium});
          background-size: ${rem("287px")} 100%;
        }
        @media (min-width: ${em("1200px")}) {
          background-position: left center;
        }
      `}
      href="/"
    >
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
