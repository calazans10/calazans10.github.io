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
        As a passionate software developer, Jeferson has worked for several technology companies in
        various industries, from payments to e-commerce. Since the beginning of his career, Jeferson
        has adapted to each situation, helping the companies he worked with to build well-crafted
        applications. He is always open-minded and eager to learn new methodologies and
        technologies.
      </Paragraph>
      <Paragraph>
        When he is not working, you will find Jeferson wandering through the beautiful landscapes
        around Rio de Janeiro or hanging out with his son and wife. He is also into reading books,
        listening to music and the radio show RoNca RoNca, and watching movies and TV series.
      </Paragraph>
      <Paragraph>
        If you want to know more about him, take a look at his profile on{" "}
        <Link href="https://br.linkedin.com/in/calazans10">Linkedin</Link>, read some of his code on{" "}
        <Link href="https://github.com/calazans10">Github</Link>, check out his stream on{" "}
        <Link href="https://twitter.com/calazans10">Twitter</Link> or get in touch via{" "}
        <Link href="mailto:calazans10@gmail.com">email</Link>.
      </Paragraph>
    </Container>
  )
}

export default Biography
