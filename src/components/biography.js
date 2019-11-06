import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { em, rem, math, stripUnit } from "polished"

const Paragraph = styled.p`
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

const Biography = ({ siteDescription }) => (
  <div
    css={css`
      @media (min-width: ${em("1200px")}) {
        width: 40.09009%;
      }
    `}
  >
    <Paragraph>{siteDescription}</Paragraph>
    <Paragraph>
      As a passionate software developer, Jeferson has already worked for
      several technology companies in various industries, ranging from payments
      to e-commerce. Since the beginning of his career, Jeferson has adapted to
      each situation, helping the companies he worked with to build well-crafted
      applications. He is always open minded and eager to learn new
      methodologies and technologies.
    </Paragraph>
    <Paragraph>
      When he is not working, you will find Jeferson wandering through the
      beautiful landscapes around Rio de Janeiro or hanging out with his wife,
      Michele. He is also into reading books, listening to music and the radio
      show RoNca RoNca, watching movies and TV series.
    </Paragraph>
    <Paragraph>
      If you want to know more about him, take a look at his profile on{" "}
      <a href="https://br.linkedin.com/in/calazans10">Linkedin</a>, read some of
      his code on <a href="https://github.com/calazans10">Github</a>, check out
      his stream on <a href="https://twitter.com/calazans10">Twitter</a> or get
      in touch via <a href="mailto:calazans10@gmail.com">email</a>.
    </Paragraph>
  </div>
)

Biography.propTypes = {
  siteDescription: PropTypes.string,
}

Biography.defaultProps = {
  siteDescription: "",
}

export default Biography
