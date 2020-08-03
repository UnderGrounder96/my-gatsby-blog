import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Layout({ children }) {
  const fullYear = new Date().getFullYear()

  return (
    <div>
      <Header />
      {children}
      <Footer fullYear={fullYear} />
    </div>
  )
}
