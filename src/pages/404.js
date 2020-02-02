import React from "react"
import SEO from "../components/seo"
import PageNotFound from "../components/PageNotFound/PageNotFound";

const NotFoundPage = () => (
  <>
    <SEO title="🧦 Lost Socks 🧦" />
    <main style={{overflow: "hidden"}}>
      <PageNotFound />
    </main>
  </>
)

export default NotFoundPage
