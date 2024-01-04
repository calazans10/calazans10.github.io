import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { em, normalize, rem } from "polished"

export const GlobalStyles = css`
  ${normalize()}

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background-color: #fff;
    font-family: "Nunito Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ol,
  ul,
  p {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
  }
`

export const PageContainer = styled.div`
  margin: 0 auto;
  padding: ${rem("30px")} ${rem("20px")};

  @media (min-width: ${em("600px")}) {
    padding-right: ${rem("75px")};
    padding-left: ${rem("75px")};
  }

  @media (min-width: ${em("900px")}) {
    padding-right: ${rem("155px")};
    padding-left: ${rem("155px")};
  }

  @media (min-width: ${em("1200px")}) {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    padding: 0;
  }
}
`

export const Main = styled.main`
  margin-top: ${rem("50px")};

  @media (min-width: ${em("1200px")}) {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    margin-top: ${rem("90px")};
    padding-left: calc(50% - 555px);
    padding-right: calc(50% - 555px);
  }
`
