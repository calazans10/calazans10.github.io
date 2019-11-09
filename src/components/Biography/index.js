import React from "react"
import PropTypes from "prop-types"

import { Container, Paragraph, Link } from "./style"

function Biography({ siteDescription }) {
  return (
    <Container>
      <Paragraph>{siteDescription}</Paragraph>
      <Paragraph>
        As a passionate software developer, Jeferson has already worked for
        several technology companies in various industries, ranging from
        payments to e-commerce. Since the beginning of his career, Jeferson has
        adapted to each situation, helping the companies he worked with to build
        well-crafted applications. He is always open minded and eager to learn
        new methodologies and technologies.
      </Paragraph>
      <Paragraph>
        When he is not working, you will find Jeferson wandering through the
        beautiful landscapes around Rio de Janeiro or hanging out with his wife,
        Michele. He is also into reading books, listening to music and the radio
        show RoNca RoNca, watching movies and TV series.
      </Paragraph>
      <Paragraph>
        If you want to know more about him, take a look at his profile on{" "}
        <Link href="https://br.linkedin.com/in/calazans10">Linkedin</Link>, read
        some of his code on{" "}
        <Link href="https://github.com/calazans10">Github</Link>, check out his
        stream on <Link href="https://twitter.com/calazans10">Twitter</Link> or
        get in touch via <Link href="mailto:calazans10@gmail.com">email</Link>.
      </Paragraph>
    </Container>
  )
}

Biography.propTypes = {
  siteDescription: PropTypes.string,
}

Biography.defaultProps = {
  siteDescription: "",
}

export default Biography
