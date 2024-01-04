import styled from "@emotion/styled"
import { em, rem } from "polished"

export const Container = styled.div`
  display: none;

  @media (min-width: ${em("1200px")}) {
    display: block;
    width: 40.09009%;
    margin-right: ${rem("49px")};
  }
`
