import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 - Página não encontrada." />
    <div>
      <h1>Erro 404</h1>
      <h2>Página não encontrada</h2>
      <p>
        Desculpe, a página que você está procurando não existe ou não está
        disponível.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
