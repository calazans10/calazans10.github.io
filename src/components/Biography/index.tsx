import * as React from "react"
import { Container, Link, Paragraph } from "./styles"

type Props = {
  siteDescription: string
}

const Biography: React.FC<Props> = ({ siteDescription }) => {
  return (
    <Container>
      <Paragraph>{siteDescription}</Paragraph>
      <Paragraph>
        As a passionate software developer, Jeferson has worked for several technology companies
        across a range of industries, from payments to e-commerce. Since the beginning of his
        career, he has adapted to each new context, helping the companies he worked with build
        well-crafted applications. He is always open-minded and eager to learn new methodologies and
        technologies.
      </Paragraph>
      <Paragraph>
        When he is not working, you will likely find Jeferson exploring the beautiful landscapes
        around Rio de Janeiro or spending time with his wife and son. He is also an avid reader,
        enjoys listening to music and the radio show RoNca RoNca, and likes watching movies and TV
        series.
      </Paragraph>
      <Paragraph>
        If you want to know more about him, take a look at his profile on{" "}
        <Link href="https://br.linkedin.com/in/calazans10">LinkedIn</Link>, read some of his code on{" "}
        <Link href="https://github.com/calazans10">GitHub</Link>, check out his stream on{" "}
        <Link href="https://twitter.com/calazans10">Twitter</Link> or get in touch via{" "}
        <Link href="mailto:calazans10@gmail.com">email</Link>.
      </Paragraph>
    </Container>
  )
}

export default Biography
