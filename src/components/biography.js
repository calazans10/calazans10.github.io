import React from "react"
import PropTypes from "prop-types"

const Biography = ({ siteDescription }) => (
  <div className="biography">
    <p>{siteDescription}</p>
    <p>
      As a passionate software developer, Jeferson has already worked for
      several technology companies in various industries, ranging from payments
      to e-commerce. Since the beginning of his career, Jeferson has adapted to
      each situation, helping the companies he worked with to build well-crafted
      applications. He is always open minded and eager to learn new
      methodologies and technologies.
    </p>
    <p>
      When he is not working, you will find Jeferson wandering through the
      beautiful landscapes around Rio de Janeiro or hanging out with his wife,
      Michele. He is also into reading books, listening to music and the radio
      show RoNca RoNca, watching movies and TV series.
    </p>
    <p>
      If you want to know more about him, take a look at his profile on{" "}
      <a href="https://br.linkedin.com/in/calazans10">Linkedin</a>, read some of
      his code on <a href="https://github.com/calazans10">Github</a>, check out
      his stream on <a href="https://twitter.com/calazans10">Twitter</a> or get
      in touch via <a href="mailto:calazans10@gmail.com">email</a>.
    </p>
  </div>
)

Biography.propTypes = {
  siteDescription: PropTypes.string,
}

Biography.defaultProps = {
  siteDescription: "",
}

export default Biography
