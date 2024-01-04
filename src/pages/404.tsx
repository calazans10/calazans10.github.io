import Layout from "components/Layout"
import SEO from "components/SEO"
import { HeadFC, PageProps, graphql, useStaticQuery } from "gatsby"
import * as React from "react"

const NotFoundPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          authorName
        }
      }
    }
  `)

  return (
    <Layout siteAuthorName={data.site.siteMetadata.authorName}>
      <div>
        <h1>Erro 404</h1>
        <h2>Página não encontrada</h2>
        <p>Desculpe, a página que você está procurando não existe ou não está disponível.</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <SEO title="404 - Página não encontrada" />
