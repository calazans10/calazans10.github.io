import { Global } from "@emotion/react"
import Header from "components/Header"
import * as React from "react"
import { GlobalStyles, Main, PageContainer } from "./styles"

type Props = {
  siteAuthorName: string
}

const Layout: React.FC<React.PropsWithChildren<Props>> = ({ siteAuthorName, children }) => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <PageContainer>
        <Header siteAuthorName={siteAuthorName} />
        <Main>{children}</Main>
      </PageContainer>
    </>
  )
}

export default Layout
