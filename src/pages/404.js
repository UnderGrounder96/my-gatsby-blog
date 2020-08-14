import React from "react"

import Layout from "../components/Layout"

import Style from "../scss/pages/style.module.scss"

export default function NotFoundPage() {
  return (
    <Layout page="Not Found">
      <img
        className={Style.center}
        loading="lazy"
        src="/404.png"
        alt="Not Found"
      />
    </Layout>
  )
}
