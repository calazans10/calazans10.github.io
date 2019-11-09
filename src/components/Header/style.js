import styled from "@emotion/styled"
import { em, rem, hideVisually } from "polished"

import logo from "../../images/logo.png"
import logoMedium from "../../images/logo-medium.png"

export const Container = styled.header`
  margin-top: ${rem("30px")};

  @media (min-width: ${em("1200px")}) {
    margin-top: ${rem("49px")};
    padding-left: calc(50% - 555px);
    padding-right: calc(50% - 555px);
  }
`

export const Logo = styled.a`
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
`

export const Author = styled.span`
  ${hideVisually()};
`
