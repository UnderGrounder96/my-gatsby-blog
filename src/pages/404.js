import React from "react"

import Layout from "../components/Layout"

export default function NotFoundPage() {
  return (
    <Layout page="Not Found">
      <img className="center" loading="lazy" src="/404.png" alt="Not Found" />
    </Layout>
  )
}
