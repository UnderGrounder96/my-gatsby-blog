import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

import "../scss/style.scss"
import LayoutStyles from "../scss/components/layout.module.scss"

export default function Layout({ children }) {
  const fullYear = new Date().getFullYear()

  return (
    <div className={LayoutStyles.container}>
      <div className={LayoutStyles.content}>
        <Header />
        {children}
      </div>

      <Footer fullYear={fullYear} />
    </div>
  )
}
