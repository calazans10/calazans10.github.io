import styled from "@emotion/styled"
import { em, rem, math, stripUnit } from "polished"

export const Container = styled.div`
  @media (min-width: ${em("1200px")}) {
    width: 40.09009%;
  }
`

export const Paragraph = styled.p`
  color: #666;
  letter-spacing: 0.016em;
  line-height: ${stripUnit(math("24px / 16px"))};

  &:first-of-type {
    color: #000;
    font-size: ${em("18px")};
  }

  &:not(:last-of-type) {
    margin-bottom: ${rem("15px")};
  }
`

export const Link = styled.a`
  color: #0069ff;

  &:visited {
    color: #0069ff;
  }

  &:hover {
    color: #0054cc;
  }
`
